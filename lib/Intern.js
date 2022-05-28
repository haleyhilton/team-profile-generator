class Intern extends Employee {
//also include school
//getSchool()
//getRole() overridden to return Intern  
constructor(name, id, email, github){
    super(name, id, email)
    this.school = school
}

getSchool() {
    return this.school
}
getRole () {
    return "Intern"
}
}  
