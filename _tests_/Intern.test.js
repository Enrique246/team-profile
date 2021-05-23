const Int = require('../lib/Intern');

it('Builds intern object', () => {
    const int = new Int('Enrique', 28, 'enrique@gmail.com', 'Stanford')

    expect(int.school).toEqual(expect.any(String));
});

it('Brings intern school', () => {
    const int = new Int('Enrique', 28, 'enrique@gmail.com','Stanford');
    expect (int.getSchool()).toEqual(expect.stringContaining(int.school.toString()));
});

//Getting role
it('Brings intern role', () => {
    const int = new Int('Enrique', 28, 'enrique@gmail.com','Stanford');
    expect (int.getRole()).toEqual("Intern");
});