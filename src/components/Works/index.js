import React, { useState, useEffect, useCallback } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Chip from '@material-ui/core/Chip'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { StyledSection } from './style'
import Public from 'common/resources/public'
import ErrorFetch from 'components/ErrorFetch/index'
import Loading from 'components/Loading/index'

const Works = ({ worksRef }) => {
  const { t, i18n } = useTranslation()
  const [works, setWorks] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchWorks = useCallback(async () => {
    try {
      const { data } = await Public.listWorks()
      const currentLanguage = i18n.language || window.localStorage.i18nextLng
      setWorks(
        data.filter((item) => item.language === currentLanguage.substring(0, 2))
      )
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [i18n.language])

  useEffect(() => {
    fetchWorks()
  }, [fetchWorks])

  let worksList

  if (loading) {
    worksList = <Loading />
  }

  if (error) {
    worksList = <ErrorFetch retry={fetchWorks} />
  }

  if (!loading && !error) {
    worksList = works.map((work) => (
      <Grid item key={work._id} xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {work.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {work.description}
            </Typography>
            <Typography color="textSecondary" className="mt-2 mb-1">
              Tecnologias utilizadas:
            </Typography>
            {typeof work.tags[0] === 'string' ? (
              <div className="mt-2">
                <Grid
                  container
                  alignItems="center"
                  spacing={1}
                  className="mt-1"
                >
                  {work.tags.map((tag) => (
                    <Grid key={tag} item>
                      <Chip
                        label={tag}
                        variant="outlined"
                        color="textSecondary"
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ) : (
              work.tags.map((tagGroup) => (
                <div key={tagGroup} className="mt-2">
                  <Typography color="textSecondary" variant="caption">
                    {tagGroup.name}:
                  </Typography>
                  <Grid
                    container
                    alignItems="center"
                    spacing={1}
                    className="mt-1"
                  >
                    {tagGroup.content.map((tag) => (
                      <Grid key={tag} item>
                        <Chip
                          label={tag}
                          variant="outlined"
                          color="textSecondary"
                        />
                      </Grid>
                    ))}
                  </Grid>
                </div>
              ))
            )}
          </CardContent>
          <CardActions>
            {work.url && (
              <Button
                size="small"
                target="_blank"
                color="primary"
                href={work.url}
              >
                {t('works.visit')}
              </Button>
            )}
            {work.source && (
              <Button
                size="small"
                color="primary"
                target="_blank"
                href={work.source}
              >
                {t('works.source')}
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
    ))
  }

  return (
    <StyledSection className="py-4" ref={worksRef}>
      <Container>
        <Typography variant="h4" align="center" color="primary">
          {t('works.title')}
        </Typography>
        <Typography variant="h5" align="center">
          {t('works.subtitle')}
        </Typography>
        <Grid container justify="space-between" className="my-4" spacing={3}>
          {worksList}
        </Grid>
      </Container>
    </StyledSection>
  )
}

export default Works
