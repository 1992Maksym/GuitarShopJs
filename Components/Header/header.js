class Header {
    constructor(){
        this.counter = '';
    }

    cartHendler(count) {
        if(count > 0){
            this.counter = count
        } else {
            this.counter = '';
        }
    }

    render(count) {
        this.cartHendler(count)
        const htmlHeader = `
            <div class="header-container">
                <div class="header-counter">🔥 ${this.counter}</div>
            </div>
        `;

        ROOT_HEADER.innerHTML = htmlHeader;
    }
}

const headerPage = new Header();
let productsLength = localStorageUtil.getFromLocal().length;
headerPage.render(productsLength);