const Eng = require('../lib/Engineer');

it('Builds an engineer object', () => {
    const eng = new Eng('Enrique', 28, 'enrique@gmail.com', 'enrique245')

    expect(emp.gitHub).toEqual(expect.any(String));
});

it('Brings employee email', () => {
    const emp = new Eng('Enrique', 28, 'enrique@gmail.com','enrique245');
    expect (emp.getEmail()).toEqual(expect.stringContaining(emp.email.toString()));
});