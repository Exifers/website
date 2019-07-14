import { withAjaxStoreData } from '../hocs/async'

export const withGameMasterEmails = withAjaxStoreData(
  'emails',
  '/gamemaster/emails/'
)
