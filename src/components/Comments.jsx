import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import { DotLoader } from 'react-spinners'

const Comments = () => {
    const[loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setComments(response.data)
            setLoading(false)
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)
        })
    },[])

    if(loading){
        return  <DotLoader />
      }
      const removePosts = (id) =>{
        const newposts = comments.filter((comment) => comment.id !== id)
        setComments(newposts)
    }
  return (
    <div className="container">
        {comments?.map((comment,key)=>(
            <div className="card">
                <h2>{comment.name}</h2>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
                <button onClick={()=>removePosts(comment.id)}>Remove</button>
            </div>
        
        ))}
    </div>
  )
}

export default Comments
