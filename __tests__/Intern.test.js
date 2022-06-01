const Employee = require('../lib/Employee')
const testName = "Michael Scott"
const testEmail = "ms@gmail.com"
const testID = "1234"


test("Employee object created", () => {
        const e = new Employee(testName, testEmail, testID);
    });

    test("e.getName will set name", () => {
        const name = "Michael Scott";
        const e = new Employee(testName, testEmail, testID);
        expect(e.getName()).toEqual(testName);
    });

    test("e.getID will return any input number", () => {
        const e = new Employee(testName, testEmail, testID);
        expect(e.getId()).toEqual(testID);
    });

    test("e.getEmail will set email string", () => {
        const e = new Employee(testName, testEmail, testID);
        expect(e.getEmail()).toEqual(testEmail);
    });

    test("e.getRole will assign and return Employee", () => {
        const e = new Employee(testName, testEmail, testID);
        expect(e.getRole()).toEqual("Employee");
    });
