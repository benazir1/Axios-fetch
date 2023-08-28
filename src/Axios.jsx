import React, { useEffect ,useState} from 'react'
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";


function Axios() {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);
    
      if (!post) return null;

      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    }
export default Axios