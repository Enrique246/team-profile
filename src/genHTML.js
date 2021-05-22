// Manager card builder
const genManager = function (man) {
    return `
    <div class= "card bg-success text-white m-2" >
        <div class="card-header">
        <h4>${man.name}</h4>
        <h5>Manager</h5><i class="material-icons">content_paste></i>
        </div>

        <div class="card-body">
            <p class="id">Id: ${man.id}</p>
            <p class="email">Email: <a href="mail-to:${man.email}">${man.email}</a></p>
            <p class="office">Office Number: ${man.officeNumber}</p>
    </div>
    `;
}