function products() {
    class Product {
        constructor(img, name, description, price) {
            this.img = img;
            this.name = name;
            this.description = description;
            this.price = price;
        }
        render() {
            let div = document.createElement('div');
            div.classList.add('main__products__wrapper');
            div.innerHTML = `
                <img src="${this.img}" alt="img">
                <div class="main__products__wrapper__content">
                    <p>${this.name}</p>
                    <div>${this.description}</div>
                    <span>${this.price}</span>
                </div>`;
            document.querySelector('.main__products').append(div);
        }
    }

    fetch('generated.json')
        .then(response => response.json())
        .then(response => {
            response.forEach(el => {
                new Product(el.img, el.name, el.description, el.price).render();
            });
        });
}

module.exports = products;