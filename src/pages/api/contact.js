import sendgrid from '@sendgrid/mail'
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
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    await sendgrid.send({
      from: 'rafacunhadini@gmail.com',
      to: 'rafacunhadini@gmail.com',
      subject: 'Contato',
      html: `
        <p>name: ${req.body.name}</p>
        <p>email: ${req.body.email}</p>
        <p>telefone: ${req.body.phone}</p>
        <p>${req.body.message}</p>
      `
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    res.status(500).json({ error: err.response.body.errors })
  }
}
