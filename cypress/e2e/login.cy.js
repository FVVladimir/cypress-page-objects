
import LoginPage from "../page-objects/page/LoginPage"


describe('login on the page for test', () => {
 
  let userData;
    beforeEach(() => {
        cy.fixture('userData.json').then((data) => {
            userData = data;
        })
        LoginPage.open();
    }) 
 
    it('Login', () => {
      LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword);
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  })
})