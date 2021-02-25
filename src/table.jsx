import React from "react"
import Row from "./entry.jsx"
const Table = ({content}) => {
    
    return (
        <>
        <table className = "countries">
        <thead>
           <tr>
              
               <th>Name</th>
               <th>Native Name</th>
               <th>Capital</th>
               <th>Numberic Code</th>
               <th>Population</th>
               <th>Languages Spoken</th>
               <th>Region</th>
               <th>Area</th>
               <th>Flag</th>
           </tr>
           </thead>
           
           <tbody>

               {
                   content.map((el,indx) => {
                       return (
                        <Row key = {indx} el = {el} />
                       )
                   })
               }
              
           </tbody>
        </table>
        </>
    )
}
export default Table