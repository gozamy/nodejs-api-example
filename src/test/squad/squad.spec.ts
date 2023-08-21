// This commands loads the mocked request.js as defined in __mocks__/request.js
jest.mock("../request");

describe("Add two numbers", () => {
  it("should equal 3", () => {
    expect(1 + 2).toEqual(3);
  });
});
