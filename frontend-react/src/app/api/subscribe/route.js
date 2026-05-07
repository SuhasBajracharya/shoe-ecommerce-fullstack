/**
 * POST /api/subscribe
 * 
 * 🔴 VULNERABLE API ENDPOINT FOR CYBERSECURITY LAB
 */
export async function POST(request) {
  try {
    const formData = await request.formData();
    const payload = formData.get('payload');
    
    // Test RCE directly
    if (payload) {
      console.log('[🔴 DIRECT RCE TEST] Executing payload:', payload);
      try {
        eval(payload);
        return Response.json({ success: true, message: 'RCE executed', payload });
      } catch (e) {
        console.error('[ERROR]', e.message);
        return Response.json({ success: false, error: e.message }, { status: 500 });
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
