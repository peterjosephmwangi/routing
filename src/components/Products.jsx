import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import { DotLoader } from 'react-spinners'
const Products = () => {

    const[loading,setLoading] = useState(false)
    const[products,setProducts] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            setProducts(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    },[])

    if(loading){
        return  <DotLoader className='loaderContainer' />
      }
      const removeProducts = (id) =>{
        const newproduct = products.filter((todo) => todo.id !== id)
        setProducts(newproduct)
    }
  return (
   <div className="container">
    {products?.map((product,key)=>(
        <div className="card">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img src={product.image} alt="" width={400} height={400}/>
            <button onClick={()=>removeProducts(product.id)}>Remove</button>
        </div>
    ))}
   </div>
  )
}

export default Products
