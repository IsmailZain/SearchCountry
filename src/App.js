import React, { useState } from 'react'
import Table from "./table.jsx"
import './App.css';
import Button from '@material-ui/core/Button';
const lookup = require('country-code-lookup')
const axios = require('axios');

function App() {
  const [field, setfield] = useState("")
  const [content,setContent] = useState([])
  
 


  const InputHandler = (e) => {
    setfield(e.target.value.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))))
  }

  const fetchContent =async  () => {


    const findCounty = lookup.byCountry(field)

    if (findCounty == null) {
      setfield("")
      alert("Please Enter a Valid country name")
     
    }

    else {
      setfield("")
      const code = findCounty.iso3
      const getData = async (code) => {
        const res = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${code}`)
       
        
         setContent(old => ([...old,res.data[0]]))
        
      }
      await getData(code)

      
    }
    


  }
  const sortCallback = (e)  => {
   
    const id = e.target.id

    function compare( a, b ) {

      if(id === "pop")
      {
        if( a.population > b.population)
       return 1
       else return -1
      }
      if(id === "nam")
      {
        if( a.name > b.name)
       return 1
       else return -1
      }
      if(id === "lan")
      {
        if( a.languages.length > b.languages.length)
       return 1
       else return -1
      }
      if(id === "numcode")
      {
        if( a.numericCode > b.numericCode)
       return 1
       else return -1
      }
      if(id === "ara")
      {
        if( a.area> b.area)
       return 1
       else return -1
      }
      
     }
     const newContent = content.slice()
     newContent.sort(compare)
    
    
     setContent(newContent)
  }

  return (
    <>
      <div className="container">

        <div className="main">
          <input value={field} onChange={InputHandler} placeholder="Enter country name" className="search" type="text" ></input>
          <Button onClick={fetchContent} className="searchbtn" variant="contained" color="primary">
            SEARCH
        </Button>
        <h4 >Sort By</h4>
        <div className = "sortUtil">
         <div>Population<input id = "pop"  onClick = {sortCallback} type="radio" name = "sortBy" ></input></div>
         <div>Name<input id = "nam" onClick = {sortCallback} type="radio" name = "sortBy" ></input></div>
         <div>Languages<input id = "lan"  onClick = {sortCallback} type="radio" name = "sortBy" ></input></div>
         <div>Num Code<input id = "numcode"  onClick = {sortCallback} type="radio" name = "sortBy" ></input></div>
         <div>Area num<input id = "ara" onClick = {sortCallback} type="radio" name = "sortBy" ></input></div>
        
        </div>
         
         { content.length !== 0 ? <Table  content = {content} /> : ""} 


         

        </div>
      </div>


    </>
  );
}

export default App;
