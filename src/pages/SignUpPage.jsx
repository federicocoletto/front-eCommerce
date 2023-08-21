import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunk } from '../store/slices/users.slice'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {

	const url = "http://localhost:8080/api/v1/users";
	const { handleSubmit, register, reset } = useForm()
	const { registerUser } = useAuth()

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const users = useSelector(states => states.users)

	useEffect(() => {
		dispatch(getUsersThunk())
	}, [])

	console.log(users)

	const submit = (data) => {
		registerUser(url, data)
		reset({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			phone: ''
		})
	}

	return (
		<div className="login page">
			<form className='form login' onSubmit={handleSubmit(submit)}>
				<div className="form__entry login">
					<label htmlFor="firstName" className="form__label">First name</label>
					<input type="text" className="form__input" {...register("firstName")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="lastName" className="form__label">Last name</label>
					<input type="text" className="form__input" {...register("lastName")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="email" className="form__label">Email</label>
					<input type="email" className="form__input" {...register("email")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="password" className="form__label">Password</label>
					<input type="password" className="form__input" {...register("password")} />
				</div>
				<div className="form__entry login">
					<label htmlFor="phone" className="form__label">Phone</label>
					<input type="text" className="form__input" {...register("phone")} />
				</div>
				<div className="form__buttons">
					<button className="form_button">Sign Up</button>
					<p className='platinum'>Do you have an account already?</p>
					<button className="form_button" onClick={() => { navigate('/login') }}>Login</button>
				</div>
			</form>
		</div>
	)
}

export default SignUpPage