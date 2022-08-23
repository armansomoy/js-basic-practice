const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


const addItem = () => {
    const filed = document.getElementById('product-name');
    const product = filed.value;
    if (!product) {
        alert("please write a product");
    } else {
        // display in ui
        displayProduct(product);
    }




    // add to local Storage 
    addProductToCart(product);


    filed.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.innerHTML = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }

    // console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    // sessionStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('list').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();