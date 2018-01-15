package steps;

import cucumber.api.java.en.Then;
import pages.RS_BasketPage;
import pages.RS_Checkout;
import pages.RS_OrderPage;
import runsupport.DriverFactory;

public class CheckoutSteps extends DriverFactory{
	private RS_Checkout checkoutPage;

	@Then("^I make the quantity \"([^\"]*)\"$")
	public void i_make_the_quantity(String quantity) {
		this.checkoutPage = new RS_Checkout(driver);
		this.checkoutPage.make_the_quantity(quantity);
	}

	@Then("^I click the add to cart button$")
	public void i_click_the_add_to_cart_button() {
		this.checkoutPage.add_to_cart();
	}

	@Then("^I select view basket$")
	public void i_select_view_basket()  {
		this.checkoutPage.view_basket();
	}

	@Then("^I checkout basket$")
	public void i_checkout_basket()  {
		new RS_BasketPage(driver).checkout_basket();
	}

	@Then("^I complete order$")
	public void i_complete_order()  {
		new RS_OrderPage(driver).completeOrder();
	}

}

