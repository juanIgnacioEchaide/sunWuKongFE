import { useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/selectors'
import { requestProductsLoading, requestProductsError, requestProductsSuccess } from '../../store/actions'

export const GET_PRODUCTS = gql`
  query getProducts($id: ID){
      product(id: $id){
                  id
                  description
                  expiringDate           
                  price
      }
}
`

export default function Products() {

    const { data, loading, error } = useQuery(GET_PRODUCTS)
    const dispatch = useDispatch()
    const products = useSelector(state => getProducts(state))
  
    useEffect(() => {   
        if(loading){
            return dispatch(requestProductsLoading())
          }
          if(error){
            return dispatch(requestProductsError(error))
          }
          if(data){
            console.log(data)
            return dispatch(requestProductsSuccess(data.product))
          }
    }, [loading, error, data])
  
    return (
      <div>
        {console.log(products)}
             {products && products.map(product => (
              <div key={product.date}>
                  <h3>{product.date}</h3>
                  <p>
                     {product.price}
                  </p>
              </div>
            ))} 
      </div>
    )
  }