# JASON Placeholder API

## HTTP response status codes

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

1. Informational responses (100–199),
2. Successful responses (200–299),
3. Redirects (300–399),
4. Client errors (400–499),
5. Server errors (500–599).

`request.open(param1, param2)`
: Setting of the request

- param1 = type of request ex. 'GET'
- param2 = where to get request

`request.send()`
: Sending the request

- responseText는 client가 server에게 받는 데이터. (JASON Data)
- request.readyState === 4는 정확하지 않음 => request.open()에서 URL을 잘못가져온 경우에도  
  status 404가 나오면 data가 빈 데이터로 나올 뿐 이벤트리스너는 계속 실행된다 = 정확하지 않다.  
  request.status ===200은 correct endpoint를 받으면 실행하도록 조정

- Jason
- transferring data from server to client key는 "" double quotes로, string을 value로 쓰면 그것도 ""double quotes로

- callback hell

- 전 request가 완료 됐는지 아는 방법 :
- nesting callback . hard to maintain
