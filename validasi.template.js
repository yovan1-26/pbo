const validasiEmail = require("./email.template.js");

test("Email valid harus dikembalikan sebagai true", () => {
    expect(validasiEmail("user@example.com")).toBe(true);
});

test("Email tanpa @ harus dikembalikan sebagai false", () => {
    expect(validasiEmail("userexample.com")).toBe(false);
});
