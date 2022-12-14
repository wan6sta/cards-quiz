import { PageLayout } from '../widgets/PageLayout/PageLayout'
import { LoginPage } from '../pages/LoginPage/LoginPage'

export const App = () => {
  return (
    <div className='app'>
      <PageLayout>
        <LoginPage />
      </PageLayout>
    </div>
  )
}
