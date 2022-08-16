function calculate() {
    let price, discount, result; 

    price = document.getElementById('price').value;
    price = parseInt(price);

    discount = document.getElementById('discount').value;
    discount = parseInt(discount);

    result = (price - ((price * 0.01) * discount)).toFixed(2);

    document.getElementById('result').innerHTML = result;
}