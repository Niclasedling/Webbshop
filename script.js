let cart = [];
let totaltquantity = 0;
let totalCost = 0;
const openModalButtons = document.querySelectorAll('[data-modal-target')
const closeModalButtons = document.querySelectorAll('[data-close-button')
const overlay = document.getElementById('overlay')


Vue.component('Firstpage', 
{
    created() {
        console.log(this.showOnPage)
    },
    data: function () {
        return {
            showOnPage: app.shop.filter(item => item.showOnFirstPage === true),
            itemlist: cart
        }
    },
    methods: {
        getItem: function(ID){
            let itemMatch = app.shop.find(item => item.ID === ID);
            this.itemlist.push(itemMatch)
            console.log(this.itemlist)
            totaltquantity ++;
            itemMatch.Quantity --;
            console.log(itemMatch.Quantity)
            totalCost += itemMatch.Price;
            console.log(totalCost)
            console.log('Tillagd')
        }
    },
    template: '<div class="cart">'
        + '<div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="frameText">{{products.Title}}</p>'
        + '<p class ="frameText">{{products.Type}}</p>'
        + '<p class="frameText">{{products.Price}}kr<button class="btn" v-if="products.Quantity > 0" v-bind:key="products.ID" v-on:click="getItem(products.ID)">Add to cart</button><button class="btn" v-else="prodcuts.Quantity = 0">Varan är slut</button></p>'
        + '<p class="frameText">Qty:{{products.Quantity}}</p>'
        + '</div>'
        + '</div>'
})
// openModalButtons.forEach(btnS => {
//     btnS.addEventListener('click', () => {
//         const modal = document.querySelector(btnS.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })
// closeModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })
// function openModal(modal){
//     // if (modal == null) return 
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }

// function closeModal(modal){
//     // if (modal == null) return 
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
// }
Vue.component('Shirts', 
{
    created() {
        console.log(this.showOnPage)
    },
    data: function () {
        return {
            showOnPage: app.shop.filter(item => item.Type === 'Shirt'),
            itemlist: cart

        }
    },
    methods: {
        getItem: function(ID){
            let itemMatch = app.shop.find(item => item.ID === ID);
            this.itemlist.push(itemMatch)
            console.log(this.itemlist)
            totaltquantity ++;
            itemMatch.Quantity --;
            console.log(itemMatch.Quantity)
            totalCost += itemMatch.Price;
            console.log(totalCost)
            console.log('Tillagd')
        }
    },
    template: '<div class="cart">'
        + '<div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="frameText">{{products.Title}}</p>'
        + '<p class ="frameText">{{products.Type}}</p>'
        + '<p class="frameText">{{products.Price}}kr<button class="btn" v-if="products.Quantity > 0" v-bind:key="products.ID" v-on:click="getItem(products.ID)">Add to cart</button><button class="btn" v-else="prodcuts.Quantity = 0">Varan är slut</button></p>'
        + '<p class="frameText">Qty:{{products.Quantity}}</p>'
        + '</div>'
        + '</div>'
})
Vue.component('Jeans', 
{
    created() {
        console.log(this.showOnPage)
    },
    data: function () {
        return {
            showOnPage: app.shop.filter(item => item.Type === 'Jeans'),
            itemlist: cart

        }
    },
    methods: {
        getItem: function(ID){
            let itemMatch = app.shop.find(item => item.ID === ID);
            this.itemlist.push(itemMatch)
            console.log(this.itemlist)
            totaltquantity ++;
            itemMatch.Quantity --;
            console.log(itemMatch.Quantity)
            totalCost += itemMatch.Price;
            console.log(itemMatch.Price)
            console.log('Tillagd')
        }
    },
    template: '<div class="cart">'
        + '<div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="frameText">{{products.Title}}</p>'
        + '<p class ="frameText">{{products.Type}}</p>'
        + '<p class="frameText">{{products.Price}}kr<button class="btn" v-if="products.Quantity > 0" v-bind:key="products.ID" v-on:click="getItem(products.ID)">Add to cart</button><button class="btn" v-else="prodcuts.Quantity = 0">Varan är slut</button></p>'
        + '<p class="frameText">Qty:{{products.Quantity}}</p>'
        + '</div>'
        + '</div>'
})
Vue.component('Underwear', 
{
    created() {
        console.log(this.showOnPage)
    },
    data: function () {
        return {
            showOnPage: app.shop.filter(item => item.Type === 'Underwear'),
            itemlist : cart

        }
    },
    methods: {
        getItem: function(ID){
            let itemMatch = app.shop.find(item => item.ID === ID);
            this.itemlist.push(itemMatch)
            console.log(this.itemlist)
            totaltquantity ++;
            itemMatch.Quantity --;
            console.log(itemMatch.Quantity)
            totalCost += itemMatch.Price;
            console.log(totalCost)
            console.log('Tillagd')
        }
    },
    template: '<div class="cart">'
        + '<div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="frameText">{{products.Title}}</p>'
        + '<p class ="frameText">{{products.Type}}</p>'
        + '<p class="frameText">{{products.Price}}kr<button class="btn" v-if="products.Quantity > 0" v-bind:key="products.ID" v-on:click="getItem(products.ID)">Add to cart</button><button class="btn" v-else="prodcuts.Quantity = 0">Varan är slut</button></p>'
        + '<p class="frameText">Qty:{{products.Quantity}}</p>'
        + '</div>'
        + '</div>'
})
Vue.component('cartitems',{
    data: function(){
        return {
            itemlist: cart
        }
    },
    methods: {
        removeItem: function(ID){
            let match = this.itemlist.find(item => item.ID === ID)
            this.itemlist.splice(match, 1)
            totaltquantity --;
            totalCost -= match.Price;
            
            console.log(totalCost)

        },
        removeAll: function(){
            this.itemlist = [];
            totaltquantity = 0;
            totalCost = 0;
        },
        addItem: function(ID){
            let itemMatch = this.itemlist.find(item => item.ID === ID);
            this.itemlist.push(itemMatch)
            quantity ++;
            totaltquantity ++;
            
        }


    },
    template: '<div>'
    +'<div class="cartBody">'
    +'<div class="Cart-Container">'
    +'<div class=Cart-Header>'
    +'<h3 class="Heading">Shopping Cart</h3>'
    +'<h5 class="Action" v-on:click="removeAll()">Remove all</h5>'
    +'</div>'
    +' <div class="Cart-Items" v-for="products in itemlist">'
    +' <div class="cart-image-box">'
    +'<img class="cart-img1" v-bind:src="products.Img" />'
    +'</div>'
    +'<div class="cart-about">'
    +' <h1 class="cart-title">{{products.Title}}</h1>'
    +'<h3 class="cart-subtitle">{{products.Type}}</h3>'
    +'<img class="cart-img2" v-bind:src=products.Img />'
    +' </div>'
    +'<div class="cart-counter">'
    // +' <div class="cart-btn" v-bind:key="products.ID" v-on:click="addItem(products.ID)">+</div>'
    // +' <div class="count">{{quantity}}</div>'
    // +' <div class="cart-btn" v-bind:key="products.ID" v-on:click="removeItem(products.ID)">-</div>'
    +' </div>'
    +'<div class="prices">'
    +'<div class="amount">{{products.Price}}kr</div>'
    +'<div class="remove"><u v-bind:key="products.ID" v-on:click="removeItem(products.ID)">Remove</u></div>'
    +'</div>'
    +'</div>'
    +' <hr>'
    +' <div class="checkout">'
    +' <div class="total">'
    +'<div>'
    +' <div class="Subtotal">Sub-Total</div>'
    +'<div class="items">{{totaltquantity}} items</div>'
    +' </div>'
    +'<div class="total-amount">{{totalCost}}kr</div>'
    +'</div>'
    +' <button class="cart-button">Checkout</button>'
    +' </div>'
     +'</div>'
    +'</div>'
    +'</div>'
})
function getGUID() {
    var u = '', i = 0;
    while (i++ < 36) {
        var c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i - 1],
            r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        u += (c == '-' || c == '4') ? c : v.toString(16)
    }
    return u;
}
Vue.component('Admin',{
    data: function(){
        return {
            Title: '',
            Price: '',
            Description: '',
            Type: '',
            Img: '',
            Quantity: '',
        }
    },
    methods: {
        addNewItem: function() {
            var objec = {
                ID: '',
                Title: '',
                Price: '',
                Description: '',
                Type: '',
                Img: '',
                Quantity: '',
            }

            objec.ID = getGUID();
            objec.Title = this.Title;
            objec.Price = this.Price;
            objec.Description = this.Description;
            objec.Type = this.Type;
            objec.Img = this.Img;
            objec.Quantity = this.Quantity;

            console.log('Item added')
            console.log(objec.Price)
            app.shop.push(objec);
        },
    },
    template: '<div>'
        + '<div class="cartBody">'
                    + '<div class="Cart-Container">'
                    + '<div class=Cart-Header>'
                    + '<h3 class="Heading">Admin</h3>'
                    + '</div>'
                    + '<div class="Cart-Items">'
                    + '<div class="cart-image-box">'
                    + ' <label  class="admin-title" for="Title">Add title</label>'
                    + '<input type="text" id="Title" v-model="Title" >'
                    + '<label class="admin-title" for="Title">Price</label>'
                    + '<input type="text" id="Price"  v-model="Price" >'
                    + '<label class="admin-title" for="Title">Desciption</label>'
                    + '<input type="text" id="Description"  v-model="Description" >'
                    + '<label class="admin-title" for="Title">Type</label>'
                    + '<input type="text" id="Type" v-model="Type">'
                    + '<label class="admin-title" for="Title">Quantity</label>'
                    + '<input type="text" id="Quantity" v-model="Quantity" >'
                    + '<label class="admin-title" for="Title">Img</label>'
                    + '<input type="text" id="Img" v-model="Img">'
                    + '</div>'
                    + '</div>'
                    + '<br>'
                    + '<hr>'
                    + '<div class="checkout">'
                    + '<div class="total">'
                    + '</div>'
                    + '<button class="cart-button" v-on:click="addNewItem()">Submit</button>'
                    + '</div>'
                    + '</div>'
                    + '</div></div>'
})
var app = new Vue
({
    el: '#components',
    created() {
        this.fetchData();
    },
    data: {
        loading: true,
        shop: [],
        page: 'Home',
    },
    
    methods: {
        changepage: function(page){
            this.page = page;
        },
        fetchData: async function() {
            await axios.get('produkter.json')
            .then(response => {
                
                this.shop = response.data.shop
                
                console.log(this.shop)
            }).finally(() => {
                this.loading = false;
            })
            
        }
        
    }
});
