class Products {

    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.LabelRemove = 'Удалить из корзины'
    }

    handleSetLocalStorage(element, id) {
        const {productState, products} = localStorageUtil.putToLocal(id);
        if(productState) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.LabelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length)
    }

    render() {
        const localProducts = localStorageUtil.getFromLocal();

        let catalogElements = '';
        CATALOG.forEach(({id, img, price, name}) => {
            let activeClass = '';
            let activeText = '';
            
            if(localProducts.indexOf(id) === -1){
                activeText = this.labelAdd;
            }else{
                activeText = this.LabelRemove;
                activeClass = this.classNameActive;
            }

            catalogElements += `
                <li class='products-element'>
                    <img class='products-element__img' src='${img}' />
                    <span class='products-element__name'>${name}</span>
                    <span class='products-element__price'>💲 ${ price.toLocaleString() } USD</span>
                    <button class='products-element__btn ${activeClass}' onclick="productsPage.handleSetLocalStorage(this, '${id}')">
                    ${activeText}
                    </button>
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
