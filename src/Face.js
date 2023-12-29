import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";


const Slider =({api}) =>{
    const [data,setData] = useState([])

const callapi = async ()=>{
    try{
        const resp = await axios.get(api);
            setData(resp.data)
            
    }catch(error){
        console.log("There is an error");
    }  
}
const chunkedProductItems = Array.from(
    { length: Math.ceil(api.length / 3) },
    (_, index) => api.slice(index * 3, index * 3 + 3)
  );


useEffect(()=>{
    callapi()
},[])
    return(
        <div>
        {data.map((data)=>(
        <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {data.Author}</div>
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            {`Title: ${data.Title}`}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{`${data.Soldcopies} copies sold`}</div>
                        <Link to='/middle' className="btn btn-primary mt-3 ">View</Link>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ))}
    </div>
    )
}
const Face = ({api}) => {
  return (
   <div>
    <Slider api={api}/>
   </div>
      
  );
};

export default Face;
