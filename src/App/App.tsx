import { Storybook } from '../shared/ui/Storybook/Storybook'
import { BugButton } from '../pages/ErrorPage/BugButton'
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage'

export const App = () => {
  return (
    <div className='app'>
      <BugButton />
      <Storybook />
      <RegistrationPage />
    </div>
  )
}
