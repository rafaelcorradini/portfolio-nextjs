import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import RefreshIcon from '@material-ui/icons/Refresh'
import { RetryButton, WarningIcon } from './style'
import { useTranslation } from 'react-i18next'

const ErrorFetch = ({ retry }) => {
  const { t } = useTranslation()

  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Grid item>
        <WarningIcon />
      </Grid>
      <Grid item>
        <Typography variant="body1">{t('error.title')}</Typography>
      </Grid>

      <Grid item>
        {retry && (
          <RetryButton
            onClick={retry}
            startIcon={<RefreshIcon />}
            color="primary"
          >
            {t('error.retry')}
          </RetryButton>
        )}
      </Grid>
    </Grid>
  )
}

ErrorFetch.propTypes = {
  retry: PropTypes.func
}

ErrorFetch.defaultProps = {
  retry: null
}

export default ErrorFetch
