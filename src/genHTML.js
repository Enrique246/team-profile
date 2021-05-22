// Manager card builder
const genManager = function (man) {
    return `
    <div class= "col-4 mt-4 " >
    <div class="card h-100">
        <div class="card-header bg-success text-white">
        <h4>${man.name}</h4>
        <h5>Manager&nbsp;&nbsp;<i class="fas fa-fingerprint"></i></h5>
        </div>

        <div class="card-body bg-light text-black">
            <p class="id">Id: ${man.id}</p>
            <p class="email">Email: <a href="mail-to:${man.email}">${man.email}</a></p>
            <p class="officeNum">Office Number: ${man.officeNumber}</p>
        </div>
    </div>
    </div>    `;
}

//Engineer card builder
const genEngineer = function (engineer) {
    return `
    <div class= "col-4 mt-4" >
    <div class="card h-100">
        <div class="card-header bg-success text-white">
        <h4>${engineer.name}</h4>
        <h5>Engineer&nbsp;&nbsp;<i class="fas fa-tools"></i></h5>
        </div>

        <div class="card-body bg-light text-black">
            <p class="id">Id: ${engineer.id}</p>
            <p class="email">Email: <a href="mail-to:${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>
        </div>
        </div>
    `;
}

//Engineer card builder
const genIntern = function (intern) {
    return `
    <div class= "col-4 mt-4" >
    <div class="card h-100">
        <div class="card-header bg-success text-white">
        <h4>${intern.name}</h4>
        <h5>Intern&nbsp;&nbsp;<i class="fas fa-baby"></i></h5>
        </div>

        <div class="card-body bg-light text-black">
            <p class="id">Id: ${intern.id}</p>
            <p class="email">Email: <a href="mail-to:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
            </div>
        </div>
        </div>

    `;
};

//Sending array to page
genHTML = (data) => {
    pArray =[];

    for (let i = 0; i < data.length; i++) {
        const emp = data[i];
        const role = emp.getRole(); 
    

    // Call for manager function
    if (role=== "Manager"){
        const manCard = genManager(emp);
        pArray.push(manCard);
    }
    // Call for Engineer function
    if (role === "Engineer")    {
        const engiCard = genEngineer(emp);
        pArray.push(engiCard);
    }
    // Call for Intern function
    if (role === "Intern")    {
        const intCard = genIntern(emp);
        pArray.push(intCard);
    }
}
const empCards=pArray.join("")

//Show elements to generated page
const genTeam = newTeamPage (empCards)
return genTeam;

}

// Build HTML page
const newTeamPage = function (empCards){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />

    <link rel="stylesheet" href="style.css">

</head>
<body>
    <header>
    <nav class ="navbar"> 
    <span class = "mb-0 h1 w-100 text-center bg-primary text-white nav-text">Team Profile
    </span>
    </nav>
    </header>

    <section> 
    <div class="box">
              <div class="row justify-content-center">
                  <!--Finished Cards-->
                  ${empCards}
              </div>
          </div>
    </section>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

</html>
    `
}

module.exports = genHTML;