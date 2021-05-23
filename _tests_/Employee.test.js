// Employee testing

const Emp = require('../lib/Employee');

it('Builds an employee object', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com')

    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toEqual(expect.any(String));
});

// Getting name
it('Brings employee name', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com');
    expect (emp.getName()).toEqual(expect.any(String));
});

//Getting id
it('Brings employee id', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com');
    expect (emp.getId()).toEqual(expect.any(Number));
});

//Getting email
it('Brings employee email', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com');
    expect (emp.getEmail()).toEqual(expect.stringContaining(emp.email.toString()));
});

//Getting role
it('Brings employee role', () => {
    const emp = new Emp('Enrique', 28, 'enrique@gmail.com');
    expect (emp.getRole()).toEqual("Employee");
});