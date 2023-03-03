const employee = require("./Employee");

class engineer extends employee {
    constructor(github, name, id, email) {
        super(name, id, email)
        this.github = github;
    }
        getGithub() {
            return this.github;
        }

        getRole() {
            return "Engineer";
        }

}

module.exports = engineer;