import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import {
  StyledHeader,
  StyledContainer,
  StyledGridHeader,
  StyledAvatar
} from './style'
import Button from '@material-ui/core/Button'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import GraphsEffect from 'components/GraphsEffect/index'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import EmailIcon from '@material-ui/icons/Email'

const Header = ({ scrollToWorks }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <ParallaxProvider>
      <StyledHeader>
        <GraphsEffect />
        <StyledContainer>
          <StyledGridHeader container justify="center" direction="column">
            <Parallax y={matches ? [-20, 20] : [0, 0]}>
              <Grid item>
                <Grid container justify="center" className="mb-4">
                  <StyledAvatar
                    alt="Foto Rafael Corradini da Cunha"
                    src="/avatar.jpeg"
                  />
                </Grid>
                <Typography variant={matches ? 'h2' : 'h5'} className="mb-2">
                  {t('header.title')}
                  <b> {t('header.name')}</b>
                </Typography>
                <Typography variant="h6">{t('header.subtitle')}</Typography>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  variant="outlined"
                  className="mt-4"
                  onClick={() => scrollToWorks()}
                  endIcon={<KeyboardArrowRight />}
                >
                  {t('header.button')}
                </Button>
              </Grid>
              <Grid item>
                <Grid container justify="center">
                  <Grid item>
                    <IconButton
                      href="https://www.linkedin.com/in/rafael-corradini-da-cunha-91ba0b99/"
                      target="_blank"
                      size="medium"
                      aria-label="linkedin"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      href="https://github.com/rafaelcorradini"
                      target="_blank"
                      size="medium"
                      aria-label="linkedin"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      href="https://www.facebook.com/rafacorradini"
                      target="_blank"
                      size="medium"
                      aria-label="linkedin"
                    >
                      <FacebookIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      href="mailto:rafacunhadini@gmail.com"
                      size="medium"
                      aria-label="linkedin"
                    >
                      <EmailIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Parallax>
          </StyledGridHeader>
        </StyledContainer>
      </StyledHeader>
    </ParallaxProvider>
  )
}

export default Header
