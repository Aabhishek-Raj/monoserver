const users = [
  { id: 'user1', name: 'Alice', email: 'alice@example.com' },
  { id: 'user2', name: 'Bob', email: 'bob@example.com' },
  { id: 'user3', name: 'Charlie', email: 'charlie@example.com' },
];

const assets = [
  { id: 'asset1', name: 'Apple Inc.', symbol: 'AAPL', price: 175.43 },
  { id: 'asset2', name: 'Tesla Inc.', symbol: 'TSLA', price: 732.56 },
  { id: 'asset3', name: 'Bitcoin', symbol: 'BTC', price: 37643.22 },
];

const transactions = [
  { 
    id: 'transaction1', 
    orderId: 'order1', 
    executedPrice: 174.50, 
    timestamp: '2024-10-12T10:30:00Z' 
  },
  { 
    id: 'transaction2', 
    orderId: 'order2', 
    executedPrice: 733.00, 
    timestamp: '2024-10-12T11:00:00Z' 
  },
  { 
    id: 'transaction3', 
    orderId: 'order3', 
    executedPrice: 37200.00, 
    timestamp: '2024-10-12T11:30:00Z' 
  },
];


const orders = [
  { 
    id: 'order1', 
    type: 'buy', 
    assetId: 'asset1', // Apple Inc.
    quantity: 10, 
    price: 174.00, 
    userId: 'user1' // Alice 
  },
  { 
    id: 'order2', 
    type: 'sell', 
    assetId: 'asset2', // Tesla Inc.
    quantity: 5, 
    price: 735.00, 
    userId: 'user2' // Bob 
  },
  { 
    id: 'order3', 
    type: 'buy', 
    assetId: 'asset3', // Bitcoin
    quantity: 0.5, 
    price: 37000.00, 
    userId: 'user3' // Charlie 
  },
];
