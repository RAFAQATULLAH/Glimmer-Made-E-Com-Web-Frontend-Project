import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../Redux/ProductsSlice/ProductsSlice'

const FetchProducts = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return null
}

export default FetchProducts