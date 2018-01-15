package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public class RS_OrderPage {

	public WebDriver driver;

	@FindBy(xpath="//input[@id='guestCheckoutForm:GuestWidgetAction_emailAddress_decorate:GuestWidgetAction_emailAddress']") private WebElement emailAddress;
	@FindBy(xpath="//input[@id='guestCheckoutForm:guestCheckout']") private WebElement guestCheckout;
	@FindBy(xpath="//input[@id='deliveryCollectionForm:CustomerContactDetailsWidgetAction_firstName_decorate:CustomerContactDetailsWidgetAction_firstName']") private WebElement firstName;
	@FindBy(xpath="//input[@id='deliveryCollectionForm:CustomerContactDetailsWidgetAction_surName_decorate:CustomerContactDetailsWidgetAction_surName']") private WebElement surName;
	@FindBy(xpath="//input[@id='deliveryCollectionForm:CustomerContactDetailsWidgetAction_contactNumber_decorate:CustomerContactDetailsWidgetAction_contactNumber']") private WebElement contactNumber;
	@FindBy(xpath="//input[@id='deliveryCollectionForm:GuestDeliveryAddressWidgetAction_companyNameOne_decorate:GuestDeliveryAddressWidgetAction_companyNameOne']") private WebElement companyNameOne;

	public RS_OrderPage(WebDriver driver){ // Class constructor
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void completeOrder() {
		emailAddress.sendKeys("dave.k.smith@btinternet.com");
		guestCheckout.click();
		firstName.sendKeys("David");
		surName.sendKeys("Smith");
		contactNumber.sendKeys("07939603892");
		companyNameOne.sendKeys("David Smith");
		driver.manage().timeouts().implicitlyWait(10,    TimeUnit.SECONDS);

}

}