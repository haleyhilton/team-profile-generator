function createHTML(data) {

   
    const createManager = function (manager) {
        return `
        <div class="card">
        <div class = "top">
            ${manager.name} <br>
            Manager
        </div>
        <div class="bottom">
            <body>
                <div class = "details" style = "margin-top: 10px;">
                    ID: ${manager.id}
                </div>
                <div class = "details">
                    Email: <a href="${manager.email}">${manager.email}</a>
                </div>
                <div class = "details">
                    Office Number: ${manager.officeNumber}
                </div>
            </body>
        </div>
        </div>
    `
    }
    
    const createIntern = function (intern) {
        return `
        <div class="card">
        <div class = "top">
            ${intern.name} <br>
            Intern
        </div>
        <div class="bottom">
            <body>
                <div class = "details" style = "margin-top: 10px;">
                    ID: ${intern.id}
                </div>
                <div class = "details">
                    Email: <a href="${intern.email}">${intern.email}</a>
                </div>
                <div class = "details">
                    School: ${intern.school}
                </div>
            </body>
        </div>
        </div>
    `
    }
    
    const createEngineer = function (engineer) {
        return `
        <div class="card">
        <div class = "top">
            ${engineer.name} <br>
            Engineer
        </div>
        <div class="bottom">
            <body>
                <div class = "details" style = "margin-top: 10px;">
                    ID: ${engineer.id}
                </div>
                <div class = "details">
                    Email: <a href="${engineer.email}">${engineer.email}</a>
                </div>
                <div class = "details">
                    Github: <a href="github.com/${engineer.github}">${engineer.github}</a>
                </div>
            </body>
        </div>
        </div>
    `
    }
    
    
    htmlGen  = (data) => {
        cardArray = [];
        for (let i=0; i<data.length; i++){
            console.log(i, data[i])
            const employee = data[i]
            const role = employee.getRole()
    
            if (role === "Manager"){
                managerCard = createManager(employee)
    
                cardArray.push(managerCard)
            }
            if (role === "Intern"){
                internCard = createIntern(employee)
    
                cardArray.push(internCard)
            }
            if (role === "Engineer"){
                engineerCard = createEngineer(employee)
    
                cardArray.push(engineerCard)
            }
        }
        const cards = cardArray.join("")
        const HTML = pageGen(cards)
        return HTML
    
    }
    
    const pageGen = function(cards) {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script type="text/javascript" 
            src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js">
            </script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="./style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <header>
                <nav>
                    <span class="col-12" >Team Profile</span>
                </nav>
            </header>
            <main>
                <div class="container">
                    ${cards}
                </div>
            </main>
            
        </body>
        </html>
      `
    }
    
    
}

module.exports = createHTML