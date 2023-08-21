import { useEffect, useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
// import { getAllUsersThunk } from './store/slices/users.slice'
import { useDispatch } from 'react-redux'
import SignUpPage from './pages/SignUpPage'
import Navbar from './components/Navbar'
import ProtectedRoutes from './pages/ProtectedRoutes'
import ProductsPage from './pages/ProductsPage'
import HomePage from './pages/HomePage'

function App() {

	return (
		<div className="app dfc">
			<Navbar />
			<Routes>
				{/* <Route path='/' element={<HomePage />} /> */}
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				{/* protected routes */}
				<Route element={<ProtectedRoutes />}>
					<Route path='/products' element={<ProductsPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
