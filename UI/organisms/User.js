import { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../store/selectors'
import { requestUserLoading, requestUserError, requestUserSuccess } from '../../store/actions'

export const GET_USER = gql`
    query getUser($email: String, $password: String){
        user(email: $email, password: $password){
            email
            name
            authorId
    }
}
`
export default function User() {

    const { data, loading, error } = useQuery(GET_USER)
    const dispatch = useDispatch()
    const User = useSelector(state => getUser(state))
  
    useEffect(() => {   
        if(loading){
            return dispatch(requestUserLoading())
          }
          if(error){
            return dispatch(requestUserError(error))
          }
          if(data){
            console.log(data)
            return dispatch(requestUserSuccess(data.user))
          }
    }, [loading, error, data])
  
    return (
      <div>
        {console.log(user)}
             {user && user.map( user => (
              <div key={user.id}>
                  <p>
                      {user.email}
                  </p>
              </div>
            ))} 
      </div>
    )
  }