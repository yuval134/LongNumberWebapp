# Long Number Arithmetic RESTful web service

## running the app:
run one of the options below in the app working directory
1. using docker file:
    - run `docker build -t long_number .`
    - and then run `docker run -p {a port of your choice}:8080 -d long_number`
2. run `node server.js` 
3. run `nmp run start`

## instructions:
Both APIs expects 2 query params: `first` and `second`.
1. Sum operator example request: `http://localhost:8080/sum?first=123&second=321`
2. Multiply operator example request: `http://localhost:8080/multiply?first=122&second=3`

---

### Reasons behind my choices:
- I implemented the API using GET because it seems more suitable for getting the sum/multiplication of 2 numbers
than POST which is used for changing the server state (like forms).
- I choose to pass the numbers as query parameters rather than path parameters since path parameters are used mainly for access resources.

### Future development options:
1. Support other operations such as subtraction, power etc.
2. Support multiple parameters, more then 2.
3. Support POST request for very long numbers or huge amount of parameters.
 
