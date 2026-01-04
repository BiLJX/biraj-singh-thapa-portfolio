// Polyfill must run synchronously before any imports
if (typeof window === 'undefined' && typeof globalThis !== 'undefined') {
  const storage: { [key: string]: string } = {};
  
  const mockStorage: Storage = {
    getItem: (key: string) => storage[key] || null,
    setItem: (key: string, value: string) => { storage[key] = value; },
    removeItem: (key: string) => { delete storage[key]; },
    clear: () => { Object.keys(storage).forEach(key => delete storage[key]); },
    key: (index: number) => Object.keys(storage)[index] || null,
    get length() { return Object.keys(storage).length; },
  };

  // Force define localStorage before anything else loads
  Object.defineProperty(globalThis, 'localStorage', {
    value: mockStorage,
    writable: true,
    configurable: true,
  });
}

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side polyfill is already loaded above
  }
}
