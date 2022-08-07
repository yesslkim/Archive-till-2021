# How the Internet Works

## Front-End

### How the Internet Works
1. Browser is making a request 
   - 예시 :  http://www.example.com(요건 DNS) 에서 request를 보낸다. 다만, 서버는 IP address로 정보를 가지고 있기 때문에 이해를 하지 못함
2. ISP(Internet Service provider)(i.e.Charter) - DNS lookup (Domain Name Service)
   - Charter가 DNS를 lookup을 통해 IP 주소로 변환해준다. 
3. 서버에서 주는 정보는 content type을 통해 확인할 수 있다. 이게 css파일일 수도있고, 이미지일 수도 있고 등등.. 그래서 예를들어 html을 서버에서 클라이언트로 보내준다고 가정했을 때 content type은 text/HTML이고 이걸 통해 html파일인지 알 수 있다.
4. HTML인지 확인되면 그때 파싱을 하게 된다. - 위에서 아래로, 그중에 assets을 만나게 되면 (예를 들어 CSS파일 링크 태그) 중간에 멈추고 다시 서버에게 요청을 한다.



✔️ CSS파일을 `<head></head>`태그에 넣는 이유도 파싱을 위에서부터 아래 순으로 하는데, `<body>`밑에 넣게 된다면 스타일이 되지 않은 태그가 노출 된 다음 CSS파일을 요청하기 때문에 그를 방지하고자 헤드태그에 넣는다.

✔️ 태그에 파일이 많아지면 요청 수도 많아지기 때문에 한 파일로 만드는 것이 좋고, minified하면 좀 더 빠르게 받아올 수 있다 - 자바스크립트 모듈, 웹팩등.

✔️ 자바스크립트에서의 요청 - 비동기

### Headers
- Host: 주소
- Method: GET, PUT, POST, DELETE
- Path: /gallery (주소 다음에 오는 경로)
- Cookies: String 
- user-agnet: `User-Agent: <product> / <product-version> <comment>`
- Content type: text/html 같은 타입

- user-agent는 예를 들어서 웹사이트가 클 때 모바일에는 다른 웹사이트 주소로 보내려고 할 때 필요하다 (유저가 사용하고 있는 device 정보를 확인 할 수 있음)
- GET, POST, PUT, DELETE
  - GET: give me a resource, and i am not passing anything with
  - POST: Creating something new (passing information)
  - PUT: Edit (find ID and update)
  - DELETE: delete  
 
Response
- status: 200(성공)

## Back-End 

### How the Internet Works
1. 기본: default = port 80, 요청받으면 DNS lookup을 통해 받은 IP 주소에서 요청 주소 및 content type을 확인한 후 그에 맞는 파일로 응답한다.
2. Web Application server: 
   - 요청을 받는다
   - 요청 주소로 가서 거기에 맞는 데이터를 database를 찾는다 - SQL, Mongo DB
   - data를 넣을 index template을 파일시스템에서 겟한다.
   - template에 데이터를 넣은 후 응답으로 보낸다. 
   - 만약에 그냥 일반 이미지 파일이면? 파일시스템에서 파일만 가져온다음 응답한다.
   - DELETE 요청을 받으면? delete 메서드를 보고 데이터베이스에서 찾아서 지운 다음 200OK 응답.

✔️ 구글, 트위터처럼 큰 회사는 많은 요청을 어떻게 감당 할 수 있을까?
- Wep Application Server, IP주소 다른게 여러개 있음.
- Load Balance에 IP주소가 있고, 클라이언트에서 요청하면 DNS는 load Balance 쪽으로 보내고 load Balance가 알아서 균등하게 서버에게 트래픽을 보내줌 
- Load Balancing이란 ? 하나의 인터넷 서비스가 발생하는 트래픽이 많을 때 여러 대의 서버가 분산처리하여 서버의 로드율 증가, 부하량, 속도저하 등을 고려하여 적절히 분산처리하여 해결해주는 서비스이다.

