
## ⭐ Make a Server First


1. We  know how to make a simple server. Y

 ```js
 const http = require('http');

 http.createServer((req, res) => {



   }
 ).listen(5000);
```

2. Now `res.writeHead(200, {'Content-Type': 'application/json'});` - This line sets the response status code and headers using the `writeHead` method of the `res` (response) object

 >  -  `writeHead` method takes two arguments, the first is the status code and the second is an object containing the response headers (in this case, we are setting the `Content-Type` header to `application/json`)

 >  -  The `writeHead` method is used to send the response status code and headers to the client

 >  -  The status code `200` is a standard HTTP status code that indicates the request was successful.

 >  -  The `Content-Type` header is used to specify the media type of the resource being sent in the response body this means that the client can expect to receive data in a specific format.

 >  -  `application/json`, indicating that the response body will contain data in JSON format & we use `/` to separate the type and subtype of the media type.

3. Now `res.write(JSON.stringify({name: 'Subham', age: 20}));` - This line writes the response body using the `write` method of the `res` (response) object

 >  -  The `write` method is used to send the response body to the client means that the client can expect to receive data in a specific format.

 >  -  The `JSON.stringify` method is used to convert a JavaScript object to a JSON string

 >  -  In this case, it is sending a JSON representation of an object with properties `name` and `age`.

 >  -  The `JSON.stringify` method takes a single argument, the object to be converted to a JSON string

 4. Now `res.end();` - This line signals the end of the response and sends it to the client using the `end` method of the `res` (response) object.

 >  -  The `end` method is used to indicate that all of the response headers and body have been sent and that the server should consider this message complete.



 > These lines of code are part of a Node.js server that sends a response to an HTTP request. The `writeHead` method is used to set the response status code and headers. In this case, the status code is set to `200` to indicate success, and the `Content-Type` header is set to `application/json` to indicate that the response will contain JSON data. The `write` method is used to send data in the response body. In this case, it sends a JSON representation of an object with properties `name` and `age`. Finally, the `end` method is used to signal the end of the response and send it to the client.




#### Status Code

If I send instead of 200, I send 404, it will show not found in the postman status code because there are lots of status codes are there. We use them according to our need.

Some of the status codes are:

- 200 - OK
- 201 - Created
- 204 - No Content
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Internal Server Error
- 503 - Service Unavailable


> You can check all the status codes [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

