import React, { useEffect }   from 'react'
import { useState } from 'react'
import axios from "../axios";
import {instance} from "../axios"

function Row({title , fetchUrl}) {

  const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDI3NDBhNGZjODU3YzU5YjA0NzRiOWQ5M2QwYTczYiIsInN1YiI6IjY2MGM4N2Y0MGI1ZmQ2MDE0OTM2MGEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j_jIjLBqt8m0J8utXjQAoSv71US9WJBakX0f0H7zR3g"
  const my_key = `Bearer ${access_token}`

    const [movies,setMovies] = useState([])

    // async function fetchData(){
    //   const request = await instance.get(fetchUrl,{headers:{AUTHORIZATION:my_key}});
    //   console.log(request);
    //   return request
    // }

    //    useEffect(() => {
    //       //code to run once  when [] loads
    //       console.log("url ",fetchUrl);
    //       fetchData()
          
    //    },
    //    [])
        




  return (
    <div>
        {/* title */}
        <h1>{title}</h1>
        {/* containers -> posters */}
        <div className="div flex row">
          {fetchUrl}
        </div>
    </div>
  )
}

export default Row