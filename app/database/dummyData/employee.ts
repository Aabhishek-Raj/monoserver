// Employees (list of employee objects)
export const employees = [
  { id: 'e1', name: 'Alice', age: 29, salary: 5000, departmentId: 'd1' },
  { id: 'e2', name: 'Bob', age: 35, salary: 7000, departmentId: 'd2' },
  { id: 'e3', name: 'Charlie', age: 40, salary: 9000, departmentId: 'd3' },
  { id: 'e4', name: 'David', age: 25, salary: 4500, departmentId: 'd1' },
  { id: 'e5', name: 'Eva', age: 32, salary: 6500, departmentId: 'd2' },
  { id: 'e6', name: 'Frank', age: 38, salary: 8000, departmentId: 'd3' }
];

// Departments
export const departments = [
  { id: 'd1', name: 'HR' },
  { id: 'd2', name: 'Finance' },
  { id: 'd3', name: 'Engineering' }
];

// Numbers array (e.g., employee numbers)
export const numbers = [1001, 1002, 1003, 1004, 1005, 1006];

export const users = [
  { id: 'u1', name: 'Alice', email: 'alice@example.com', balance: 5000 },
  { id: 'u2', name: 'Bob', email: 'bob@example.com', balance: 3000 },
  { id: 'u3', name: 'Charlie', email: 'charlie@example.com', balance: 7000 },
]
export const orders = [
  { id: 'o1', userId: 'u1', stock: 'AAPL', quantity: 10, price: 150 },
  { id: 'o2', userId: 'u2', stock: 'GOOGL', quantity: 5, price: 2800 },
  { id: 'o3', userId: 'u1', stock: 'TSLA', quantity: 2, price: 700 },
  { id: 'o4', userId: 'u3', stock: 'AMZN', quantity: 1, price: 3400 },
]

export const trades = [
  { id: 't1', orderId: 'o1', timestamp: '2024-10-12T10:00:00Z', status: 'completed' },
  { id: 't2', orderId: 'o2', timestamp: '2024-10-12T11:00:00Z', status: 'pending' },
  { id: 't3', orderId: 'o3', timestamp: '2024-10-12T12:00:00Z', status: 'completed' },
  { id: 't4', orderId: 'o4', timestamp: '2024-10-12T13:00:00Z', status: 'failed' },
];
