
/*=================
File to add products to cart
===================*/ 

(function () {

    var addToCartButtons = document.getElementsByClassName('add-to-cart-button');
    var counterProducts = 0;


    for (const i of addToCartButtons) {
        i.addEventListener('click', function() {
        
            counterProducts++;

            document.getElementById('products-counter').innerHTML = counterProducts;
            document.getElementById('products-counter-mobile').innerHTML = counterProducts;
        });
    }

})();