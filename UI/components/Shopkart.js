import { getShopkart } from '../../store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToKart } from '../../store/actions'

export default function Shopkart(){
    const dispatch = useDispatch();
    const shopkart = useSelector(state => getShopkart(state));


    const addProduct = () => {
        const product = [
            { 
            id: 0,
            description: "String!",
            price: 200.00,
            expiringDate: "String!",
            }
        ];    
        dispatch(addProductToKart(product))
    };

    const clearShopKart = () => {
        dispatch()
    }

    return(
        <div>
            <button onClick={() => addProduct()}> ENVIAR</button>
        </div>
    )
}