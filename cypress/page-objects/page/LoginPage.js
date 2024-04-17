import BasePage from "./BasePage"

class LoginPage extends BasePage {

    get usernameField(){
        return cy.get("[id = user-name]")
    }
    get passwordField(){
        return cy.get("[id = password]")
    }
    get loginButton(){
        return cy.get("[id = login-button]")
    }

    open() {
        super.open('');
    }

    login(userName, password) {
        this.usernameField.type(userName);
        this.passwordField.type(password);
        this.loginButton.click();
    }

    clickLoginButton() {
        this.loginButton.click();
    }

};

export default new LoginPage();