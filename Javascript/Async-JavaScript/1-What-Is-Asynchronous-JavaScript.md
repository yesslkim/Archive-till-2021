# What is Asynchronous JavaScript?

- Updates
  - [2020.09-23] - Asynchronous JavaScript가 무엇인지 대해 간략히 정리.

---

## Asynchronous JavaScript

- JavaScript can run ONE statement at a time = single threaded
- fetching data => BLOCKING rest of the code
- So, it is better to start something NOW and finish it LATER
- from synchrounous code to asynchronous function

Async Code in Example

```JavaScript
console.log(1);
console.log(2);

setTimeOut(()=>{
  console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);
```

setTimeOut()은 HTTP Network Request for data와 같은 맥락이다. 순서는 3번째 이지만, console.log() 코드가 실행되는것을 막지않고, 준비가 되면 callback function이 실행되는 것이다.

## What are HTTP Requests?

- Make HTTP requests to get data(external) from another server
- We make these requests to API endpoints.  
  API Endpoints ?
- Once we make a request to an endpoint from the browser. we typically get back a selection of data in a format called JASON

JASON

- A format which looks like JavaScript objects.

XMLHttpRequest.readystate

- returns the state an XMLHttpRequest client is in

0 = UNSENT : client has been created. open() not called yet  
1 = OPENED : open() has been called ex. request.open(p1,p2)  
2 = HEADER RECEIVED : send() has been called, and headers and status are available. ex. request.send()  
3 = LOADING : Downloading. responseText holds partial data.  
4 = D0NE : The operation is complete.
