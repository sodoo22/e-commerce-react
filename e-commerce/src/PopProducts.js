function generateVoteCount() {
  return Math.floor(Math.random() * 5 + 1);
}

const products = [
  {
    id: 1,
    title: "Camera",
    price: 11.7,
    description: "On-demand sand castle construction expertise.",
    url: "#",
    votes: generateVoteCount(),
    cardImage: "images/products/card.svg",
    productImageUrl: "images/products/pro1.png",
    show: false,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 11.7,
    description: "Earn points when your favorite politicians pass legislation.",
    url: "#",
    votes: generateVoteCount(),
    cardImage: "images/products/card.svg",
    productImageUrl: "images/products/pro2.png",
    show: false,
  },
  {
    id: 3,
    title: "XBOX Game Controller",
    price: 11.7,
    description: "We already have your measurements and shipping address.",
    url: "#",
    votes: generateVoteCount(),
    cardImage: "images/products/card.svg",
    productImageUrl: "images/products/pro3.png",
    show: false,
  },
  {
    id: 4,
    title: "HP Laptop",
    price: 11.7,
    description: "High-minded or absent-minded? You decide.",
    url: "#",
    votes: generateVoteCount(),
    cardImage: "images/products/card.svg",
    productImageUrl: "images/products/pro4.png",
    show: false,
  },
  {
    id: 5,
    title: "HP Laptop",
    price: 11.7,
    description: "High-minded or absent-minded? You decide.",
    url: "#",
    votes: generateVoteCount(),
    cardImage: "images/products/card.svg",
    productImageUrl: "images/products/pro4.png",
    show: false,
  },
  {
    id: 6,
    title: "Camera",
    price: 11.7,
    description: "On-demand sand castle construction expertise.",
    url: "#",
    votes: generateVoteCount(),
    cardImage: "images/products/card.svg",
    productImageUrl: "images/products/pro1.png",
    show: false,
  },
  {
    id: 7,
    title: "Wireless Headphones",
    price: 11.7,
    description: "Earn points when your favorite politicians pass legislation.",
    url: "#",
    votes: generateVoteCount(),
    cardImage: "images/products/card.svg",
    productImageUrl: "images/products/pro2.png",
    show: false,
  },
  {
    id: 8,
    title: "XBOX Game Controller",
    price: 11.7,
    description: "We already have your measurements and shipping address.",
    url: "#",
    votes: generateVoteCount(),
    cardImage: "images/products/card.svg",
    productImageUrl: "images/products/pro3.png",
    show: false,
  },
];
export default products;
