const renderTeam = team => {
    const renderManager = manager => {
      return `<div class="mainCard">
      <div class="card employee-card p-3 m-2">
        <div class="card-header mColor text-white">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
    </div>`;
    }
  
    const renderEngineer = engineer => {
      return `<div class="mainCard">
      <div class="card employee-card p-3 m-2">
        <div class="card-header eColor text-white">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
        </div>
      </div>
    </div>`;
    }
  
    const renderIntern = intern => {
      return `<div class="mainCard">
      <div class="card employee-card p-3 m-2">
        <div class="card-header iColor text-white">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>
    </div>`;
    }
  
    const html = [];
  
    html.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => renderManager(manager))
    );
    html.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => renderEngineer(engineer))
      .join("")
    );
    html.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => renderIntern(intern))
      .join("")
    );
  
    return html.join("");
  
  }
  
  module.exports = team => {
    return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
        <title>Team Profile Generator</title>
      </head>
      <style>
      .bg-color {
        background-color: #2D4059;
      }
    
      .mColor {
        background-color: #cc7a7a;
      }
    
      .eColor {
        background-color: #d1906f;
      }
    
      .iColor {
        background-color: #838d99;
      }
    
      .mainCard{
        width: 33.33%;
      }
    
      @media screen and (max-width: 626px) {
        .mainCard{
        width: 100%;
      }
      }
      </style>
      
      <body>
      
        <div class="jumbotron bg-color p-4">
          <div class="container text-center text-white">
            <h1>Team Profile Generator</h1>
            <p>information about employees on a software engineering team.</p>
          </div>
        </div>
      
        <div class="container">
          <div class="row p-3">
            <div class="team-area col-12 d-flex flex-wrap justify-content-center">
              ${renderTeam(team)}
            </div>
          </div>
        </div>
        <div class="bg-color mt-2 p-3 text-center  text-white">
          <p>Developed by</p>
          <h5>manolisgi</h5>
        </div>
      
      </body>
      
      </html>`;
  }