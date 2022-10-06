import React from 'react'
import './Register.css'
// import vaporIcon from "../../assets/images/vapor.svg"
// import IconVapor from "../../components/IconVapor"
import iconTazaCafe from '../../assets/images/taza-cafe.svg'
import Header from '../../components/Header/Header'

export default function Register () {
  return (
    <div className='row'>
      <div>
        <Header/>
      </div>
    <section className="register">
      <h1>Bienvenido</h1>
      <h2>
        Estas a la vuelta del mejor cafe
        <img src={iconTazaCafe} alt="taza de cafe" className="icon-vapor" />
      </h2>
      <form className="form-register" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">
          Correo
          <input type="text" name="email" />
        </label>
        <label htmlFor="password">
          Contraseña
          <input type="password" name="password" />
        </label>
        <button>Registrarme</button>
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
