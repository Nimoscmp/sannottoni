
/*=================
File to set behavior of buttons to see more products
===================*/ 


    var buttonMoreInfo = document.getElementById('buttonMore');
    var buttonLessInfo = document.getElementById('buttonLess');
    var cards = document.getElementsByClassName('product-card');

    buttonMoreInfo.addEventListener('click', function() {

        this.classList.add('d-none');

        for (let i = 3; i < cards.length; i++) {
            cards[i].classList.remove('d-none');            
        }

        buttonLessInfo.classList.remove('d-none');
    });

    buttonLessInfo.addEventListener('click', function(){

        this.classList.add('d-none');

        for (let i = 3; i < cards.length; i++) {
            cards[i].classList.add('d-none');            
        }

        buttonMoreInfo.classList.remove('d-none');

    });