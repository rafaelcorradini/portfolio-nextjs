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

const Header = () => {
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
                  endIcon={<KeyboardArrowRight />}
                >
                  {t('header.button')}
                </Button>
              </Grid>
            </Parallax>
          </StyledGridHeader>
        </StyledContainer>
      </StyledHeader>
    </ParallaxProvider>
  )
}

export default Header
