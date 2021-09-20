

var app = new Vue
({
    el: '#components',
    created() {
        this.fetchData();
    },
    data: {
        shop: [],
        firstpageShow: this.filtredItem(),
        page: 'Home'
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
            })
        },
        filtredItem: function(){
            return this.shop.filter(item => item.ShowonFirstPage == true)
            
        }
        
    }
});
    const appComponent = Vue.component('showonFirstpage', {
        data: function (){
            return {
                showOnPage: app.firstpageShow
                
            }
        },
        template: '<div><div class="frame" v-for="products in showOnPage" >'
        + '<img class="imgclass" v-bind:src=products.Img>'
        + '<p class="cartText">{{products.Title}}</p>'
        + '<p class ="cartText">{{products.Type}}</p>'
        + '<p class="cartText">{{products.Price}}kr<button class="btn">Köp</button></p>'
        + '</div></div>'
    })