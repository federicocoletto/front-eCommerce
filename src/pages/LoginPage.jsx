import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUsersThunk } from '../store/slices/users.slice'
import useAuth from '../hooks/useAuth'

const LoginPage = () => {

	const { handleSubmit, register, reset } = useForm()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { loginUser } = useAuth()

	const url = "https://ecommerce-fck-nodejs.onrender.com/api/v1/users/login";
	const users = useSelector(states => states.users)

	useEffect(() => {
		dispatch(getUsersThunk())
	}, [])

	const submit = (data) => {
		loginUser(url, data)
		navigate('/products')
		reset({
			email: "",
			password: "",
		})
	}

	return (
		<div className="login page">
			<form className='form login' onSubmit={handleSubmit(submit)}>
				<div className="form__entry login">
					<label htmlFor="email" className="form__label">Email</label>
					<input type="email" className="form__input" {...register("email")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="password" className="form__label">Password</label>
					<input type="password" className="form__input" {...register("password")} />
				</div>
				<div className="form__buttons">
					<button className="form__button">Login</button>
					<p className='platinum'>Don't have an account yet?</p>
					<button className="form__button" onClick={() => {navigate('/signup')}}>Sign Up</button>
				</div>
			</form>
		</div>
	)
}

export default LoginPage