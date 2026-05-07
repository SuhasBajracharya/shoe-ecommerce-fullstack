'use server';

// ============================================================================
// INTENTIONALLY VULNERABLE SERVER ACTION - CYBERSECURITY LAB DEMO
// ============================================================================
// This file demonstrates unsafe form data handling that allows:
// - Prototype pollution attacks
// - Arbitrary property assignment via __proto__ or constructor.prototype
// - Potential Remote Code Execution (RCE) through crafted payloads
//
// DO NOT USE THIS CODE IN PRODUCTION
// ============================================================================

/**
 * VULNERABLE: subscribeNewsletter Server Action
 * 
 * ❌ INSECURE PRACTICES:
 * 1. No input validation - directly processes FormData entries
 * 2. Uses Object.assign() to merge untrusted user input into server object
 * 3. Allows access to prototype pollution via __proto__, constructor, prototype
 * 4. Dynamic property access without whitelist
 * 5. Converts user data to object without sanitization
 * 
 * 🎯 HOW ATTACKERS EXPLOIT THIS:
 * Attackers can craft malicious form payloads with fields like:
 *   - "__proto__[isAdmin]": "true"
 *   - "constructor.prototype.isAdmin": "true"
 *   - These pollute the Object prototype, affecting all objects in the app
 * 
 * Combined with Next.js RSC protocol (Next-Action header), attackers can:
 *   - Escalate privileges by polluting isAdmin, isAuthenticated, etc.
 *   - Execute arbitrary code by polluting constructor or method references
 *   - Modify application behavior server-side
 * 
 * ✅ PROPER FIX (NOT IMPLEMENTED):
 * - Use schema validation (Zod, Joi, etc.)
 * - Whitelist allowed fields explicitly
 * - Never use Object.assign() with user input
 * - Reject any field names containing __proto__ or constructor
 * - Sanitize and validate all input before processing
 */
export async function subscribeNewsletter(formData) {
  try {
    // VULNERABLE: Convert FormData to object without any validation
    const userInput = Object.fromEntries(formData.entries());

    // VULNERABLE: Create a server object that will be modified
    const subscriptionConfig = {
      email: '',
      subscribed: false,
      timestamp: new Date().toISOString(),
      // This object could represent important configuration
      isAdmin: false,
      permissions: 'user',
    };

    // 🔴 CRITICAL VULNERABILITY: Object.assign() merges untrusted input directly
    // Attacker can use fields like "__proto__" to pollute the prototype chain
    // Example malicious payload:
    //   { "__proto__": { "isAdmin": true } }
    //   { "constructor.prototype.isAdmin": "true" }
    // This would affect all objects in the application
    Object.assign(subscriptionConfig, userInput);

    // VULNERABLE: No validation before processing
    // Dynamically accessing properties that may have been polluted
    if (subscriptionConfig.email && subscriptionConfig.email.includes('@')) {
      subscriptionConfig.subscribed = true;
    }

    // VULNERABLE: Logging the entire config (may expose polluted prototype)
    console.log('[VULNERABLE] Newsletter subscription:', subscriptionConfig);

    // VULNERABLE: In a real app, this might be saved to DB
    // Prototype pollution could affect database operations, auth checks, etc.
    
    // Simulate a response that reflects some of the processed data
    return {
      success: true,
      message: 'Subscription processed',
      // Dangerous: returning properties that may have been polluted
      config: {
        email: subscriptionConfig.email,
        subscribed: subscriptionConfig.subscribed,
        // These could be modified by prototype pollution:
        isAdmin: subscriptionConfig.isAdmin,
        permissions: subscriptionConfig.permissions,
      },
    };
  } catch (error) {
    console.error('[VULNERABLE] Newsletter error:', error);
    return {
      success: false,
      message: 'Subscription failed',
    };
  }
}

// ============================================================================
// Example of a SECURE version (for reference, NOT used in this vulnerable app)
// ============================================================================
/*
export async function subscribeNewsletterSECURE(formData) {
  try {
    // ✅ Validate input with schema
    const schema = {
      email: (val) => typeof val === 'string' && val.includes('@'),
    };

    // ✅ Only allow specific fields
    const allowedFields = ['email'];
    const safeInput = {};
    
    for (const field of allowedFields) {
      if (formData.has(field)) {
        const value = formData.get(field);
        // ✅ Validate against schema
        if (schema[field] && schema[field](value)) {
          safeInput[field] = value;
        }
      }
    }

    // ✅ Reject dangerous field names
    for (const [key] of formData.entries()) {
      if (key.includes('__proto__') || key.includes('constructor') || key.includes('prototype')) {
        throw new Error('Invalid field name');
      }
    }

    // ✅ Process only validated data
    // ...rest of safe implementation
  } catch (error) {
    console.error('Newsletter error:', error);
    return { success: false };
  }
}
*/
