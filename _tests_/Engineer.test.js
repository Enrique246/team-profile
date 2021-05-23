const Eng = require('../lib/Engineer');

it('Builds engineer object', () => {
    const eng = new Eng('Enrique', 28, 'enrique@gmail.com', 'enrique245')

    expect(eng.gitHub).toEqual(expect.any(String));
});

it('Brings engineer Github', () => {
    const eng = new Eng('Enrique', 28, 'enrique@gmail.com','enrique245');
    expect (eng.getGitHub()).toEqual(expect.stringContaining(eng.gitHub.toString()));
});

//Getting role
it('Brings engineer role', () => {
    const eng = new Eng('Enrique', 28, 'enrique@gmail.com','enrique245');
    expect (eng.getRole()).toEqual("Engineer");
});
