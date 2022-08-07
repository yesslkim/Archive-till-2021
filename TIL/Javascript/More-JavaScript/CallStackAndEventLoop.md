## Understanding JavaScript function execution

-> call stack, event loop, tasks and more.

## JavaScript

- A single-threaded non-blocking asynchronous concurrent language
- JS has a call stack, an event loop a callback queue. some other APIs.
- Call stack and a heap

## Runtime

- 프로그래밍 언어가 구동되는 환경. 자바스크립트가 구동되는 환경은 Node.js와 여러 브라우저가 있기 때문에 그들이 자바스크립트 런타임이라 불린다. 대표적으로 크롬은 V8엔진.

## Single Thread

- 하나의 heap 영역과 하나의 call stack을 갖는다. = 한가지 일만 할 수 있다.

자바스크립트 엔진의 구조도

- Memory Heap: 메모리 할당이 일어나는 곳
- Call Stack: 코드 실행에 따라 호출 스택이 쌓이는 곳

## 호출스택 Call stack

- 만약 함수를 실행 시, 해당 함수는 호출 스택의 최상단에 위치함
- 함수의 실행이 끝나면(return값 돌려줄 때), 해당 함수를 호출 스택에서 제거.
- 호출스택의 각 단계는 스택 프레임이라고 한다.
- 호출 스택은 최대크기가 정해져 있고 최대 크기가 되면 '스택 날려 버리기'가 일어난다. - 에러발생

## non-blocking asynchronous concurrent language라 했는데 어떻게 가능할까?

- AJAX를 synchronous일 경우를 생각해 본다. AJAX는 요청하고 응답을 받는 동안 call stack을 막게된다 (blocking). 이는 렌더링과 다른 코드에 영향을 미친다. 하지만 자바스크립트는 논블로킹 비동기 동시성 언어이다.
- 그래서 이게 가능한 이유는 ? concurrency and the EVENT LOOP

## 동시성(Concurrency) & 이벤트 루프 (Event Loop)

- 외부 API 네트워크 통신, setTimeout과 같은 함수는 스택에 적재시키면 blocking이된다. -> concurrency를 보장할 수 없음
- 일정 대기 시간이 필요한 동작의 경우 콜 스택은 Web APIs로 넘겨준다.
  -web APIs에서 요청한 동작들이 모두 끝나게 되면, callback Queue(task queue)로 이동
- 콜스택 비어있는 지 확인, 콜스택에서 task가 모두 완료되면
- 이벤트 루프는 callback queue에 적재된 항목을 콜스택으로 옮겨줌

1. call stack
2. move to webAPIs
3. move to callback Queue (task queue)
4. 이벤트루프가 콜스택이 비어있는 지 확인
5. 콜스택으로 옮겨지고 콜백 실행.

즉, 논블록, 비동기 프로그래밍 언어인 이유는 동시성을 보장하기 위해 비동기적으로 동작하는 런타임이 따로 구성되어 있다.

여기서 중요한것

- 이벤트루프는 콜스택이 비는 다음에 queue를 올려준다.
- delay 1초짜리 SetTImeOut()함수를 5개 실행한다고 가정해보자. Web APIs로 옮겨져 1초를 기다린 후, 큐에 5개가 차곡차곡 쌓이고 하나씩 실행이 될것이다. 즉, 1초여도 1초가 아닌게 되어 부정확하다.
