## RS Testing Role assignment ##

*Sponsored by Leroy Nimley*


**Purpose** 
To create a page object model framework which has 5 automation tests written in a BDD format which demonstrate
 key journeys from the homepage to the purchase page for the RS Website - http://uk.rs-online.com/web/.

2x – End to End Test – Homepage to checkout (do not purchase)  
3x – Search filter results page Test

### Search Tests ###
- Search for RS Stock No "909-8132"  
  check  Mfr. Part No. "ABCU-5740ARZ" returned   
- Search for RS Stock No "896-8660"  
  check  Mfr. Part No. "Raspberry Pi 3 Model B" returned
- Search for description "Heat Shrinkable Sleeving"  
  select RS Stock No "2508886773"  
  check  Mfr. Part No. "FP221 1/2 CLEAR 4'" returned

### Checkout Tests ###
- Search for RS Stock No "818-8767"  
  Change Quantity to "2"  
  Add to basket  
  Select Checkout  
  Fill in customer details

- Search for RS Stock No "xxxx"  
  Change Quantity to "4"  
  Add to basket  
  Select Checkout  
  Fill in customer details

### Running the tests ###

From the project folder run:
> mvn test

or in IntelliJ run the "RunCukesTest.java" class



#### Author ####
David Smith

0793 960 3892

dave.k.smith@btinternet.com
