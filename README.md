#Long Number Arithmetic RESTful web service

##running the app:
run one of the options below in the app working directory
1. using docker file:
    - 
    
2. run `node server.js` 
3. run `nmp run start` 




In order to get the sum/ multiplication of 2 numbers I use Http get request. 
I choose to pass the numbers as query parameters because there isn’t change of state on the server and there is no need to hide the parameters. In addition the numbers aren’t pass as part of the path since they aren’t resources.
