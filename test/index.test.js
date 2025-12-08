const { capitalizeWords, filterActiveUsers, logAction } = require('../index');


test('capitalizeWords should capitalize each word', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
});


test('filterActiveUsers should return only active users', () => {
  const users = [
    { name: 'John', isActive: true },
    { name: 'Adam', isActive: false }
  ];
  const result = filterActiveUsers(users);
  expect(result.length).toBe(1);
  expect(result[0].name).toBe('John');
});

// Test 3: Correct log string format
test('logAction generates correct log string for valid inputs', () => {
  const result = logAction('login', 'John');
  // Has the right structure
  expect(result).toContain('User John performed login at ');
  // Has a timestamp
  expect(result.split(' at ')[1]).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
});

// Test 4: Edge cases - empty strings
test('logAction handles empty strings as inputs', () => {
  const result1 = logAction('', 'John');
  expect(result1).toContain('User John performed  at ');
  
  const result2 = logAction('login', '');
  expect(result2).toContain('User  performed login at ');
});

// Test 5: Edge cases - missing parameters
test('logAction handles missing action or username', () => {
  const result1 = logAction(undefined, 'John');
  expect(result1).toContain('User John performed undefined at ');
  
  const result2 = logAction('login', undefined);
  expect(result2).toContain('User undefined performed login at ');
});


