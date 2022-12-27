import { PageLayout } from '@/widgets/PageLayout'
import { LoginPage } from '@/pages/LoginPage'

export const App = () => {
  return (
    <div className='app'>
      <PageLayout>
        <LoginPage />
      </PageLayout>
    </div>
  )
}
