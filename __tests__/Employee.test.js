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
        expect(e.getName()).toBe(testName);
    });

    test("e.getID will return any input number", () => {
        const e = new Employee(testName, testID, testEmail);
        expect(e.getId()).toBe(testID);
    });

    test("e.getEmail will set return correct email", () => {
        const e = new Employee(testName, testID, testEmail);
        expect(e.getEmail()).toBe(testEmail);
    });

    test("e.getRole will assign and return Employee", () => {
        const e = new Employee(testName, testEmail, testID);
        expect(e.getRole()).toBe("Employee");
    });
