package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RS_BasketPage {

	public WebDriver driver;

	@FindBy(xpath = "//*[@id='checkoutSecurelyAndPuchBtn']") private WebElement checkout;

	public RS_BasketPage(WebDriver driver){ // Class constructor
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void checkout_basket() {
		checkout.click();
	}

}