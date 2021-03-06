# express-template

This is a terribly outdated repo that I never use and don't want to waste time fixing.

## How This Template Was Made

1. Initialize the node project

   - npm init

2. Install dependencies and devDevpendencies

   - npm install --save express cors body-parser
   - npm install --save-dev nodemon jest

3. Create the server file

   - touch server.js
   - input code included in the template.

4. Add basic routing

   - mkdir routes
   - cd routes
   - touch index.js
   - input code included in the template.

5. configure package.json file

- start : "nodemon server.js"
- test : "jest --watchAll"

### Notes

You can test if the server works in the terminal :

- curl http://localhost:8000
