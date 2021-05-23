const Man = require('../lib/Manager');

it('Builds manager object', () => {
    const man = new Man('Enrique', 28, 'enrique@gmail.com', 1234)

    expect(man.officeNumber).toEqual(expect.any(Number));
});

it('Brings manager office number', () => {
    const man = new Man('Enrique', 28, 'enrique@gmail.com',1234);
    expect (man.officeNumber).toEqual(expect.any(Number));
});

//Getting role
it('Brings manager role', () => {
    const man = new Man('Enrique', 28, 'enrique@gmail.com','Stanford');
    expect (man.getRole()).toEqual("Manager");
});