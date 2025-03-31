
// Utility to mock a DOM container for testing
export function createMockAppContainer(): HTMLElement {
    const container = document.createElement("div");
    container.id = "app";
    document.body.appendChild(container);
    return container;
  }
  
  // Utility to reset DOM between tests
  export function resetDOM(): void {
    document.body.innerHTML = "";
  }
  