import { LoginPage } from '../pages/LoginPage/LoginPage'
import { PageLayout } from '../widgets/PageLayout/ui/PageLayout'

export const App = () => {
  return (
    <div className='app'>
      <PageLayout>
        <LoginPage />
      </PageLayout>
    </div>
  )
}
