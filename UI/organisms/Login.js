
import { useReducer } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import { requestUserLoading, requestUserError, requestUserSuccess } from '../../store/actions'
import { loginFormInitial, loginFormReducer } from '../../utils/helpers'
import { INPUT_EMAIL, INPUT_PASSWORD } from '../../utils/constants'

export const LOGIN = gql`
  mutation login($email: String, $password: String){
    login( email: $email, password: $password){
      userId
      token 
      tokenExpiration
    }
  }`  

export default function Login(){
  const storeDispatch = useDispatch()
  const [ login , { loading, error, data }] = useMutation(LOGIN)
  const [state, dispatch] = useReducer(loginFormReducer, loginFormInitial)
  const [cookies, setCookie] = useCookies(['id_token']);
  

  /* TODO useReducer para el form  */
  const handleSignIn = (e) => {
    console.log('dispara login')
    login({
          variables:{
            email:state.email, 
            password: state.password,
          }})
    } 
    if(data){
      storeDispatch(requestUserSuccess(data.login))
      setCookie('id_token', data.login.token)
      console.log(cookies)
    }
    if(loading){
      storeDispatch(requestUserLoading())
    }
      if(error){
      storeDispatch(requestUserError(error))
    }

  return(<div>
            <input 
              name="email" 
              type="text" 
              placeholder="E-mail" 
              onChange={ event => dispatch({
                type:  INPUT_EMAIL,
                payload: event.target.value
              })}
            />
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              onChange={event => dispatch({
                type:  INPUT_PASSWORD,
                payload: event.target.value
              })}
            />
            <button onClick={handleSignIn}>LOGIN</button>
        </div>)
}