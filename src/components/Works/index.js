import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { StyledSection } from './style'

const Works = () => {
  const { t } = useTranslation()
  return (
    <StyledSection className="py-4">
      <Container>
        <Typography variant="h4" align="center" color="primary">
          {t('works.title')}
        </Typography>
        <Typography variant="h5" align="center">
          {t('works.subtitle')}
        </Typography>
        <Grid container className="my-4">
          <Card style={{ width: '400px' }}>
            <CardActionArea>
              <CardMedia
                style={{ height: '300px', margin: '20px', borderRadius: '2px' }}
                image="/portfolio/mercadao.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mercadão dos Enxovais
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Site institucional que apresenta os produtos da loja Mercadão
                  dos Enxovais. O site permite ao usuário entrar em contato e
                  fazer orçamentos de uma lista de produtos.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Visitar
              </Button>
              <Button size="small" color="primary">
                Ver Código
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Works
