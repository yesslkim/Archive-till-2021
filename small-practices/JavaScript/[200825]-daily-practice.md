## 논리연산자 기초 학습용 연습문제 - 출저: ko.javascript

### 1. 다음 OR 연산의 결과는 무엇일까요?   
아래 코드의 결과를 예측해 보세요. 

   ```javascript
   alert( null || 2 || undefined );
   ```
   답: 
   2가 출력된다. OR연산자는 왼쪽부터 true/false를 확인하고 하나라도 true일 경우  
   코드를 출력하게 된다. null은 falsy, 2는 truthy이기 때문에 2를 출력. O정답O

### 2. OR 연산자의 피연산자가 alert 라면?  
   아래 코드의 결과를 예측해 보세요.  
   
   ```javascript
   alert( alert(1) || 2 || alert(3) );
   ```
   답:
   피연산자가 alert라도 값을 출력하면 1이기 때문에 1을 출력한다? X틀림X

   실제 답변: alert창에는 1, 2가 출력된다.

   alert 메서드는 값을 반환하지 않는다. 즉 undefined를 반환
   첫번째는 1이 출력되지만 undefined를 반환하기 때문에, OR 연산자는 다음 피연산자를 평가하여   truthy를 찾아본다. 두번째 피연산자가 2, 즉 truthy값이기 때문에 실행이 멈춘다.

### 3. 다음 AND 연산의 결과는 무엇일까요?  
   아래 코드의 결과를 예측해 보세요.
   ```javascript
   alert( 1 && null && 2 );
   ```
   답:
   truethy && falsy && truthy 
   falsy인 null에서 멈추고 null을 반환한다. O정답O

### 4. AND 연산자의 피연산자가 alert 라면?
  아래 코드의 결과를 예측해 보세요.
   ```javascript
   alert( alert(1) && alert(2) );
   ```
   답:
   alert는 undefined를 반환하기 때문에 첫번째 falsy인 1을 출력 X틀림X

   실제 답변: 얼럿 창엔 1과 undefined가 출력.
   우선 명령어인 alert(1)이 실행되기 때문에 1이 출력되고,
   falsy값인 alert(1)의 값인 undefined를 출력한다.

### 5. OR AND OR 연산자로 구성된 표현식
  아래 코드의 결과를 예측해 보세요.
  ```javascript
  alert( null || 2 && 3 || 4 );
  ```
  답: 정답은 3
  AND연산자가 우선순위가 높기 때문에 2 && 3 부터 결과를 출력하면 
  TRUETHY && TRUETHY 이기 때문에 마지막 값인 3을 출력

  null || 3 || 4는 FALSY || TRUTHY || TRUTHY 먼저 출력되는 truthy인 3을 출력 O정답O

### 6. 사이 범위 확인하기
  age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.  
  "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.
  
  답:  X틀림X - 일단 정답도 출력이 안된다  
  let age = prompt('몇살입니까?')
  if (age) {
    age=14 <=age <=90;
    alert('나이가 14세 이상 90세 이하에 속합니다')
  } else {
    alert('나이가 14세미만 혹은 90세 초과입니다.')
  }

  웹사이트 답:
  if (age >= 14 && age <= 90)

### 7. 바깥 범위 확인하기
  age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.
  답안은 NOT ! 연산자를 사용한 답안과 사용하지 않은 답안 2가지를 제출해 주세요.

  답:   속하는 범위 - 14세 미만과 90세 초과
  (1) NOT ! 연산자 사용하지 않은 답안
  if(age<14 || age>90)  O정답O

  (2) NOT !연산자 사용한 답안
   if(!age>=14 || age=<90) X틀림X

  웹사이트 답안 : if (!(age >= 14 && age <= 90))   
  조건의 반대되는 조건을 찾아서 묶은다음 !, 반대되는 조건은 6번이기 때문에 간단하게
  할 수 있다.

### 8. "if"에 관한 고찰
  아래 표현식에서 어떤 alert가 실행될까요?
  if(...) 안에 표현식이 있으면 어떤 일이 일어날까요?
  ```javascript
    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third' );
  ```
  답:  
  실행되는 alert는 first(-1), third(1)   O정답O

### 9. 로그인 구현하기
  프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

  사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요.  
  이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요.   
  틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
  
  비밀번호 확인 절차는 다음과 같습니다.

  맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.  
  틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.  
  빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.  
  
  답:
  ```javascript  
  let userName = prompt('사용자 이름을 입력해 주세요');
  if(userName =='Admin') {
    let userPwd = prompt('비밀번호를 입력해주세요')
     
    if(userPwd == "TheMaster") {
      alert('환영합니다!');
    } else if (userPwd ==''||null) {
      alert('취소되었습니다')
    } else {
      alert('인증에 실패하셨습니다')
    }
  }
  
  ```
  웹사이트 답:  
  일단 userPwd=='' || userPwd==null 이런식으로 해야된다. null이 뭐에 대한건지
  안나오니 에러가 뜸. 그리고 Admin을 제대로 안썼을 때를 else if로 명시해줘야한다.



   

