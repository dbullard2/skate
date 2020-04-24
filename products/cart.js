var bodyId = $('body').attr('id');
var cartButton = $('.add-to-cart');
var searchIcon = $('.search');
var cartContainer = $('.cart-container');
var product = $('.add-to-cart').attr('id');
var thumb = $('.thumb');
var colours = ['#ffcccc' /*red*/, '#ffe3cc' /*orange*/, '#fbffcc' /*yellow*/, '#ccffd6' /*green*/, /*blue*/'#ccf8ff', '#f0ccff' /*indigo*/, '#daccff' /*violet*/];

//cart contents #######################################################################

var productNames = [];
var productPrices = [];
var images = [];
var temp = [];

// ####################################################################################

$(document).ready(function () {
    searchIcon.after('<a href="" class="cart"><i class="fas fa-shopping-cart"></i></a>');
    if (bodyId == 'cart') {
        document.body.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
        cartContainer.prepend('<div class="cart-container-top"> <h1 class="has-text-weight-bold product-name">Items In Your Cart</h1> </div>');
        console.log("I've finally invented something that works!");
        var parsedImages = JSON.parse(localStorage.LSimages);
        var parsedNames = JSON.parse(localStorage.LSproductNames);
        var parsedPrices = JSON.parse(localStorage.LSproductPrices);
        parsedImages.forEach(item => cartContainer.append('<div class="cart-item">' + item + '</div>'));
        var cartItem = $('.cart-item');
        

        cartItem.each(function (i, el) {
            var z = document.createElement('div');
            var p = document.createElement('p');
            var price = document.createElement('div');
            z.classList.add("bold-center");
            p.classList.add("bold-center", "product-name", "has-text-weight-bold", "spicy");
            price.classList.add('right-column');
            z.innerHTML = parsedNames[i];
            p.innerHTML = '$' + parsedPrices[i];
            price.innerHTML = '&nbsp;';
            el.append(z);
            el.append(price);
            price.append(p);
        });

        var mergedPrices = Array.prototype.concat.apply([], parsedPrices);
        mergedPrices = mergedPrices.map(Number);
        mergedPrices = mergedPrices.reduce((a, b) => a + b, 0);
        mergedPrices = mergedPrices.toFixed(2);
        cartContainer.append('<div class="cart-item"> <h1 class="has-text-weight-bold product-name bold-center">Total Price - $' + mergedPrices + '</h1> <h1 class="has-text-weight-bold product-name bold-center continue"><a href="../address.html">Continue to Checkout</a></h1></div>');

    }
    if(bodyId == 'product'){
        /*colourful product pages*/
        var pageColour = document.body.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
        document.getElementsByClassName('navbar')[0].style.backgroundColor = pageColour;
        /*#######################*/
        images.push($('.thumb').prop('outerHTML'));
        productNames.push($('.product').prop('outerHTML'));
        productPrices.push(($('.price').html()).replace('$', ''));
    }
    if(bodyId == 'checkout'){
        document.body.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
    }
    if (localStorage.getItem('itemsInCart') === null) {
        localStorage.itemsInCart = 0;
    }
});

function addToCart() {
    localStorage.itemsInCart = Number(localStorage.itemsInCart) + 1;
    var cartIcon = $('.fa-shopping-cart');
    cartButton.after('<p class="added">Item added to cart!</p>');
    cartButton.prop('disabled', true);
    cartIcon.before('<div class="full">' + localStorage.itemsInCart + '</div>');
    store();
}

$(document).on("input", ".numeric", function () {
    this.value = this.value.replace(/\D/g, '');
});

function store(){
    if(localStorage.LSimages == undefined){
        temp.push(images);
        localStorage.LSimages = JSON.stringify(temp);
    } else{
        temp = JSON.parse(localStorage.LSimages);
        temp.push(images);
        localStorage.LSimages = JSON.stringify(temp);
    }
    temp = [];
    if(localStorage.LSproductNames == undefined){
        temp.push(productNames);
        localStorage.LSproductNames = JSON.stringify(temp);
    } else{
        temp = JSON.parse(localStorage.LSproductNames);
        temp.push(productNames);
        localStorage.LSproductNames = JSON.stringify(temp);
    }
    temp = [];
    if(localStorage.LSproductPrices == undefined){
        temp.push(productPrices);
        localStorage.LSproductPrices = JSON.stringify(temp);
    } else{
        temp = JSON.parse(localStorage.LSproductPrices);
        temp.push(productPrices);
        localStorage.LSproductPrices = JSON.stringify(temp);
    }
}