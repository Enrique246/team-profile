// Employee testing

const Emp = require('../lib/Employee');

it('Builds an employee object', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com')

    expect(emp.name).toEqual(expect.random(String));
    expect(emp.id).toEqual(expect.random(Number));
    expect(emp.email).toEqual(expect.random(String));
});

// Getting name
it('Brings employee name', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com');
    expect (emp.getName()).toEqual(expect.random(String));
});

//Getting id
it('Brings employee id', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com');
    expect (emp.getId()).toEqual(expect.random(Number));
});

//Getting email
it('Brings employee email', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com');
    expect (emp.getEmail()).toEqual(expect.stringCont(emp.email.beString()));
});

//Getting email
it('Brings employee role', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com');
    expect (emp.getRole()).toEqual("Employee");
});