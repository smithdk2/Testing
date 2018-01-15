package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.FindBy;

public class RS_SearchPage {

	public WebDriver driver;
	
	@FindBy(name="searchTerm") private WebElement criteria;
	@FindBy(className = "new-search-btn") private WebElement searchButton;
	@FindBy(xpath = "//span[@itemprop='mpn']") private WebElement searchResult;
	@FindBy(linkText="2508886773") private WebElement selectLink;

	public RS_SearchPage(WebDriver driver){ // Class constructor
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void enterSearchCriteria(String criteriaString) {
		criteria.sendKeys(criteriaString);
	}
	
	public void pressSearchButton() {
		searchButton.click();
	}

	public void select(String itemCode) {
		selectLink.click();
	}

	public boolean getSearchResult(String expectedText) {
		return searchResult.getText().equals(expectedText);
	}
}