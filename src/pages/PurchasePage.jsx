import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchaseThunk } from '../store/slices/purchase.slice'

const PurchasePage = () => {

	const purchase = useSelector(states => states.purchase)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPurchaseThunk())
	}, [])

	console.log(purchase);

	return (
		<div className='purchase page'>
			<header className="page__header purchase">
				<h1 className="page__header-h1"></h1>
			</header>
		</div>
	)
}

export default PurchasePage