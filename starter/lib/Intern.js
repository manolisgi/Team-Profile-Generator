const employee = require("./Employee");

class intern extends employee {
    constructor(school, name, id, email) {
        super(name, id, email)
        this.school = school;
    }
        getSchool() {
            return this.school;
        }

        getRole() {
            return "Intern";
        }

}

module.exports = intern;