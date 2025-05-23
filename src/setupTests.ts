import "@testing-library/jest-dom";

class IntersectionObserverMock {
  constructor(callback: any, options?: any) {}

  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});
