(function () {
    var app = angular.module('store', []);
    var gems = [
        {
            name: 'Dodecahedron',
            price: 1000,
            description: 'Lorem ipsum',
            picture: 'iamgen_01.jpg',
            discounts: [10, 15, 20],
            stock: 10,
            reviews: [
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' },
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' },
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' }
            ]
        },
        {
            name: 'Dodecahedron',
            price: 1000,
            description: 'Lorem ipsum',
            picture: 'iamgen_01.jpg',
            discounts: [10, 15, 20],
            stock: 10,
            reviews: [
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' },
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' },
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' }
            ]
        },
        {
            name: 'Dodecahedron',
            price: 1000,
            description: 'Lorem ipsum',
            picture: 'iamgen_01.jpg',
            discounts: [10, 15, 20]
            ,
            stock: 10,
            reviews: [
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' },
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' },
                { stars: 5, comments: 'Lorem Ipsum', author: 'alonso@gmail.com' }
            ]
        }]
    
    app.controller('StoreController', function() {
        this.products = gems;
    })

})