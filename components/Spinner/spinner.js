class Spinner {

    render() {
        let html = `
            <div class="spinner-wrap">
                <img src="components/Spinner/img/spinner.svg" alt="spinner" class="spinner__img">
            </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinner = new Spinner()