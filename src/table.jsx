import React from "react"
import Row from "./entry.jsx"
const Table = ({content}) => {
    
    return (
        <>
        <table className = "countries">
        <thead>
           <tr>
              
               <th>Name</th>
               <th className = "hide4">Native Name</th>
               <th className = "hide">Capital</th>
               <th>Numberic Code</th>
               <th className = "hide3">Population</th>
               <th className = "hide3">Languages Spoken</th>
               <th className = "hide">Region</th>
               <th className = "hide1">Area</th>
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