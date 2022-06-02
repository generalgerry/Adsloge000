const PRODUCTS = [
    {
        id: 100,
        name: 'Promo Ad',
        price: 400,
        image: require('../assets/products/promoad.jpg'),
        description: 'As one of our recent customers,you are now eligible to claim first purchase promo ad at 20% off. But hurry we have limited stock and this offer is only valid for 1-week. Give it a try!.'

    }, 

    {
        id: 101,
        name: 'Special Ad',
        price: 600,
        image: require('../assets/products/specialadoffer.jpg'),
        description: 'An offer made for the extra(it includes animation and sound).'

    },

    {
        id: 102,
        name: 'Help & Support Ad',
        price: 270,
        image: require('../assets/products/adabouthelpandsupport.jpg'),
        description: 'An ad made to render help and support services to its customers.'

    },
    
    {
        id: 103,
        name: 'Song Ad',
        price: 270,
        image: require('../assets/products/adaboutasong.jpg'),
        description: 'An ad offer for selling your songs to the entire world.'

    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}