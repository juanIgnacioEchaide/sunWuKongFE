import { Cookies } from 'react-cookie'
import { gql, useMutation } from '@apollo/client'

export const REFRESH_TOKEN = gql`
  mutation refreshToken($token: String){
    refreshToken(token: $token){
      userId
      token 
      tokenExpiration
    }
  }`  

  export default function useRefreshToken(){
 /*    const [ refreshToken, { data, loading, error }] = useMutation(REFRESH_TOKEN)
    const cookies = new Cookies() 
    const oldToken = cookies.get('id_token') */
    let newToken = ''
/* 
    refreshToken({variables:{
                  token: oldToken
                }})
                
    if(loading){
      return console.log('refreshing token...')
    }            
    if(error){
      throw new Error('New token could not be generated')
    }     
    if(data){
      newToken = data.token
    }       
    console.log(newToken) */
    return (newToken)
}
