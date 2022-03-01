function addProduct() {
    let div = document.createElement('div');
    div.classList.add('main__addProduct__wrapper');
    div.innerHTML = `
    <form action="">
    <label class="main__addProduct__wrapper__text">Наименование товара<span class="red"><span></span></span></label>
    <input type="text" placeholder = "Введите наименование товара">
    <label class="main__addProduct__wrapper__text">Описание товара</label>
    <input type="text" placeholder = "Введите описание товара">
    <label class="main__addProduct__wrapper__text">Ссылка на изображение товара<span class="red"><span></span></span></label>
    <input type="text" placeholder = "Введите ссылку">
    <label class="main__addProduct__wrapper__text">Цена товара<span class="red"><span></span></span></label>
    <input type="text" placeholder = "Введите цену">
    <button>Добавить товар</button>
    </form>
    `;
    document.querySelector('.main__addProduct').append(div);
}

module.exports = addProduct;