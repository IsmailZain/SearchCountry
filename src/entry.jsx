import React from 'react'

const Row = ({el}) => {
    return (
        <tr>
            <td>{el.name}</td>
            <td>{el.nativeName}</td>
            <td>{el.capital}</td>
            <td>{el.numericCode}</td>
            <td>{el.population}</td>
            <td>{el.languages.length}</td>
            <td>{el.region}</td>
            <td>{el.area}</td>
            <td><img className="flag" src={el.flag}></img></td>
        </tr>
    )
}
export default Row