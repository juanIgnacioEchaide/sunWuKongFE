
import { Cookies } from 'react-cookie'
import { gql, useQuery } from '@apollo/client'
import { useSelector } from 'react-redux'
import { getUserData } from '../store/selectors'

export const GET_LOGIN_STATUS = gql`
    query getLoginStatus($token: String){
        loginStatus(token: $token){
            authenticated  
        }
    }
`
export default function useLoginStatus(){   
    const cookies = new Cookies()
    const token = cookies.get('id_token')
    const loggedIn = useSelector( state => getUserData(state).loggedIn)
    const { data, loading, error } = useQuery(GET_LOGIN_STATUS, { 
        variables: { 
            token: token
        }
    })
    if(error || !loggedIn)
        return false
    if(data) 
        return data.authenticated ? true : false
}