const Engineer = require('../lib/Engineer')

const testName = "Michael Scott"
const testEmail = "ms@gmail.com"
const testID = "1234"
const testGithub = "michaelSCOTT1"


test("Engineer github to return test github", () => {
        const engineer = new Engineer(testName, testEmail, testID, testGithub);
        expect(engineer.github).toBe(expect.any(String));

    });

    test("engineer.getGithub function returns correct github", () => {
        const engineer = new Engineer(testName, testEmail, testID, testGithub);
        expect(engineer.getGithub()).toBe(testGithub);
    });

    test("engineer.getRole will assign and return Engineer", () => {
        const engineer = new Engineer(testName, testEmail, testID, testGithub);
        expect(engineer.getRole()).toBe("Engineer");
    });
