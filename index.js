function render() {
    let productsLength = localStorageUtil.getFromLocal().length;

    headerPage.render(productsLength);
    productsPage.render();
}

render()