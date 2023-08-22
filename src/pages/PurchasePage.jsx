import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchaseThunk } from '../store/slices/purchase.slice'

const PurchasePage = () => {

	const purchase = useSelector(states => states.purchase)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPurchaseThunk())
	}, [purchase])

	console.log(purchase);
	// console.log(purchase[0]['0'].id);

	return (
		<div className='purchase page'>
			<header className="page__header purchase">
				<h1 className="page__header-h1">Your purchases</h1>
			</header>
			<section className="page__body purchase_cards">
				{/* {purchase.map(item => (
					<div key={item.id}>
						<h3>Product: {item.product?.title}</h3>
						<p>Description: {item.product?.description}</p>
						<p>Price: ${item.product?.price}</p>
						<p>Quantity: {item.quantity}</p>
						<p>Category: {item.product?.category.name}</p>
					</div>
				))} */}
			</section>
		</div>
	)
}

export default PurchasePage