import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Grid container justify="center" direction="column">
        <Grid item>
          <Typography>{t('header.title')}</Typography>
          <Typography>{t('header.subtitle')}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header
