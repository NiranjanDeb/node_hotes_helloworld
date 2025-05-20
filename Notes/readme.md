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
