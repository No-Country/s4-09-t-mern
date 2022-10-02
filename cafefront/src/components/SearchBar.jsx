import React, { useState } from 'react'
import './styles.css'

export const SearchBar = ({ data, handlePosition, handleZoom }) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    console.log('onSearch ', searchTerm)
    setValue('')
  }

  const onSelect = (id) => {
    const item = data.find((element) => element._id === id)
    setValue(item.name)
    console.log('onSelect ', item.name)
    handlePosition([item.lat, item.long])
    handleZoom(18)
    console.log('position ', [item.lat, item.long])
  }

  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}>Buscar</button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase()
              const fullName = item.name.toLowerCase()

              return (
                searchTerm &&
                fullName.includes(searchTerm) &&
                fullName !== searchTerm
              )
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSelect(item._id)}
                className="dropdown-row"
                key={item.name}
              >
                <span>{item.name} </span>
                <span style={{ fontSize: '0.5rem' }}> ({item.long + '/' + item.lat})</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
