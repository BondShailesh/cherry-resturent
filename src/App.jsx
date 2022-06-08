import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Resturents from './components/Resturents';
import navbar from "./data/navbar.json"
import offer from "./data/offer.json"
import resturents from "./data/resturents.json"
import { useState } from 'react';
// import Form from './components/Form';
const filters = {
  "1":" Cost High to Lost",
  "2":"Cost Lost to High",
  "3":" Ratings",
  "4":"Delivery Time",
  "5":" Relevance",
  
}

function App() {
  const [filterBy,setFilterBy] = useState("");
  const [data,setdata] = useState(resturents);
  const updateFilter = (newfilter)=>{
  switch (newfilter){
   case "1": {
    setFilterBy(1)
     data.sort((a,b)=>b.cost-a.cost);
     setdata([...data]);
     break;
   }
   case "2": {
    setFilterBy(2)
     data.sort((a,b)=>a.cost-b.cost);
     setdata([...data]);
     break;
   }
   case "3": {
    setFilterBy(2)
     data.sort((a,b)=>b.rating-a.rating);
     setdata([...data]);
     break;
   }
   case "4": {
    setFilterBy(2)
     data.sort((a,b)=>a.delivery-b.delivery);
     setdata([...data]);
     break;
   }
   case "5": {
    setFilterBy(2)
     data.sort((a,b)=>b.rating-a.rating);
     setdata([...data]);
     break;
   }
   default:{
    setdata(newfilter);
     break;
   }
  }
  }
  return (
    <div>
     
      <Navbar {...navbar.location}/>
      <Offers offer={offer}/>
      <section className='near-you'>
         <Filters filters={filters} currentfilterBy = {filterBy} updateFilter={updateFilter}/>
         <Resturents resturents={data}/>  
      </section>  
      
    </div>
  )
}

export default App

