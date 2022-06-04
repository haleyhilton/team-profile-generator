const Manager = require('../lib/Manager')
const testName = "Michael Scott"
const testEmail = "ms@gmail.com"
const testID = "1234"
const testOfficeNumber = "858-999-9999"

test("manager.officeNumber returns and returns office number", () => {
    const manager = new Manager(testName, testID, testEmail, testOfficeNumber);
    expect(manager.officeNumber).toBe(testOfficeNumber);
});

test("manager.getRole will assign and return Manager", () => {
    const manager = new Manager(testName, testID, testEmail, testOfficeNumber);
    expect(manager.getRole()).toBe("Manager");
});