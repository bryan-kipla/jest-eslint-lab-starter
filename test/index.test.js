const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
  test('capitalizes the first letter of each word in a string', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('javascript is fun')).toBe('Javascript Is Fun');
  });

  test('throws an error for non-string input', () => {
    expect(() => capitalizeWords(123)).toThrow('Input must be a string.');
  });
});

describe('filterActiveUsers', () => {
  test('filters users with active status true', () => {
    const users = [
      { name: 'Alice', active: true },
      { name: 'Bob', active: false },
      { name: 'Charlie', active: true }
    ];
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', active: true },
      { name: 'Charlie', active: true }
    ]);
  });

  test('throws an error for non-array input', () => {
    expect(() => filterActiveUsers('not an array')).toThrow('Input must be an array.');
  });
});

describe('logAction', () => {
  test('logs the action to the console', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    logAction('User logged in');
    expect(consoleSpy).toHaveBeenCalledWith('Action logged: User logged in');
    consoleSpy.mockRestore();
  });
});
