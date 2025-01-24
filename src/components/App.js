// create your App component here
import React, { useState,useEffect } from "react";


function App() {
  const [dogsImage,setDogsImage ]= useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(()=>{ 
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
    setDogsImage(data.message);
    setLoading(false)
  })
    .catch(error=> 
    {console.error(`The server returned an error: ${error}`);
     setLoading(false)
  })
},[])
return (
  <div>
    {Loading ? <p>Loading........</p> : (<img src={dogsImage} alt="A Random Dog"/>)}
  </div>
)
}
export default App;
