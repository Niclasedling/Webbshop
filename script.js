

// let produkter = [
//     "tshirts" [
//         {
//           ID: "b97d421e-2f48-4a14-97d6-918a84cb78fc",
//           Title: "IT IS WHAT IT IS, t-shirt",
//           Price: 299.9,
//           Description: "Our plain white t-shirt is made from 100% organically grown cotton produced from our Stockholm terrarium. This loose fit t-shirt feels like heaven to wear, and its message is simple but clear. Accept and enjoy the present.",
//           Img: "https://cdn.shopify.com/s/files/1/0049/3984/1625/products/unisex-organic-cotton-t-shirt-white-front-60d7624b8b8f9_2048x2048.jpg?v=1624728143"
//         }
//       ],
//       "underwear" [
//         {
//           ID: "cb7aef27-6704-4266-8b24-18436d64478d",
//           Title: "Kalsong",
//           Price: 59.5,
//           Description: "Fina kalsonger",
//           Img: "imgsrc.jpg"
//         }
//       ],
//       "pants" [
//         {
//           ID: "2c74eb92-0a74-4ef0-ac6d-8597c13901e8",
//           Title: "Byxor",
//           Price: 159.5,
//           Description: "Fina sk\u00F6na Byxor",
//           Img: "imgsrc.jpg"
//         }
//       ]
// ]
// Vue.componenet('listofProd',{

//     props:{

//     },

//     data: function(){
//         return {
//             list = produkter
//         }
//     }
// })

let clothed = []

Vue.component('showOnFirstPage', {
    data: function () {

        return {
            Pants: [
                {
                    Description: clothed.category.pants.Description,
                    Id: clothed.category.pants.ID,
                    Img: clothed.category.pants.Img,
                    Price: clothed.category.pants.Price,
                    Titel: clothed.category.pants.Title,
                    ShowonFirstPage: clothed.category.pants.ShowonFirstPage

                }],
            Tshirts: [
                {
                    Description: clothed.category.tshirts.Description,
                    Id: clothed.category.tshirts.ID,
                    Img: clothed.category.tshirts.Img,
                    Price: clothed.category.tshirts.Price,
                    Titel: clothed.category.tshirts.Title,
                    ShowonFirstPage: clothed.category.tshirts.ShowonFirstPage

                }],
            Underwear: [
                {
                    Description: clothed.category.underwear.Description,
                    Id: clothed.category.underwear.ID,
                    Img: clothed.category.underwear.Img,
                    Price: clothed.category.underwear.Price,
                    Titel: clothed.category.underwear.Title,
                    ShowonFirstPage: clothed.category.underwear.ShowonFirstPage

                }],
        }
    }
})

Vue.component('allData', {
    props: {

    },
    data: function () {
        return {
            myList: []
        }
    },
    methods: {
        fetchDatafunction: function () {

            fetch('producter.json')
                .then(response => response.json())
                .then((data) => {
                    console.log(data.category);
                    this.myList = data.category[0] // Hämtar bara byxor
                })
        }


    },
    created: 
    function () {
        this.fetchDatafunction();
    }
})

var app = new Vue
({
    el: '#components',
    created() {
        this.fetchData();
    },
    data: {
        shop: [],
        firstpageShow: this.filtredItem,
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
                showOnPage: app.shop
                
            }
        },
        template: '<div><div><div class="frame" v-for="products in showOnPage" >'
        +'<img class="imgclass" v-bind:src=products.Img>'
        +'<p class="cartText">{{products.Title}}</p>'
        +'<p class ="cartText">{{products.Type}}</p>'
        +'<p class="cartText">{{products.Price}}<button class="btn">Köp</button></p>'
        +'</div></div></div>'
    })