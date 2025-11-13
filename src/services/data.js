export const restaurants = [
  {
    id: '1',
    name: 'La Pasta Mia',
    category: 'Italiana',
    rating: 4.8,
    fee: 'Entrega grátis',
    time: '30-40 min',
    cover: '/images/r1.jpg',
    dishes: [
      { id: 1, name: 'Spaghetti ao Sugo', price: 'R$ 32,00', image: '/images/p1.jpg' },
      { id: 2, name: 'Fettuccine Alfredo', price: 'R$ 35,00', image: '/images/p2.jpg' },
      { id: 3, name: 'Lasanha Bolonhesa', price: 'R$ 38,00', image: '/images/p3.jpg' }
    ]
  },
  {
    id: '2',
    name: 'Sushi Go',
    category: 'Japonesa',
    rating: 4.7,
    fee: 'R$ 6,90',
    time: '25-35 min',
    cover: '/images/r2.jpg',
    dishes: [
      { id: 1, name: 'Combinado 20 peças', price: 'R$ 45,00', image: '/images/s1.jpg' },
      { id: 2, name: 'Temaki Salmão', price: 'R$ 28,00', image: '/images/s2.jpg' },
      { id: 3, name: 'Yakissoba', price: 'R$ 36,00', image: '/images/s3.jpg' }
    ]
  }
];
