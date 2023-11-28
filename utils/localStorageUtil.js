class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getFromLocal() {
        const localProducts = JSON.parse(localStorage.getItem(this.keyName));
        if(localProducts !== null){
            return localProducts;
        } else{
            return [];

        }
    }

    putToLocal(id) {
        let products = this.getFromLocal();
        let productState = false;
        const index = products.indexOf(id);

        if(index === -1) {
            products.push(id);
            productState = true;
        }else {
            products.splice(index, 1);
            productState = false;
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return {productState, products}
    }
}

const localStorageUtil = new LocalStorageUtil();