var bodyId = $('body').attr('id');
var cartButton = $('.add-to-cart');
var searchIcon = $('.search');
var product = $('.add-to-cart').attr('id');
var cart = [];
var cartt = '';
var cartContainer = $('.cart-container');

$(document).ready(function(){
    searchIcon.after('<a href="" class="cart"><i class="fas fa-shopping-cart"></i></a>');
    if (bodyId == 'cart') {
        var colours = ['#ffcccc' /*red*/, '#ffe3cc' /*orange*/, '#fbffcc' /*yellow*/, '#ccffd6' /*green*/, /*blue*/'#ccf8ff', '#f0ccff' /*indigo*/, '#daccff' /*violet*/];
        document.body.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
        cartContainer.prepend('<div class="cart-container-top"> <h1 class="has-text-weight-bold product-name">Items In Your Cart</h1> </div>');
        cartt = JSON.parse(localStorage.localCart);
        cartt.forEach(item => cartContainer.append(item));
        console.log("I've finally invented something that works!");
    }
    if (localStorage.getItem('itemsInCart') === null) {
        localStorage.itemsInCart = 0;
    }
})

function addToCart(){
    localStorage.itemsInCart = Number(localStorage.itemsInCart) +1;
    var cartIcon = $('.fa-shopping-cart');
    cartButton.after('<p class="added">Item added to cart!</p>');
    cartButton.prop('disabled', true);
    cartIcon.before('<div class="full">' + localStorage.itemsInCart +'</div>');
    if(product == 'romero-fos-arm'){
        cart.push('<div class="cart-item"> <img src="products/decks/img/wsfe.jpg" alt="" class="product-img"> <p class="has-text-weight-bold product-name bold-center">Toy Machine Romero FOS Arm Deck</p> <p class="price smoll-center">$53.00</p> <p class="total bold-center has-text-weight-bold product-name">$53.00</p> <span id="test" class="remove" onclick="removeItem()">X</span></div>');
    }
    localStorage.localCart = JSON.stringify(cart);
    //cartt = JSON.parse(localStorage.localCart);
    
}