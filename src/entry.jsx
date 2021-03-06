import React from 'react'

const Row = ({el}) => {
    return (
        <tr>
            <td>{el.name}</td>
            <td className = "hide4">{el.nativeName}</td>
            <td className = "hide" >{el.capital}</td>
            <td>{el.numericCode}</td>
            <td className = "hide3">{el.population}</td>
            <td className = "hide3">{el.languages.length}</td>
            <td className = "hide" >{el.region}</td>
            <td className = "hide1">{el.area}</td>
            <td><img className="flag" src={el.flag}></img></td>
        </tr>
    )
}
export default Row