import nodemailer from 'nodemailer'
import fetch from 'node-fetch'

async function verifyRecaptcha(humanKey) {
  const isHuman = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: `secret=${process.env.SERVER_RECAPTCHA_KEY}&response=${humanKey}`
    }
  )
    .then((res) => res.json())
    .then((json) => json.success)
    .catch((err) => {
      throw new Error(`Error in Google Siteverify API. ${err.message}`)
    })

  if (!humanKey || !isHuman) {
    throw new Error('You are not a human.')
  }
}

export default async (req, res) => {
  await verifyRecaptcha(req.body.captcha)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  })

  await transporter.sendMail({
    from: `"${req.body.name}" contact@rafaelcdacunha.com.br`,
    to: 'rafacunhadini@gmail.com',
    subject: 'Contato',
    html: `
      <p>email: ${req.body.email}</p>
      <p>telefone: ${req.body.phone}</p>
      <p>${req.body.message}</p>
    `
  })

  res.status(200).json({ ok: true })
}
