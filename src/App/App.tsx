import { TextFiled } from '../shared/ui/TextField/TextFiled'

export const App = () => {
  return (
    <div className='app'>
      <div className='test'>
        <TextFiled title={'Email'} textFieldMode={'outlined'} />
        <TextFiled title={'Email'} textFieldMode={'outlined'} showPassword />
        <TextFiled title={'Email'} textFieldMode={'nonOutlined'} />
        <TextFiled title={'Email'} textFieldMode={'nonOutlined'} showPassword />
      </div>
    </div>
  )
}
