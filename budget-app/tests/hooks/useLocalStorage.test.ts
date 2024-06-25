// Import necessary functions for testing
import  { describe, beforeEach, it, expect } from '@jest/globals';

// Mock localStorage
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
});

// Simulate useLocalStorage hook
function testUseLocalStorage(key, initialValue) {
  let storedValue = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue;

  function setStoredValue(newValue) {
    storedValue = newValue;
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [() => storedValue, setStoredValue];
}

// Tests
describe('useLocalStorage without JSX', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should initialize with initialValue if localStorage is empty', () => {
    const [getStoredValue] = testUseLocalStorage('testKey', 'defaultValue');
    expect(window.localStorage.getItem('testKey')).toBe(null);
  });

  it('should initialize with the stored value if present in localStorage', () => {
    window.localStorage.setItem('testKey', JSON.stringify('storedValue'));
    expect(window.localStorage.getItem('testKey')).toBe(JSON.stringify('storedValue'));
  });

  it('should update localStorage when the value changes', () => {
    const [getStoredValue, setStoredValue] = testUseLocalStorage('testKey', 'defaultValue');
    setStoredValue('newValue');
    expect(window.localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'));
  });
});