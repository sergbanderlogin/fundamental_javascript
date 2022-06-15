const multiplay = require("./app");

// it("перевіряємо 2 * 2 дорівнює 4", () => {
//   expect(multiplay(2, 2)).toBe(4);
// });

describe("testing app.js", () => {
  it("перевіряємо 2 * 2 дорівнює 4", () => {
    expect(multiplay(2, 2)).toBe(4);
  });
it("перевіряємо якщо аргументи не передано то повернеться нуль", () => {
  expect(multiplay()).toBe(0);
});
});
