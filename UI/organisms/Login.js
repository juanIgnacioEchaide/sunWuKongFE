
import { useEffect, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../store/selectors'
import { useCookies } from 'react-cookie'
import { requestUserLoading, requestUserError, requestUserSuccess } from '../../store/actions'

export const LOGIN = gql`
  mutation login($email: String, $password: String){
    login( email: $email, password: $password){
      userId
      token 
      tokenExpiration
    }
  }`  

export default function Login(){
  const dispatch = useDispatch()
  const [ login , { loading, error, data }] = useMutation(LOGIN)
  const [ loginInpuData, setLoginInputData] = useState({ email: '' , password: ''})
  const [cookies, setCookie ] = useCookies(['id_token']);
 

  const handleChange=(event)=>{
    setLoginInputData({
      ...loginInpuData,
      [ event.target.name]:event.target.value
    })
  }

  /* TODO useReducer para el form  */
  const handleSignIn = async(e) => {
    await login({
          variables:{
            email:loginInpuData.email, 
            password: loginInpuData.password,
          }})
      if(data){
        dispatch(requestUserSuccess(data.login))
        setCookie('id_token', data.login.token/* , { httpOnly: true } */)
        console.log(cookies)
      }
    } 

    if(loading){
      dispatch(requestUserLoading())
    }
      if(error){
      dispatch(requestUserError(error))
    }
  return(<div>
            <input 
              name="email" 
              type="text" 
              placeholder="E-mail" 
              onChange={handleChange}
            />
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              onChange={handleChange}
            />
            <button onClick={handleSignIn}>LOGIN</button>
        </div>)
}