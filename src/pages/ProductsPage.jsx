import React from 'react'

const ProductsPage = () => {
	const productos = [
		{
			title: "Modern Black Leather Sofa",
			description:
				"Add a touch of elegance and comfort to your living room with this modern black leather sofa featuring sleek lines.",
			price: 799.99,
			categoryId: 1
		},
		{
			title: "Industrial Style Reclaimed Oak Coffee Table",
			description:
				"The industrial coffee table combines reclaimed oak wood and sturdy metal for a unique and durable look.",
			price: 249.0,
			categoryId: 1
		},
		{
			title: "Ergonomic Office Chair",
			description:
				"Maintain productivity in your office with this ergonomic chair that offers lumbar support and customizable adjustments.",
			price: 189.95,
			categoryId: 2
		},
		{
			title: "Handcrafted King Size Bed with Wood Headboard",
			description:
				"Enjoy restful nights in this king-size bed featuring a handcrafted wood headboard for a touch of rustic elegance.",
			price: 1199.0,
			categoryId: 3
		},
		{
			title: "Solid Oak Minimalist Desk",
			description:
				"The solid oak desk adds functionality without compromising aesthetics to your workspace.",
			price: 349.5,
			categoryId: 2
		},
		{
			title: "Geometric Walnut Floating Shelves",
			description:
				"Organize and display your favorite items with these geometric walnut floating shelves.",
			price: 59.99,
			categoryId: 1
		},
		{
			title: "Soft Fabric Recliner Chair",
			description:
				"Unwind after a long day in this soft fabric recliner chair designed for ultimate relaxation.",
			price: 449.0,
			categoryId: 3
		},
		{
			title: "Spacious Bedroom Chest with Elegant Drawers",
			description:
				"Keep your clothes organized with this spacious bedroom chest featuring ample drawers and stylish handles.",
			price: 289.75,
			categoryId: 3
		},
		{
			title: "Glass Extendable Dining Table",
			description:
				"The glass extendable dining table offers versatility for family gatherings and dinner parties with friends.",
			price: 599.0,
			categoryId: 3
		},
		{
			title: "Multifunctional Storage Wardrobe",
			description:
				"Optimize storage in your home with this multifunctional wardrobe combining open shelves and drawers.",
			price: 379.99,
			categoryId: 3
		},
	];

	const categories = [
		{
			name: "Living Room Furniture"
		},
		{
			name: "Office and Workspace"
		},
		{
			name: "Bedroom Essentials"
		},
	]

	const handleAdd = () => {}

	return (

		<div className='home page'>
			<header className='home__header'>
				<h1>Products - Forniture</h1>
				<div className="filters">
					<div className="category__filter">
						<label htmlFor="categories">Choose a category:</label>
					<select name="Filter by category" id="">
						<option value="Categories" aria-required="false" disabled="true">Categories</option>
						{
							categories.map(cat => (
								<option value={cat.name}>{cat.name}</option>
							))
						}
					</select>
					</div>
				</div>
			</header>
			<section className='products__cards'>
				{
					productos.map(prod => (
						<div className="product__card">
							<div className="card__header">
								<h2 className='product__title'>{prod.title}</h2>
								<img className='product__img' src="https://www.vigfurniture.com/media/catalog/product/cache/6d4faa98f2b48c05dae02148ead85f2f/n/a/natalia_vgkk_78208_black_sofa_1.jpg" alt="" />
							</div>
							<div className="card__body">
								<p className="product__description">{prod.description}</p>
								<h4 className="product__price">$ {prod.price}</h4>
								<div className="product__buttons">
									<button className="product__button add" onClick={handleAdd}>+</button>
									<button className="product__button quantity">5</button>
									<button className="product__button less">-</button>
								</div>
							</div>
						</div>
					))
				}
			</section>
		</div>
	)
}

export default ProductsPage