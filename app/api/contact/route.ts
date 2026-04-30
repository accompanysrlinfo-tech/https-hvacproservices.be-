import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "A&C Company <onboarding@resend.dev>",
      to: "Accompany.srlinfo@gmail.com",
      subject: "Noua cerere de pe site",
      html: `
        <h2>Nou message</h2>
        <p><strong>Nom:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
