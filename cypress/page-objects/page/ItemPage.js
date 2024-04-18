import LoginPage from "./LoginPage";
import InventoryPage from "./InventoryPage";
import BasePage from "./BasePage";

import userData from '../../fixtures/userData.json'

class ItemPage extends BasePage {

   get itemImg(){
       return cy.get('[data-test="item-sauce-labs-onesie-img"]')
   }
   get itemDiscribe(){
    return cy.get('[data-test="inventory-item-desc"]')
   }
   get itemName(){
    return cy.get('[data-test="inventory-item-name"]')
    
   }
   get itemPrice(){
    return cy.get('[data-test="inventory-item-price"]')
     
   }

   get buttonAddToCart(){
    return cy.get('[data-test="add-to-cart"]')
   }
   get buttonRemove(){
    return cy.get('[data-test="remove"]')
   }

   open(){
    super.open('')
    LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword)
}

}

export default new ItemPage();