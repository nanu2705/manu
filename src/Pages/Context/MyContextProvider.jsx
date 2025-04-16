import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MyContext from './MyContext';
import axios from 'axios';

const MyContextProvider = ({children}) => {

  const apiUrl = process.env.REACT_APP_API_URL ;

  const url = 'http://localhost:5000'
    //for api calling start

 const[apiloader,setApiloader]=useState(true)
 const[api,setApi] = useState([])
 

   const fetchData = async () => {
     try {
       const response = await axios.get(`${url}/api/products`);
       setApi(response.data)
     } catch (error) {
       console.error('Error fetching data:', error);
     } finally {
       setApiloader(false);
     }
   };

 // for api calling end

 useEffect(() => {
  fetchData();
}
, [url]);

       // location common
  const location = useLocation()  
  // for location end

  // for navigation start
  const Navigate = useNavigate()
  // for navigation end

 //for header modal start

    const [openmodal, setOpenmodal] = useState(false)
  
 //for header modal end
  return (
    <div>
      
    <MyContext.Provider value={{
        openmodal, setOpenmodal, 
        location,
        Navigate,
        apiUrl,api,apiloader
    }}>
        
{children}
        </MyContext.Provider>
    </div>
  )
}

export default MyContextProvider
