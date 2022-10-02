/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import './styles.css'
import { cafeterias as data } from './cafeterias'

export const SearchBar = ({ handlePosition }) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    console.log('onSearch ', searchTerm)
  }

  const onSelect = (id) => {
    const item = data.find((element) => element.id === id)
    setValue(item.name)
    console.log('onSelect ', item.name)
    handlePosition(item.position)
    console.log('position ', item.position)
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
                onClick={() => onSelect(item.id)}
                className="dropdown-row"
                key={item.name}
              >
                {item.name} {item.position}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
