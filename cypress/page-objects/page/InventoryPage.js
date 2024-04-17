import LoginPage from "./LoginPage";
import BasePage from "./BasePage";

import userData from '../../fixtures/userData.json'

class InventoryPage extends BasePage {

    get dropDownMenu(){
        return cy.get('[data-test="open-menu"]')
    }
    get iconCard(){
        return cy.get('[data-test="shopping-cart-link"]')
    }
    
    get sortMenu(){
        return cy.get('[class="product_sort_container"]')
    }

    get sortSelect() {
        return cy.get('option')
    }

    get getAllItems(){
        return cy.get('[data-test="inventory-item-name"]')
        
    }


    open(){
        super.open('')
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword)
    }    

    clickItemByIndex(index){
         this.getAllItems.eq(index).click();
    } 

}

export default new InventoryPage();