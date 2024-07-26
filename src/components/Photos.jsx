import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import { DotLoader } from 'react-spinners'

const Photos = () => {
    const [loading, setLoading] = useState(false)
    const[photos, setPhotos] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response)=>{
            setPhotos(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    },[])

    if(loading){
        return  <DotLoader style={{textAlign:"center"}} />
      }
      const removePosts = (id) =>{
        const newposts = photos.filter((photo) => photo.id !== id)
        setPhotos(newposts)
    }
  return (
    <div className="container">
        {photos?.map((photo,key)=>(
            <div className="card">
                <h2>{photo.title}</h2>
                <button onClick={()=>removePosts(photo.id)}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Photos
