const Manager = require('../lib/Manager')
const testName = "Michael Scott"
const testEmail = "ms@gmail.com"
const testID = "1234"


test("Manager object created", () => {
    const manager = new Manager("Michael Scott", 45, "ms@gmail.com", "michaelSCOTT1");
    expect(manager.github).toBe(expect.any(String));

});

test("manager.getGithub returns and parses string input", () => {
    const manager = new Manager("Michael Scott", 45, "ms@gmail.com", "michaelSCOTT1");
    expect(manager.github).toBe(expect.any(String));
});

test("manager.getRole will assign and return Manager", () => {
    const manager = new Manager("Michael Scott", 45, "ms@gmail.com", "michaelSCOTT1");
    expect(manager.getRole()).toBe("Manager");
});