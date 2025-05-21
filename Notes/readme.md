Models Or Schema:
    Models are like a blueprint of our database
    It's a representation of a specific collection in MongodB. Like a Person
    Once you have a defined a model, you can create , read , update and delete documnets in the corresponding MpngoDB collection
    Mongoose allows you to defined=s a schema for your documents. A Schema is like a blueprint that defines the sturcture and data types of your documnets within a collection 

    Each Person's details like (chef, owner, manager, waiter)
    {
        "name":"Alice",
        "age ":"25",
        "work":"chef",
        "mobile":"25145441",
        "email":"alice@anc.com",
        "address":"55 main rd , city",
        "salary":"65000",
    }


    Body Parser:

        bodyParser is a middleware for expresss.js
        it is used to parse and extract the body of incoming http requests
        bodyParser.json() automatically the JSON data from the request body and converts it into a javascript Object , which is then stored in the req.body.

Express Router:
    Express Router helps us to organize and manage pages or endpoints in our web application . it's like creating seperate folders for different types of tasks


Git & GitHub
    Git is like a time machine for our code 
    It is a tool that keeps a record of every version of our code , so we can always go back to a previous state if something goes wrong
git init : run git init inside the root folder of our project 
            This command tells Git to start tracking changes in our project folder
git status : after making changes to our project , we'll want to save those changes in Git
git add . : The . means "add all changes" . We cn replace it with specific file names if needed.
.gitignore : .gitignore file is a special configuration file used in Git repo to specify files 
            and directories that should be ignored by Git               
git commit -m "Message you want to send" : it will send the message of changes

dotenv : the dotenv module in NodeJs is used to manage configuration variables and sensitive information in 
          our application
          It's particularly useful for keeping sensitive data like API keys, database connection strings, port number and other environment_specific config seperate from our code 
          npm install dotenv
          - create a .env file 
          - format : var_name = value:
        
Middleware : it's something that happens in between our requests and final response in a web application
1. Authentication: "Who are you?"
                    It is the process of verifying a user's identity — making sure the user is who they say they are.
2. Authorization: "What are you allowed to do?"
                    After authentication, authorization determines what actions or resources the user has access to.
        
    * We will implement Authentication as a middleware function . So that , Routes will be authenticated before reaching out to the server

Passport.js : 
        Passport.js is a popular authentication middleware for Node.js . Authentication is the process of verifying  the identity of a user , typically through a username and password , before granting access to certain resources or features on a website or app.
        To use passport.js in a Node.js app, we need to install the passport package along with the authentication strategies we intend to use .
        [npm install passport passport-local]

* Storing plain password is not a secure practice. To enhance security , it's highly recommended to hash and salt password before storing them.
* We can use the bcrypt library for password hashing in our Node.js application
        [npm install bcrypt]

    PASSWORD HASH SALTING
user password              salt added       hashing Algo               hashed PW + Salt
Apple                   Apple + jsdv        hashing Process         shdjcbkjasnlhouahslnklsibakjsdkjba

* Now we have to update our person model to store hashed passwords. Modify the registration logic to hash the password before saving it to the database.
* Because the end user didn't know the about hashing, we have to internally maintain it. Like we are saving the hashed password before saving it into the database
* We are using a Mongoose schema middleware hoot to perform an action before saving a document to the database. Specifically, it's using the pre middleware to excute a function before the save operation.



