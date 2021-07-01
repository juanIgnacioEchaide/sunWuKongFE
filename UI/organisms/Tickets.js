

import { useEffect } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
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
  const [cookies, setCookie ] = useCookies(['id_token']);
  const { data, loading, error } = useQuery(GET_TICKETS, { context: { 
    headers: {
      authorization: `Bearer ${cookies.id_token}` 
    }
  }})

  const dispatch = useDispatch()
  const tickets = useSelector(state => getTickets(state))

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
        }
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
