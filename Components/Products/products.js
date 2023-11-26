class Products {

    render() {
        let catalogElements = '';
        CATALOG.forEach(({img, price, name}) => {
            catalogElements += `
                <li class='products-element'>
                    <img class='products-element__img' src='${img}' />
                    <span class='products-element__name'>${name}</span>
                    <span class='products-element__price'>${price}</span>
                    <button class='products-element__btn'>Add to cart</button>
                </li>
            `;

        })

        const catalogFull = `
            <ul class='products-container'>
                ${catalogElements}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = catalogFull;
    }
}

const productsPage = new Products();
productsPage.render();