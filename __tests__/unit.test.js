// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// matches valid phone numbers
test('validates (123)456-7892 as a phone number', () => {
    expect(functions.isPhoneNumber("(123)456-7892")).toBe(true);
});

test('validates (650)504-1049 as a phone number', () => {
    expect(functions.isPhoneNumber("(650)504-1049")).toBe(true);
});

test('invalidates 9875 as a phone number', () => {
    expect(functions.isPhoneNumber("9875")).toBe(false);
});

test('invalidates 8756015278058354 as a phone number', () => {
    expect(functions.isPhoneNumber("8756015278058354")).toBe(false);
});

// matches valid emails
test('validates ebushnel@ucsd.edu as an email', () => {
    expect(functions.isEmail("ebushnel@ucsd.edu")).toBe(true);
});

test('validates elisebushnell@gmail.com as an email', () => {
    expect(functions.isEmail("elisebushnell@gmail.com")).toBe(true);
});

test('invalidates fake@a as an email', () => {
    expect(functions.isEmail("fake@a")).toBe(false);
});

test('invalidates @gmail.com as an email', () => {
    expect(functions.isEmail("@gmail.com")).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
test('validates lovely as a strong password', () => {
    expect(functions.isStrongPassword("lovely")).toBe(true);
});

test('validates awful as a strong password', () => {
    expect(functions.isStrongPassword("awful")).toBe(true);
});

test('invalidates lly as a strong password', () => {
    expect(functions.isStrongPassword("lly")).toBe(false);
});

test('invalidates i as a strong password', () => {
    expect(functions.isStrongPassword("i")).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where 
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('validates 12/22/2222 as a date', () => {
    expect(functions.isDate("12/22/2222")).toBe(true);
});

test('validates 1/22/2222 as a date', () => {
    expect(functions.isDate("1/22/2222")).toBe(true);
});

test('invalidates 12/22/222 as a date', () => {
    expect(functions.isDate("12/22/222")).toBe(false);
});

test('invalidates /22/2222 as a date', () => {
    expect(functions.isDate("/22/2222")).toBe(false);
});


// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('validates abc as a hex color', () => {
    expect(functions.isHexColor("#abc")).toBe(true);
});

test('validates ABC as a hex color', () => {
    expect(functions.isHexColor("#ABC")).toBe(true);
});

test('invalidates HFEDCJD as a hex color', () => {
    expect(functions.isHexColor("#HFEDCJD")).toBe(false);
});

test('invalidates D as a hex color', () => {
    expect(functions.isHexColor("#D")).toBe(false);
});
