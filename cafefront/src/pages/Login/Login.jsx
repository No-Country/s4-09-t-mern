import React, { useState } from 'react'
import './Login.css'
import iconTazaCafe from '../../assets/images/taza-cafe.svg'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import { useUserStore } from '../../redux/hooks/useUser'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Login() {
  const initialValues = {
    email: '',
    password: ''
  }

  const [stateForm, setStateForm] = useState({ loading: false, error: false }) 
  const { user, setUser } = useUserStore()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Debes ingresar un email valido')
      .max(255)
      .required('El campo no debe estar vacio'),
    password: yup.string().required('El campo no debe estar vacio')
  })
  // .min(8, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)

  const onSubmit = (e) => {
    setStateForm({ loading: true, error: false })
    const { email, password } = values
    axios
      .post('http://localhost:5000/api/v1/user/login', { email, password })
      .then((res) => {
        setStateForm({ loading: false, error: false })        
        if (res.status === 200 && res.data.error !== true) setUser(email)
        else {
          setStateForm((p) => {
            return { ...p, error: true }
          })
          setTimeout(() => {
            setStateForm((p) => {
              return { ...p, error: false }
            })
          }, 2000)
        }
      })
      .catch((error) => {
        setStateForm({ loading: false, error: true })
        setUser('')        
      })
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    formik

  return (
    <div className="row" style={{ margin: 0 }}>
      <div>
        <Header />
      </div>
      <div className="container">
        <section className="login">
          <h1>Bienvenido</h1>
          <h2>
            Estas a la vuelta del mejor cafe
            <img src={iconTazaCafe} alt="taza de cafe" className="icon-vapor" />
          </h2>
          <form className="form-login" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Correo
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
              />
            </label>
            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
              />
            </label>
            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}
            <button type="submit">
              {stateForm.loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
            {stateForm.error && (
              <p className="error"> Credenciales invalidas</p>
            )}
          </form>

          <br />
          <br />
          <p>
            ¿Aún no tienes una cuenta?<span> </span>
            <a href="/register">Create una</a>
          </p>
        </section>
        <Footer />
      </div>
    </div>
  )
}
