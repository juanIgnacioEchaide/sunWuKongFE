import { useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'
import { getShopkart, getUserData } from '../../store/selectors'
import { clearKart } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie';

export const CREATE_TICKET = gql`
mutation createTicket( $date:String, $author: String, $type: String, $data:[ProductInput]){
  createTicket( date: $date, author:$author, type: $type, data: $data){
    date
    author
    type
    data{
      id
      price
    }
  }
}`

export default function PurchaseOrder(){
    const dispatch = useDispatch()
    const shopkart = useSelector(state => getShopkart(state))
    const userData = useSelector(state => getUserData(state))
    const [ createTicket , { data }] = useMutation(CREATE_TICKET)
    const [cookies, setCookie ] = useCookies(['id_token']);

    useEffect(() => {
        console.log(shopkart)
        console.log(cookies.id_token)
        console.log(userData.userId)
    }, [shopkart])

    const handleTicketCreation = () => {
      createTicket({
        variables:{ 
          id:"001",
          date: "2020-05-16",
          author: userData.userId,
          type: "purchase",
          data: shopkart.products,
          }
        })
      dispatch(clearKart());
      } 

    
    return(<div>
            <button onClick={() => handleTicketCreation()}>
                    CONFIRMAR PEDIDO
                </button>
                {data && <div>CONFIRMASTE TU PEDIDO!{console.log(data)}</div>}
        </div>)
}