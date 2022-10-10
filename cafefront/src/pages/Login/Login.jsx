import React, { useState } from 'react'
import './Login.css'
import iconTazaCafe from '../../assets/images/taza-cafe.svg'
import Header from '../../components/Header/Header'
import axios from 'axios'

export default function Login () {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: ''
  })
  const [stateForm, setStateForm] = useState({ loading: false, error: false })

  const handleChange = (e) => {
    setDataForm((prevDataForm) => {
      const newDataForm = {
        ...prevDataForm
      }
      newDataForm[e.target.name] = e.target.value
      return newDataForm
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStateForm({ loading: true, error: false })
    axios.post('http://localhost:5000/api/v1/user/login', stateForm)
      .then(res => {
        setStateForm({ loading: false, error: false })
        console.log(res)
      })
      .catch(error => {
        setStateForm({ loading: false, error: true })
        console.log(error)
      })
  }
  return (
    <>
      <div>
        <Header/>
      </div>
    <section className="login">
      <h1>Bienvenido</h1>
      <h2>
        Estas a la vuelta del mejor cafe
        <img src={iconTazaCafe} alt="taza de cafe" className="icon-vapor" />
      </h2>
      <form className="form-login" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Correo
          <input type="text" name="email" value={dataForm.email} onChange={handleChange}/>
        </label>
        <label htmlFor="password">
          Contraseña
          <input type="password" name="password" value={dataForm.password} onChange={handleChange}/>
        </label>
        <button>{stateForm.loading ? 'Cargando...' : 'Iniciar Sesión' }</button>
      </form>

      <br />
      <br />
      <p>
        ¿Aún no tienes una cuenta?<span> </span>
        <a href="/register">Create una</a>
      </p>
    </section>
    </>
  )
}