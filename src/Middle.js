import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Middle = ({api}) => {
const [data,setData] = useState([])
const navigate= useNavigate();

const edituser =(id,Author,ISBNNumber,Title,PublishDate,Soldcopies)=>{
  localStorage.setItem('id',id)
  localStorage.setItem('Author',Author)
  localStorage.setItem('ISBNNumber',ISBNNumber)
  localStorage.setItem('Title',Title)
  localStorage.setItem('PublishDate',PublishDate)
  localStorage.setItem('Soldcopies',Soldcopies)
  navigate('')
  
}
const deleteuser = async(id) => {
  await axios.delete(`${api}/${id}`)
  callapi()
};

const callapi = async ()=>{
    try{
        const resp = await axios.get(api);
            setData(resp.data)
            
    }catch(error){
        console.log("There is an error");
    }  
};

useEffect(()=>{
    callapi()
},[]);

  return (
    <>
    <div>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Table for book</h1>
    <Link
      to="/end"
      className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
    >
      <i className="fas fa-download fa-sm text-white-50"></i> Generate
    </Link>
  </div>
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>Author</th>
              <th>ISBN Number</th>
              <th>Title</th>
              <th>Publish Date</th>
              <th>Sold copies</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data.map(item=>(
            <tr key={item.id}>
              <td>{item.Author}</td>
              <td>{item.ISBNNumber}</td>
              <td>{item.Title}</td>
              <td>{item.PublishDate}</td>
              <td>{item.Soldcopies}</td>
              <td>
                <Link
                  to="/update"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  onClick={()=>{edituser(item.id,item.Author,item.ISBNNumber,item.Title,item.PublishDate,item.Soldcopies)}}
                >
                  <i className="fas fa-download fa-sm text-white-50"></i> Edit
                </Link>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
                  onClick={()=>{deleteuser(item.id)}}
                >
                  <i className="fas fa-download fa-sm text-white-50"></i> Delete
                </a>
                
              </td>
            </tr>
            ))};
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</>

  )
}

export default Middle