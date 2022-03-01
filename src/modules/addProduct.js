function addProduct() {
    let div = document.createElement('div');
    div.classList.add('main__addProduct__wrapper');
    div.innerHTML = `
    <form action="">
    <label class="main__addProduct__wrapper__text">Наименование товара<span class="red"><span></span></span></label>
    <input class = 'input' type="text" placeholder = "Введите наименование товара">
    <label class="main__addProduct__wrapper__text">Описание товара</label>
    <input type="text" data-ignore='true' class='input description' placeholder = "Введите описание товара">
    <label class="main__addProduct__wrapper__text">Ссылка на изображение товара<span class="red"><span></span></span></label>
    <input class = 'input' type="text" placeholder = "Введите ссылку">
    <label class="main__addProduct__wrapper__text">Цена товара<span class="red"><span></span></span></label>
    <input class = 'input lastInput' type="text" placeholder = "Введите цену">
    <button>Добавить товар</button>
    </form>
    `;

    document.querySelector('.main__addProduct').append(div);
    let button = document.querySelector('button');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let inputs = document.querySelectorAll('.input');
        inputs.forEach((item, index) => {
            if (item.value === '' && item.dataset.ignore !== 'true') {
                let divErr = document.createElement('div');
                divErr.classList.add('error');
                item.classList.add('errorMargin');
                item.classList.remove('input');

                divErr.innerHTML = `
                Поле является обязательным
                `;
                item.after(divErr)
                e.target.disabled = true;
            }
        })
        
        let input = document.querySelectorAll('.errorMargin');
        input = Object.values(input);
        input.forEach((item, index) => {
            console.log(item);
            item.addEventListener('click', (event) => {
                    let div = document.querySelectorAll('.error');
                    div.forEach(item => {
                        item.remove()
                    })
                    input.forEach(item => {
                        item.classList.remove('errorMargin');
                        item.classList.add('input');
                    })
                    e.target.disabled = false;
            })
        })
        console.log('dsadsadsadsa');
        let form = document.querySelectorAll('input');
        console.log(form[3].value);
        let name = form[0].value;
        let image = form[2].value;
        let description = form[1].value;
        let price = form[3].value;
        let div = document.createElement('div');
            div.classList.add('main__products__wrapper');
            div.innerHTML = `
                <img src="${image}" alt="img">
                <div class="main__products__wrapper__content">
                    <p>${name}</p>
                    <div>${description}</div>
                    <span>${price}</span>
                </div>`;
            document.querySelector('.main__products').append(div);
    })
    let price = document.querySelector('.lastInput');

    price.addEventListener('input', (e)=> {
       e.target.value = getValidNumber(String(e.target.value));
    })
    function getValidNumber(n) {
        let newN = n.replace(' ', '');
        return newN.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
}

module.exports = addProduct;