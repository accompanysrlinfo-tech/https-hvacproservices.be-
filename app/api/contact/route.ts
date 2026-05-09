import { Resend } from "resend"

const apiKey = process.env.RESEND_API_KEY

const resend = apiKey
  ? new Resend(apiKey)
  : null

export async function POST(req: Request) {
  try {
    if (!resend) {
      return Response.json(
        {
          success: false,
          error: "Missing RESEND_API_KEY",
        },
        {
          status: 500,
        }
      )
    }

    const body = await req.json()

    const { name, email, message } = body

    await resend.emails.send({
      from: "onboarding@resend.dev",

      to: "accompany.srlinfo@gmail.com",

      subject: "Nouvelle demande HVAC",

      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h1>Nouvelle demande HVAC</h1>

          <p>
            <strong>Nom:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>${message}</p>
        </div>
      `,
    })

    return Response.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error(error)

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}
