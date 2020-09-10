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
  const theme = useTheme()
  const { t } = useTranslation()
  const ContactValidation = Yup.object().shape({
    name: Yup.string().required(t('contact.validation.name.required')),
    email: Yup.string()
      .email(t('contact.validation.email.invalid'))
      .required(t('contact.validation.email.required')),
    phone: Yup.string().matches(
      phoneRegex,
      t('contact.validation.phone.invalid')
    )
  })

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
                title: t('contact.successTitle'),
                text: t('contact.successText'),
                confirmButtonColor: theme.palette.primary.main
              })
              resetForm()
            } catch (errors) {
              Swal.fire({
                icon: 'error',
                title: t('contact.errorTitle'),
                text: t('contact.errorText')
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
                    label={t('contact.form.name')}
                    variant="outlined"
                    component={TextField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    type="email"
                    name="email"
                    label={t('contact.form.email')}
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
                    label={t('contact.form.phone')}
                    component={TextField}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    type="message"
                    name="message"
                    label={t('contact.form.message')}
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
                  sitekey={process.env.RECAPTCHA_KEY}
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
                    fullWidth
                    text-align="center"
                    disabled={isSubmitting || !captcha}
                  >
                    {t('contact.send')}
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
