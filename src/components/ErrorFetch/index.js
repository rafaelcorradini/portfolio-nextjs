import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import RefreshIcon from '@material-ui/icons/Refresh'
import { RetryButton, WarningIcon } from './style'

const ErrorFetch = ({ retry }) => (
  <div>
    <Typography variant="body1">
      <WarningIcon /> Ocorreu algum erro ;(
    </Typography>
    {retry && (
      <RetryButton onClick={retry} startIcon={<RefreshIcon />} color="primary">
        {' '}
        Tente novamente
      </RetryButton>
    )}
  </div>
)

ErrorFetch.propTypes = {
  retry: PropTypes.func
}

ErrorFetch.defaultProps = {
  retry: null
}

export default ErrorFetch
