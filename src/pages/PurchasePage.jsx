import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchaseThunk } from '../store/slices/purchase.slice'
import { getAllProductsThunk } from '../store/slices/products.slice'

const PurchasePage = () => {

	const dispatch = useDispatch()
	const purchase = useSelector(states => states.purchase)
	const products = useSelector(states => states.products)

	useEffect(() => {
		dispatch(getAllProductsThunk())
	}, [])

	useEffect(() => {
		dispatch(getPurchaseThunk())
	}, [purchase])

	let cartProduct = products.filter(prod => prod.id === purchase[0][0].productId);
	// console.log(cartProduct.map(prod => prod.id));
	// console.log(purchase[0]['0'].id);

	return (
		<div className='purchase page'>
			<header className="page__header purchase">
				<h1 className="page__header-h1">Your purchases</h1>
			</header>
			<section className="page__body purchase_cards">
				{
					purchase[0].map((item, index) => (
						<div key={item.id}>
							<h3>Product: {item.product?.title}</h3>
							<p>Description: {item.product?.description}</p>
							<p>Price: ${item.product?.price}</p>
							<p>Quantity: {item.quantity}</p>
							<p>Category: {item.product?.category.name}</p>
						</div>
					))
				}
			</section>
		</div>
	)
}

export default PurchasePage