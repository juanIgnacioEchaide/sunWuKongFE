

import { useEffect, useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../../store/selectors'
import { setContext } from '@apollo/client/link/context';
import { requestTicketsLoading, requestTicketsError, requestTicketsSuccess } from '../../store/actions'
import { getTickets } from '../../store/selectors'


export const GET_TICKETS = gql`
  query getTickets($author: String){
    ticket(author:$author){
      author
      date
      data{
          id
          description
          expiringDate
          price
      }
    }
  }`

export default function Tickets() {
  const { data, loading, error } = useQuery(GET_TICKETS)
  const dispatch = useDispatch()
  const tickets = useSelector(state => getTickets(state))
  const [loginRequired , setLoginRequired] = useState(true)

  useEffect(() => {  
      if(loading){
          return dispatch(requestTicketsLoading())
        }
        if(error){
          return dispatch(requestTicketsError(error))
        }
        if(data){
          console.log(data)
          return dispatch(requestTicketsSuccess(data.ticket))   
      }else{
        return <div>logueate</div>
      }
      setLoginRequired(false);   
  }, [loading, error, data])

  return (
    <div>
{/*            {tickets && tickets.map( ticket => (
            <div key={ticket.date}>
                <h3>{ticket.date}</h3>
                <p>
                    {ticket.author} - {ticket.price}
                </p>
            </div>
          ))}  */}
    </div>
  )
}
