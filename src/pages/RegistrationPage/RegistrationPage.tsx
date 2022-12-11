import React from 'react'
import {
  useGetPingQuery,
  useLoginMutation,
  useRegisterUserMutation,
  useSendPingMutation
} from '../../features/Registration/authApiSlice'

export const RegistrationPage = () => {
  const { data } = useGetPingQuery(1124112414)
  console.log(data)
  // Достаем из хука функцию-тригер запроса и обьект с нужными нам данными,
  // через двоеточие переименовываем чтобы не было конфликтов
  const [
    registerNow,
    {
      isError: registrationError,
      isLoading: registrationLoading,
      data: registerUserResponse
    }
  ] = useRegisterUserMutation()
  const [sendPing, { data: sendPingData }] = useSendPingMutation()
  const [login, { data: loginData }] = useLoginMutation()

  const registerClickHandler = () => {
    registerNow({ email: 'someEmail@gmail.com', password: 'somePassword' })
  }
  const sendPingClickHandler = () => {
    sendPing({ frontTime: 1332141 })
  }
  const loginClickHandler = () => {
    login({
      email: '1231someemail@.com',
      password: '141241password',
      rememberMe: true
    })
  }
  return (
    <div>
      {registrationLoading && <p>Loading...</p>}
      {registrationError && <p>Something went wrong...</p>}
      {registerUserResponse && <h2>{JSON.stringify(registerUserResponse)}</h2>}
      <div>
        <button onClick={registerClickHandler}>register</button>
      </div>
      <div>
        <button onClick={loginClickHandler}>login</button>
      </div>
      <div>{JSON.stringify(loginData)}</div>
      <button onClick={sendPingClickHandler}>send Ping</button>
      <div>{JSON.stringify(sendPingData)}</div>
    </div>
  )
}
