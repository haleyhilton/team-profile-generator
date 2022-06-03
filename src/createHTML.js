function createHTML(employeeList) {
    let employeeCards = ""
    for (let e of employeeList) {
    let card = `   <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${e.name}</h5>
      <p class="card-text"></p>
    </div>
  </div>` //bootstrap formatting 
    employeeCards += card;
    }
   const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
    ${employeeCards}

    </body>
    </html>
    `
    return html
}

module.exports = createHTML