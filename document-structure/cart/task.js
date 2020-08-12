"use strict";
//события
document.addEventListener('click', e => {
	if(e.target.classList.contains('product__quantity-control_inc')) {
		incProduct(e.target.closest('.product'));
	}
	else if(e.target.classList.contains('product__quantity-control_dec')) {
		decProduct(e.target.closest('.product'));
	}
	else if(e.target.classList.contains('product__add')) {
		addToCart(e.target.closest('.product'))
	}
})

//Добавление товаров
const incProduct = (id) => {
	let sumProduct = id.querySelector(".product__quantity-value").textContent ;
	sumProduct++;
	id.querySelector(".product__quantity-value").textContent = sumProduct;
	
}

//Уменьшение товаров
const decProduct = (id) => {
	let sumProduct = id.querySelector(".product__quantity-value").textContent;
	if(sumProduct-1 == 0) sumProduct = 1;
	else {sumProduct--};
	id.querySelector(".product__quantity-value").textContent = sumProduct;
	
}
//Добавление товаров в корзину
const addToCart = (id) => {
	const cartProducts = document.querySelector('.cart__products');
	const divCount = document.createElement('div');
	divCount.className = "cart__product-count";
	const cartProductCopy = id.cloneNode();
	const productImgCopy = id.querySelector(".product__image").cloneNode();
	let countProduct = id.querySelector(".product__quantity-value").textContent;
	const vendorCode = id.dataset.id;
	const cart = Array.from(cartProducts.querySelectorAll(".product"));
	divCount.textContent = countProduct
	cartProductCopy.append(divCount);
	cartProductCopy.append(productImgCopy);

//Проверим корзину
const productInCart = cart.find(item => item.dataset.id == vendorCode);
if(productInCart == undefined) {
	cartProducts.append(cartProductCopy);
}
else {
	const currentCount = productInCart.querySelector(".cart__product-count").textContent;
	const newCount = Number(countProduct) + Number(currentCount)
	productInCart.querySelector(".cart__product-count").textContent = newCount;
}

}
