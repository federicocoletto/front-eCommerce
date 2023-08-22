import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartThunk, getCartThunk, updateCartThunk } from '../store/slices/cart.slice'
import { useNavigate } from 'react-router-dom'
import { makePurchaseThunk } from '../store/slices/purchase.slice'

const CartPage = () => {

	const cart = useSelector(states => states.cart)
	let total = 0

	const dispatch = useDispatch()
	const [totalPrice, setTotalPrice] = useState(total)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(getCartThunk())
	}, [])

	useEffect(() => {
		const total = cart?.reduce((acc, item) => {
			const productPrice = Number(item.product.price);
			return acc + productPrice * item.quantity;
		}, 0);
		setTotalPrice(total)
	}, [])

	return (
		<div className='cart page'>
			<header className="page__header cart">
				<h1 className='page__header-h1'>Your cart</h1>
			</header>
			<div className="page__body cart__cards">
				{
					cart.map(cartprod => (
						<div className="product__card" key={cartprod.id}>
							<div className="card__header">
								<h2 className='product__title'>{cartprod.product?.title}</h2>
								<img className='product__img' src="https://www.vigfurniture.com/media/catalog/product/cache/6d4faa98f2b48c05dae02148ead85f2f/n/a/natalia_vgkk_78208_black_sofa_1.jpg" alt="" />
							</div>
							<div className="card__body">
								<h4 className="product__quantity">{cartprod.quantity}</h4>
								<div className="product__buttons">
									<button
										className="product__button add"
										onClick={() => {
											dispatch(updateCartThunk(cartprod, cartprod.quantity + 1))
											setTotalPrice(totalPrice + Number(cartprod.product?.price))
										}}
									>+</button>
									<button className="product__button remove" onClick={() => {
										if (window.confirm(`Are you sure you want to erease ${cartprod.product?.title} from your cart`)) {
											dispatch(deleteCartThunk(cartprod.id))
											setTotalPrice(totalPrice - (cartprod.quantity * Number(cartprod.product?.price)))
										}
									}}>Delete from cart</button>
									<button
										className="product__button subtract"
										onClick={() => {
											if (cartprod.quantity > 1) {
												dispatch(updateCartThunk(cartprod, cartprod.quantity - 1))
												setTotalPrice(totalPrice - Number(cartprod.product.price))
											} else {
												const confirmAlert = window.confirm(`Are you sure you want to erease ${cartprod.product.title} from your cart`)
												if (confirmAlert) {
													dispatch(deleteCartThunk(cartprod.id))
													setTotalPrice(totalPrice - Number(cartprod.product.price))
												}
											}
										}}
									>-</button>
								</div>
								<h5 className="product__price"> <span>Unit price:</span> $ {cartprod.product.price}</h5>
								<h5 className="total__cart"><span>Subtotal: </span>$ {cartprod.quantity * Number(cartprod.product.price)}</h5>
							</div>
						</div>
					))
				}
			</div>
			<footer className="page__footer cart__purchase">
				<h3 className='total__products'></h3>
				<h3 className='total__price'><span>Total:</span> $ {totalPrice}</h3>
				<button onClick={() => {
					navigate('/purchase')
					dispatch(makePurchaseThunk())
				}}>Purchase</button>
			</footer>
		</div>
	)
}

export default CartPage