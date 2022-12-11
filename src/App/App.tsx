import { Storybook } from '../shared/ui/Storybook/Storybook'
import { BugButton } from '../pages/ErrorPage/BugButton'

export const App = () => {
  return (
    <div className='app'>
      <BugButton/>
      <Storybook />
    </div>
  )
}
