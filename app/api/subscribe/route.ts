import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Nova <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL!,
      subject: "New subscriber on Nova",
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f0f2ee;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f2ee;padding:40px 16px;">
    <tr><td align="center">
      <table width="480" cellpadding="0" cellspacing="0" border="0" style="max-width:480px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e4e7e1;">

        <!-- Header accent bar -->
        <tr><td height="4" style="background:#a9ea51;font-size:0;line-height:0;">&nbsp;</td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px 32px;">

          <!-- Logo -->
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
            <tr>
              <td style="width:36px;height:36px;background:#1c2035;border-radius:8px;text-align:center;vertical-align:middle;">
                <span style="font-family:Georgia,serif;font-size:20px;font-weight:700;color:#a9ea51;line-height:36px;display:block;">N</span>
              </td>
              <td style="padding-left:10px;vertical-align:middle;">
                <span style="font-size:17px;font-weight:600;color:#18202e;letter-spacing:-0.3px;">Nova</span>
              </td>
            </tr>
          </table>

          <!-- Heading -->
          <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#18202e;letter-spacing:-0.5px;">New Subscriber! &#127881;</h1>
          <p style="margin:0 0 28px;font-size:14px;color:#6b7a6b;line-height:1.6;">Someone just subscribed to Nova updates.</p>

          <!-- Email card -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="background:#f7f9f5;border:1px solid #e4e7e1;border-radius:12px;padding:18px 20px;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#9aab96;text-transform:uppercase;letter-spacing:0.8px;">Email address</p>
                <p style="margin:0;font-size:16px;font-weight:500;color:#1c2035;">${email}</p>
              </td>
            </tr>
          </table>

          <!-- CTA hint -->
          <p style="margin:24px 0 0;font-size:13px;color:#9aab96;line-height:1.5;">
            You can reply to this email to reach out to the subscriber directly.
          </p>

        </td></tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f7f9f5;border-top:1px solid #e4e7e1;padding:16px 40px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#b0bba8;">Nova Landing Page &copy; ${new Date().getFullYear()}</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Subscribe error:", error)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}