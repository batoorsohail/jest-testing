const capitalize = require("./capitalize");

test ('sohail should be Sohail', () => {
  expect(capitalize('sohail')).toBe('Sohail');
})