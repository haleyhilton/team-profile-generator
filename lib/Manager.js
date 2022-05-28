class Manager extends Employee {
    //also include  officeNumber
//getRole() overridden to return Manager  
constructor(name, id, email, github){
    super(name, id, email)
    this.officeNumber = officeNumber
}

getOfficeNumber() {
    return this.officeNumber
}
getRole () {
    return "Engineer"
}
}