import { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { getMenus } from '../../store/selectors'
import { requestMenusLoading, requestMenusError, requestMenusSuccess } from '../../store/actions'

export const GET_MENUS = gql`
query getMenus($id: ID){
    menu(id: $id){
            name
            description
            products{
                id
                description
                expiringDate           
                price
            }
    }
}
`

export default function Menus() {

    const { data, loading, error } = useQuery(GET_MENUS)
    const dispatch = useDispatch()
    const menus = useSelector(state => getMenus(state))
  
    useEffect(() => {   
        if(loading){
            return dispatch(requestMenusLoading())
          }
          if(error){
            return dispatch(requestMenusError(error))
          }
          if(data){
            console.log(data)
            return dispatch(requestMenusSuccess(data.menu))
          }
    }, [loading, error, data])
  
    return (
      <div>
        {console.log(menus)}
             {menus && menus.map( menu => (
              <div key={menu.date}>
                  <h3>{menu.date}</h3>
                  <p>
                      {menu.price}
                  </p>
              </div>
            ))} 
      </div>
    )
  }