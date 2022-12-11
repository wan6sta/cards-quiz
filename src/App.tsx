import { ReactComponent as Bear } from './assets/icons/bear.svg'
import react from './assets/icons/react.jpg'

export const App = () => {
  return (
    <div className='app'>
      <Bear/>
      <img src={react}/>
      Hello world
    </div>
  )
}
