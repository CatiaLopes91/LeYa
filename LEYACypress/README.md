# Cypress Project

# Installing

1 - Install Node.js (https://nodejs.org/en/download)  
2 - Clone project  
3 - Open the terminal on VS Code and install the dependencies about project (npm install)  


# Running

1 - Open the terminal on VS Code   
### Interactive mode  
    - npx cypress open 

- The cypress tools is opened and you need to choose E2E Testing

- You can choose a browser

- You can see the test cases into the TestCases directory, Click to run

### Terminal mode  
    - npx cypress run     
 



#Notes

I made some decisions related to specification of test cases:
We have some words like "Quinta Manor.",  "1984.", "George Orwell.",  "9789722071550.", "344." , "235 x 157 x 23 mm." that have the . after the word. The webSite don't have the . after the values. So in my Scripts I validate the words without . ("Quinta Manor",  "1984", "George Orwell" ... ).

On a real situation before I start my test development I will validate with the person that wright the test cases, in this case I made the decision to delete the point.

In scenario 3 the book "A Quinta dos Animais" dosn't exists on the system, I did the test development with this book, so because of that the test status is failed.  

