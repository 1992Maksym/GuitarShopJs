function render() {
    let productsLength = localStorageUtil.getFromLocal().length;

    headerPage.render(productsLength);
    spinner.render();
    setTimeout(() => {
        ROOT_SPINNER.innerHTML = '';
        productsPage.render();
    },1000)
    
}

render()