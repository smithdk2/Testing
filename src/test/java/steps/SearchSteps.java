package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.RS_SearchPage;
import runsupport.DriverFactory;

public class SearchSteps extends DriverFactory{
	
	@Given("^I am on the RS home web page$")
	public void i_am_on_the_rs_home_web_page() throws Throwable {
		driver.get("https://uk.rs-online.com/web/");
	}

	@Given("^I search for \"([^\"]*)\"$")
	public void i_search_for(String criteria) throws Throwable {
		RS_SearchPage searchPage = new RS_SearchPage(driver);
		searchPage.enterSearchCriteria(criteria);
	}

	@When("^I click the search button$")
	public void i_click_the_search_button() throws Throwable {
	    new RS_SearchPage(driver).pressSearchButton();
	}

	@Then("^I should see \"([^\"]*)\"$")
	public void i_should_see(String resultText)  {
		RS_SearchPage searchPage = new RS_SearchPage(driver);
		Assert.assertTrue(searchPage.getSearchResult(resultText));
	}

	@When("^I select \"([^\"]*)\"$")
	public void i_select(String itemCode) throws Throwable {
		new RS_SearchPage(driver).select(itemCode);
	}
}

