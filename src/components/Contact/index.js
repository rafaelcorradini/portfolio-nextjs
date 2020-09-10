import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextField } from 'formik-material-ui'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Swal from 'sweetalert2'
import PhoneInput from 'components/PhoneInput'
import Button from '@material-ui/core/Button'
import ReCAPTCHA from 'react-google-recaptcha'
import Public from 'common/resources/public/index'
import { useTheme } from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
const phoneRegex = /\([1-9]\d\)\s9?\d{4}-\d{4}/

export default function Contact() {
  const [captcha, setCaptcha] = useState(null)
  const ContactValidation = Yup.object().shape({
    name: Yup.string().required('Insira seu nome completo'),
    email: Yup.string().email('E-mail inválido').required('Insira seu e-mail'),
    phone: Yup.string().matches(phoneRegex, 'Telefone inválido')
  })
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <div className="mt-4">
      <Typography variant="h4" align="center" color="primary">
        {t('contact.title')}
      </Typography>
      <Typography variant="h5" align="center">
        {t('contact.subtitle')}
      </Typography>
      <Container maxWidth="sm" className="my-4">
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            message: ''
          }}
          validationSchema={ContactValidation}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await Public.contact({
                ...values,
                captcha
              })
              Swal.fire({
                icon: 'success',
                title: 'Mensagem enviada com sucesso!',
                text: 'Retornaremos o mais breve possível.',
                confirmButtonColor: theme.palette.secondary.main
              })
              resetForm()
            } catch (errors) {
              Swal.fire({
                icon: 'error',
                title: 'Ocorreu um erro em nossos servidores ;(',
                text: 'Por favor, tente novamente mais tarde.'
              })
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing="2" className="mt-2">
                <Grid item xs={12}>
                  <Field
                    type="name"
                    name="name"
                    label="Nome"
                    variant="outlined"
                    component={TextField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    type="email"
                    name="email"
                    label="E-mail"
                    variant="outlined"
                    component={TextField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    InputProps={{
                      inputComponent: PhoneInput
                    }}
                    type="tel"
                    variant="outlined"
                    name="phone"
                    label="Telefone (Opcional)"
                    component={TextField}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    type="message"
                    name="message"
                    label="Mensagem"
                    variant="outlined"
                    component={TextField}
                    fullWidth
                    multiline
                    rows={7}
                  />
                </Grid>
              </Grid>

              <Grid container justify="center" className="mt-4">
                <ReCAPTCHA
                  sitekey="6LcFOMMZAAAAAF8t2tmPc43_EiHvahxUhxOQb1JQ"
                  onChange={(value) => setCaptcha(value)}
                />
              </Grid>

              <Grid container className="my-4" justify="center">
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    color="primary"
                    style={{ width: '100%' }}
                    text-align="center"
                    disabled={isSubmitting || !captcha}
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  )
}
