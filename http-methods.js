// http methods and its status codes

/*
http methods tell the server what action the client wants to perform 

1. GET 
- used to fetch data 
- no body 
- safe & impotent 
- example : get a list of users

2. POST 
- used to create something 
- sends data in body
- example : register a new user 

3. PUT
-used to replace / update full record 
- idempotent (same request = same result)
- example : update entire user data 


4. PATCH
- used to update partially 
- modify only selected fields
- example : Update only user's name 


5. DELETE
- remove a resource 
- example : delete user by id 


6. OPTIONS 
- used in CORS
- browser checks what methods are allowed 



-------STATUS CODES--------

// common http status codes

1xx - informational
- 100 continue --- server ready for request body 
- 101 switching protocols - upgrading to websockets 


2xx - success
- 200 ok --- request successfull
- 201 created --- new resource created (POST)
- 202 accepted --- processing but not completed 
- 204 no content --- success but no response body(DELETE/PUT)



3xx - redirection 
- 301 moved permanently  --- new url 
- 302 found (temporary redirect )
- 304 not modified --- use cache content 


4xx - client errors 
- 404 bad request --- wrong input/body
- 401 unauthorized --- no/invalid token 
- 403 forbidden --- you are not allowed 
- 404 not found --- resource not found
- 405 method not allowed --- wrong http method 
- 409 conflict --- duplicate record / data conflict
- 429 too many request --- rate limit exceeded 



5xx - server errors 
- 500 internal server error - something crashed 
- 501 not implemented - method not supported 
- 502 bad gateway --- server upstream failed 
- 503 service unavailable --- server down/overloaded 
- 504 gateway timeout --- upstream took too long 


*/


/// fetch method to call apis (used in industry)

async function fetchApi(){
    try {
        let response = await fetch("https://ai.suhail.app")
        let output = await response.json()
        console.log(output.msg);
    } catch (error) {
        console.log(error);
    }
}
fetchApi()