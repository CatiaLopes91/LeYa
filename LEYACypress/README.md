# Cypress Project

# Installing

1 - Install Node.js (https://nodejs.org/en/download)  
2 - Clone project  
3 - Open the terminal on VS Code and install the dependencies about project:   
            
            npm install
     


# Running

  Open the terminal on VS Code   

### Interactive mode  
     npx cypress open 

- The cypress tools is opened and you need to choose E2E Testing

- You can choose a browser

- You can see the test cases into the TestCases directory, Click to run

### Terminal mode  
     npx cypress run     
 
## Project Structure

**Some changes into e2e default Structure:**   

- **GenericFunctions:** In this Directory The file about genericFunctions.js have some functions that you can use in multiple test cases.  
- **Locators:** In this Locators The file about locators.json have selectores that you can use in in multiple test cases. And if some element need to be changed only need change into this file.  
- **TestCases:** In this Directory have all the test cases created.  


├── cypress/  
│ ├── e2e  
│ | ├── GenericFunctions  
│ | |   ├──genericFunctions.js  
│ | ├── Locators  
│ | |   ├──locators.json  
│ | ├── TestCases  



# Notes

**I made some decisions related to specification of test cases:**    

- We have some words like **"Quinta Manor.",  "1984.", "George Orwell.",  "9789722071550.", "344." , "235 x 157 x 23 mm."** that have the **.** after the word. The webSite don't have the **.** after the values. So in my Scripts I validate the words without **.** **("Quinta Manor",  "1984", "George Orwell" ... )**.

- On a real situation before I start my test development I will validate with the person that wright the test cases, in this case I made the decision to delete the **.** .

- In **scenario 3** the book **"A Quinta dos Animais" dosn't exists** on the system, I did the test development with this book, so because of that the test status is **failed**. 

# Aditional Scenario's

### **Scenario 6:**  
- Validate the category about "A Guerra dos Pobres" it's equal to "Romance"



### **Scenario 7:**  
- In the Livros menu validate if the filter "<10€" works correctly   
- Validate if the first 10 Books have the price <10€.


