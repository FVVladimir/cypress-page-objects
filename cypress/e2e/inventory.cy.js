
import InventoryPage from "../page-objects/page/InventoryPage";

describe("invenory page test", () => {
    
    beforeEach(() => {        
        InventoryPage.open("inventory.html");
    })

    it("check UI elements", () => {        
        InventoryPage.dropDownMenu.should("be.visible");
        InventoryPage.iconCard.should("be.visible");
        InventoryPage.sortMenu.should("be.visible");        
    })

    it("check a sort menu have length 4", () => {
        InventoryPage.sortSelect.should("have.length", 4);
    })

    it("check after click to cart switc a next page", () => {
        InventoryPage.iconCard.click();
        cy.url().should("eq","https://www.saucedemo.com/cart.html")        
    })
    
    it("click on item by index and swith on page this item", () => {        
        InventoryPage.clickItemByIndex(4)
        cy.url().should("eq","https://www.saucedemo.com/inventory-item.html?id=2")       
    })
})