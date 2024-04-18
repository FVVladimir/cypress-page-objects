import ItemPage from "../page-objects/page/ItemPage";
import InventoryPage from "../page-objects/page/InventoryPage";

describe("item page tests", () => {
    beforeEach(() => {        
        InventoryPage.open("inventory.html")
        InventoryPage.clickItemByIndex(4)
        cy.url().should("eq","https://www.saucedemo.com/inventory-item.html?id=2")

    })

    it("test main elements should be visible on the item page", () => {
        ItemPage.itemImg.should("be.visible")
        ItemPage.itemDiscribe.should("be.visible")
        ItemPage.itemName.should("be.visible")
        ItemPage.itemPrice.should("be.visible")
    })

    it("check to click on the button add to cart appear button remove and click to button remove appear button faa to cart", () => {
       ItemPage.buttonAddToCart.click()
       ItemPage.buttonRemove.should("be.visible")
       ItemPage.buttonRemove.click()
       ItemPage.buttonAddToCart.should("be.visible")
    })
    
})