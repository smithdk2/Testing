package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RS_Checkout {

	public WebDriver driver;
	private String parentHandle="";
	@FindBy(className="cartInput") private WebElement orderQuantity;
	@FindBy(xpath="//input[@class='cartButton']") private WebElement cartButton;
	@FindBy(xpath="/html/body/div[6]/div[1]/div[1]/div[2]/div[5]/form/span[1]/div[2]/div[1]/div[1]/a/span") private WebElement viewButton;

	public RS_Checkout(WebDriver driver){ // Class constructor
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void make_the_quantity(String quantity) {
		orderQuantity.clear();
		orderQuantity.sendKeys(quantity);
	}

	public void add_to_cart() {
		this.parentHandle = driver.getWindowHandle();
		cartButton.click();
	}

	public void view_basket() {
		viewButton.click();
	}

}