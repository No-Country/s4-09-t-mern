import React, { useState } from 'react'
import './Register.css'
import iconTazaCafe from '../../assets/images/taza-cafe.svg'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import { useUserStore } from '../../redux/hooks/useUser'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Register() {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  }
  const [stateForm, setStateForm] = useState({ loading: false, error: false })
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useUserStore()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Debes ingresar un email valido')
      .max(255)
      .required('El campo no debe estar vacio'),
    firstName: yup
      .string()
      .min(
        3,
        ({ min }) => `Nombre muy corto. Debe tener al menos ${min} caracteres!`
      )
      .required('El campo no debe estar vacio'),
    lastName: yup
      .string()
      .min(
        3,
        ({ min }) =>
          `Apellido muy corto. Debe tener al menos ${min} caracteres!`
      )
      .required('El campo no debe estar vacio'),
    password: yup
      .string()
      .min(8, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
      .required('El campo no debe estar vacio'),
    confirmPassword: yup
      .string()
      .min(8, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
      .required('El campo no debe estar vacio')
      .oneOf([yup.ref('password'), null], 'Tus passwords no coinciden')
  })

  const onSubmit = (e) => {
    setStateForm({ loading: true, error: false })
    const { email, firstName, lastName, password, confirmPassword } = values
    axios
      .post('https://cafereviewer.herokuapp.com/api/v1/user/register', {
        email,
        firstName,
        lastName,
        password,
        confirmPassword
      })
      .then((res) => {
        setStateForm({ loading: false, error: false })
        console.log(res)
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
        console.log(error)
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
        <section className="register">
          <h1>Bienvenido</h1>
          
          <h2>
            Estas a la vuelta del mejor cafe
            <img src={iconTazaCafe} alt="taza de cafe" className="icon-vapor" />
          </h2>
          <form className="form-register" onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              Nombre
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.firstName && touched.firstName && (
              <div className='error'>{errors.firstName}</div>
            )}
            <label htmlFor="lastName">
              Apellido
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.lastName && touched.lastName && (
              <div className='error'>{errors.lastName}</div>
            )}
            <label htmlFor="email">
              Correo
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.email && touched.email && <div className='error'>{errors.email}</div>}
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.password && touched.password && (
              <div className='error'>{errors.password}</div>
            )}
            <label htmlFor="confirmPassword">
              Confirma la contraseña
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.confirmPassword && touched.confirmPassword && (
              <div className='error'>{errors.confirmPassword}</div>
            )}
            <button type="submit">
              {stateForm.loading ? 'Cargando...' : 'Registrarme'}
            </button>
          {stateForm.error && (
            <p className="error"> Error en la Registracion </p>
            )}
          </form>

          <br />
          <br />
          <p>
            ¿Ya tienes una cuenta?<span> </span>
            <a href="/login">Inicia sesion</a>
          </p>
        </section>
        <Footer />
      </div>
    </div>
  )
}
