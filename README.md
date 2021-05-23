## Homework 10

## Team Profile Generator
### Description
- What was your motivation?
  - Learning to build a complete app with test verification as a feature.
- Why did you build this project?  
  - To undesterstand how html, test nad java script connect to get a working app.
- What problem does it solve?
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
- What did you learn?
  - File system in Node.js
  - Npm installing
  - Jest usage and editing of package
  - Inquirer usage of package
  - How incredible is the module exporting property
  - How to generate various HTMLs with template literals each
  - Using contructors
  - Module exporting
  - Building TDD
  - Building profiles from a class

### Lenguages Required:
- Node.js
- JavaScript
- HTML
- Jest package
- Inquirer
- CSS

## Usage

[Watch Video](https://drive.google.com/file/d/1-NXs_TK8IgSLudiFq8e8ed16WxSWqTNy/view)

## Resources
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
- https://www.npmjs.com/package/inquirer
- https://stackoverflow.com/questions/48857545/how-can-i-avoid-no-test-specified-errors-in-npm


## Credits
- Enrique Del Castillo Chávez

## Tests
- Test all passed
- GenHTML generates the proper HTML
- Icons appear
- Credentials appear
- Prompts work
- Module exports work
- Constructors work depending on the input and the profile
- HTML style works
