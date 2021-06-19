
import { useEffect } from 'react'
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
  const [ login , { data }] = useMutation(LOGIN)
  const [cookies, setCookie ] = useCookies(['id_token']);
 
  useEffect(() => {
      console.log(cookies)
  }, [cookies])
 
  const handleSignIn = async(e) => {
      e.preventDefault()
     await login({variables:{email:"mail@domain.com", password:"1234"}})
      if(data){
        dispatch(requestUserSuccess(data.login))
        setCookie('id_token', data.login.token/* , { httpOnly: true } */)
      }
    } 

  
  return(<div>
          <button onClick={handleSignIn}>
                  LOGIN
              </button>
      </div>)
}