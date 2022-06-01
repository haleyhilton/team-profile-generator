const Engineer = require('../lib/Engineer')
const testName = "Michael Scott"
const testEmail = "ms@gmail.com"
const testID = "1234"


test("Engineer object created", () => {
        const engineer = new Engineer("Michael Scott", 45, "ms@gmail.com", "michaelSCOTT1");
        expect(engineer.github).toEqual(expect.any(String));

    });

    test("engineer.getGithub returns and parses string input", () => {
        const engineer = new Engineer("Michael Scott", 45, "ms@gmail.com", "michaelSCOTT1");
        expect(engineer.github).toEqual(expect.any(String));
    });

    test("engineer.getRole will assign and return Engineer", () => {
        const engineer = new Engineer("Michael Scott", 45, "ms@gmail.com", "michaelSCOTT1");
        expect(engineer.getRole()).toEqual("Engineer");
    });
