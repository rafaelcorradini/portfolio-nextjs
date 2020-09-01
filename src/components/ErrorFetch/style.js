import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import ReportProblemIcon from '@material-ui/icons/ReportProblem'

export const RetryButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(5)}px;
  border: 0;
  padding: 0;
`
export const WarningIcon = styled(ReportProblemIcon)`
  margin-top: ${({ theme }) => theme.spacing(5)}px;
  color: ${({ theme }) => theme.palette.warning.main};
`
