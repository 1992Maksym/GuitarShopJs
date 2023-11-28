class Shoping {

    closeCart() {
        ROOT_SHOPING.innerHTML = '';
    }

    render() {
        const localProducts = localStorageUtil.getFromLocal();
        let htmlCatalog = '';
        let sum = 0;

        CATALOG.forEach(({id, name, price}) => {
            if(localProducts.indexOf(id) !== -1){
                htmlCatalog += `
                    <div class="cart-item">
                        <div class="cart-item__name">${name}</div>
                        <div class="cart-item__price">💲 ${price.toLocaleString()}</div>
                    </div>
                `
                sum += price;
            }
        });
        let html = `
            <div class="cart-wrap">
                <div class="close" onclick="shoping.closeCart()"></div>
                ${htmlCatalog}
                <div class="cart-sum">Сумма: 💲 ${sum.toLocaleString()}</div>
            </div>
        `;

        ROOT_SHOPING.innerHTML = html;
    }
}

const shoping = new Shoping();