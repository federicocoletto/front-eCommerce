import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {

	const [isShown, setIsShown] = useState(false);

	const handleShow = () => {
		setIsShown(!isShown)
	}

	return (
		<div className={`navbar__container ${isShown ? 'show' : ''}`}>
			<button onClick={handleShow} className={`showMenu__button ${isShown ? 'show' : ''}`}>
				<i className="fa-solid fa-bars"></i>
			</button>
			<nav className="navbar__nav">
				<button className='home button'>
					<Link title="home" to='/'>
						<i className="fa-solid fa-house"></i>
					</Link>
				</button>
				<div className="nav__paths">
					<ul className='nav__ul'>
						<li className="nav_li">
							<Link title='register' to='/signup' className="link" onClick={handleShow}>
								<span className="nav__span">Register</span>
							</Link>
						</li>
						<li className="nav_li">
							<Link title='login' to='/login' className="link" onClick={handleShow}>
								<span className="nav__span">Login</span>
							</Link>
						</li>
						<li className="nav_li">
							<Link title='products' to='/products' className="link" onClick={handleShow}>
								<span className="nav__span">Products</span>
							</Link>
						</li>
						<li className="nav_li">
							<Link title='cart' to='/cart' className="link" onClick={handleShow}>
								<span className="nav__span">Cart</span>
							</Link>
						</li>
						<li className="nav_li">
							<Link title='purchases' to='/purchases' className="link" onClick={handleShow}>
								<span className="nav__span">Purchases</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar