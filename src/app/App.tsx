import { LoginPage } from '../pages/LoginPage/LoginPage'
import { PageLayout } from '../widgets/PageLayout/PageLayout'

export const App = () => {
  return (
    <div className='app'>
      <PageLayout>
        <LoginPage />
      </PageLayout>
    </div>
  )
}
