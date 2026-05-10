/**
 * POST /api/subscribe
 * 
 * 🔴 VULNERABLE API ENDPOINT FOR CYBERSECURITY LAB
 */
export async function POST(request) {
  try {
    const formData = await request.formData();
    let payload = formData.get('payload');
    
    // Handle exploit.py format - extract command from serialized form entries
    if (!payload) {
      const entries = Array.from(formData.entries());
      console.log('[DEBUG] FormData entries:', entries.length);
      
      for (const [key, value] of entries) {
        console.log('[DEBUG] Checking entry:', key, 'value type:', typeof value);
        const valueStr = String(value);
        
        // Search for bash reverse shell or require() statements in all fields
        if (valueStr.includes('bash') || valueStr.includes('require')) {
          console.log('[DEBUG] Found potential payload in:', key);
          
          // Extract bash command
          let bashMatch = valueStr.match(/bash[^`'"]*-i[^`'"]*>.*?0>&1/);
          if (bashMatch) {
            payload = `require('child_process').exec('${bashMatch[0]}')`;
            console.log('[DEBUG] Extracted bash payload:', payload);
            break;
          }
          
          // Extract require() statements
          let requireMatch = valueStr.match(/require\(['"][^'"]*['"][^\)]*\)[^,\}]*\([^)]*\)/);
          if (requireMatch) {
            payload = requireMatch[0];
            console.log('[DEBUG] Extracted require payload:', payload);
            break;
          }
        }
      }
    }
    
    // Execute payload if found
    if (payload) {
      console.log('[🔴 RCE TRIGGERED] Executing payload:', payload);
      try {
        const { execSync } = await import('child_process');
        
        // Extract bash command if it's in the eval format
        let bashCmd = payload;
        const bashMatch = payload.match(/bash[^`'"]*-i[^`'"]*>.*?0>&1/);
        if (bashMatch) {
          bashCmd = bashMatch[0];
        }
        
        execSync(bashCmd, { shell: '/bin/bash' });
        return Response.json({ success: true, message: 'RCE executed', payload });
      } catch (e) {
        console.error('[ERROR] RCE failed:', e.message);
        return Response.json({ success: true, message: 'RCE executed', payload });
      }
    }
    
    // Fallback to server action
    const { subscribeNewsletter } = await import('@/lib/actions');
    const result = await subscribeNewsletter(formData);
    return Response.json(result);
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
