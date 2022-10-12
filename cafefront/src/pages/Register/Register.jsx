import React, { useState } from 'react'
import './Register.css'
import iconTazaCafe from '../../assets/images/taza-cafe.svg'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { useUserStore } from '../../redux/hooks/useUser'

export default function Register () {
  const [dataForm, setDataForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  })
  const [stateForm, setStateForm] = useState({ loading: false, error: false })
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useUserStore()

  const handleChange = (e) => {
    setDataForm((prevDataForm) => {
      const newDataForm = {
        ...prevDataForm
      }
      newDataForm[e.target.name] = e.target.value
      console.log(newDataForm)
      return newDataForm
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStateForm({ loading: true, error: false })
    console.log(dataForm)
    axios.post('http://localhost:5000/api/v1/user/register', dataForm)
      .then(res => {
        setStateForm({ loading: false, error: false })
        console.log(res)
        setUser(dataForm.email)
      })
      .catch(error => {
        setStateForm({ loading: false, error: true })
        console.log(error)
      })
  }
  return (
    <div className='row' style={{ margin: 0 }}>
      <div>
        <Header/>
      </div>
    <section className="register">
      <h1>Bienvenido</h1>
      <h2>
        Estas a la vuelta del mejor cafe
        <img src={iconTazaCafe} alt="taza de cafe" className="icon-vapor" />
      </h2>
      <form className="form-register" onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          Nombre
          <input type="text" name="firstName" value={dataForm.firstName} onChange={handleChange}/>
        </label>
        <label htmlFor="lastName">
          Apellido
          <input type="text" name="lastName" value={dataForm.lastName} onChange={handleChange}/>
        </label>
        <label htmlFor="email">
          Correo
          <input type="text" name="email" value={dataForm.email} onChange={handleChange}/>
        </label>
        <label htmlFor="password">
          Contraseña
          <input type="password" name="password" value={dataForm.password} onChange={handleChange}/>
        </label>
        <label htmlFor="confirmPassword">
          Confirma la contraseña
          <input type="password" name="confirmPassword" value={dataForm.confirmPassword} onChange={handleChange}/>
        </label>
        <button>{stateForm.loading ? 'Cargando...' : 'Registrarme' }</button>
      </form>

      <br />
      <br />
      <p>
        ¿Ya tienes una cuenta?<span> </span>
        <a href="/login">Inicia sesion</a>
      </p>
    </section>
    </div>
  )
}
