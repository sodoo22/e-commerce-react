function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
}

const products = [
    {
        id: 1,
        title: 'Camera',
        price: 11.70,
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        cardImage: 'images/products/card.svg',
        productImageUrl: 'images/products/pro1.png',
    },
    {
        id: 2,
        title: 'Wireless Headphones',
        price: 11.70,
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        cardImage: 'images/products/card.svg',
        productImageUrl: 'images/products/pro2.png',
    },
    {
        id: 3,
        title: 'XBOX Game Controller',
        price: 11.70,
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        cardImage: 'images/products/card.svg',
        productImageUrl: 'images/products/pro3.png',
    },
    {
        id: 4,
        title: 'HP Laptop',
        price: 11.70,
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        cardImage: 'images/products/card.svg',
        productImageUrl: 'images/products/pro4.png',
    },
    {
        id: 5,
        title: 'HP Laptop',
        price: 11.70,
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        cardImage: 'images/products/card.svg',
        productImageUrl: 'images/products/pro4.png',
    },
    {
        id: 6,
        title: 'Camera',
        price: 11.70,
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        cardImage: 'images/products/card.svg',
        productImageUrl: 'images/products/pro1.png',
    },
    {
        id: 7,
        title: 'Wireless Headphones',
        price: 11.70,
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        cardImage: 'images/products/card.svg',
        productImageUrl: 'images/products/pro2.png',
    },
    {
        id: 8,
        title: 'XBOX Game Controller',
        price: 11.70,
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        cardImage: 'images/products/card.svg',
        productImageUrl: 'images/products/pro3.png',
    },
];
export default products;