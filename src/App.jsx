import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {

	return (
		<div className="app">
			<Routes>
					<Route path='/login' element={<LoginPage />} />
			</Routes>
		</div>
	)
}

export default App
