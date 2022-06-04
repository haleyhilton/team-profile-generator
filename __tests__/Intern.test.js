const Intern = require('../lib/Intern')
const testName = "Michael Scott"
const testEmail = "ms@gmail.com"
const testID = "1234"
const testSchool = "UCSD"


test("Employee object created", () => {
        const intern = new Intern(testName, testID, testEmail, testSchool);
        expect(intern.school).toEqual(testSchool)
    });

    test("intern.getGithub returns email", () => {
        const intern = new Intern(testName, testID, testEmail, testSchool);
        expect(intern.email).toEqual(testEmail);
    });

    test("engineer.getRole will assign and return Intern", () => {
        const intern = new Intern(testName, testEmail, testID, testSchool);
        expect(intern.getRole()).toBe("Intern");
    });
