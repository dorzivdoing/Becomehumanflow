import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';
import { Resend } from 'npm:resend@4.0.0';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, phone, message } = await req.json();

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    // Send notification to Dor
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'dorzivbio@gmail.com',
      subject: `פנייה חדשה מ-${name}`,
      text: `שם: ${name}\nטלפון: ${phone}\nאימייל: ${email || 'לא הוזן'}\n\nהודעה:\n${message || 'לא הוזנה הודעה'}`,
    });

    // Send confirmation to user if email provided
    if (email) {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'הפנייה שלך התקבלה',
        text: `שלום ${name},\n\nהפנייה שלך התקבלה. אצור קשר בהקדם.\n\nדור זיו\nפסיכותרפיה גופנית`,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});