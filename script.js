let cart = [];


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
            console.log('Tillagd')
        }
    },
    template: '<div class="cart">'
        + '<div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="frameText">{{products.Title}}</p>'
        + '<p class ="frameText">{{products.Type}}</p>'
        + '<p class="frameText">{{products.Price}}kr<button class="btn" v-bind:key="products.ID" v-on:click="getItem(products.ID)">Köp</button></p>'
        + '</div>'
        + '</div>'
})
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
            console.log('Tillagd')
        }
    },
    template: '<div class="cart">'
        + '<div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="frameText">{{products.Title}}</p>'
        + '<p class ="frameText">{{products.Type}}</p>'
        + '<p class="frameText">{{products.Price}}kr<button class="btn" v-bind:key="products.ID" v-on:click="getItem(products.ID)">Köp</button></p>'
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
            console.log('Tillagd')
        }
    },
    template: '<div class="cart">'
        + '<div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="frameText">{{products.Title}}</p>'
        + '<p class ="frameText">{{products.Type}}</p>'
        + '<p class="frameText">{{products.Price}}kr<button class="btn" v-bind:key="products.ID" v-on:click="getItem(products.ID)">Köp</button></p>'
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
            console.log('Tillagd')
        }
    },
    template: '<div class="cart">'
        + '<div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="frameText">{{products.Title}}</p>'
        + '<p class ="frameText">{{products.Type}}</p>'
        + '<p class="frameText">{{products.Price}}kr<button class="btn" v-bind:key="products.ID" v-on:click="getItem(products.ID)">Köp</button></p>'
        + '</div>'
        + '</div>'
})
Vue.component('cartitems',{
    data: function(){
        return {
            itemlist: cart
        }
    }, 
    template: '<div><ul class="headerCart">'
    + '<li class="headerItem1">Artikel</li>'
    + '<li class="headerItem2">Antal</li>'
    + '<li class="headerItem3">Summa</li>'
    + '</ul>'
    + '<div class="frameCart" v-for="products in itemlist" >'
    + '<img class="imgCart" v-bind:src=products.Img>'
    + '<p class="textCart">{{products.Title}}<br>{{products.Type}}</p>'
    + '<button class="btnCart">Ta bort</button>'
    + '</div>'
    + '</div>'
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