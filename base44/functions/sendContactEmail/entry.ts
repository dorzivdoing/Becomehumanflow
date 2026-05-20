import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, phone, message } = await req.json();

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'dorzivbio@gmail.com',
      subject: `פנייה חדשה מ-${name}`,
      body: `שם: ${name}\nטלפון: ${phone}\nאימייל: ${email}\n\nהודעה:\n${message}`,
    });

    if (email) {
      await base44.asServiceRole.integrations.Core.SendEmail({
        from_name: 'דור זיו',
        to: email,
        subject: 'הפנייה שלך התקבלה',
        body: `שלום ${name},\n\nהפנייה שלך התקבלה. אצור קשר בהקדם.\n\nדור זיו\nפסיכותרפיה גופנית`,
      });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});