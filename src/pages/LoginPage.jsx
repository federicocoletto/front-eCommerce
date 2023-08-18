import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {

	const { handleSubmit, register, reset } = useForm()

	const submit = (data) => {
		// dispatch(createUserThunk(data));
		reset({
			firsName: "",
			lasName: "",
			email: "",
			password: "",
			phone: "",
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
				<div className="form buttons">
					<button className="form_button">Login</button>
					<p className='text small'>Don't have an account yet?</p>
					<button className="form_button" onClick={() => {navigate('/signup')}}>Sign Up</button>
				</div>
			</form>
		</div>
	)
}

export default LoginPage