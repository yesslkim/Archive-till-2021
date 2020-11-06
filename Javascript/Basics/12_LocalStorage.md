# Local Storage

- Updates
  - [2020.10.02] - Local Storage 개념정리

---

## What is Local Storage?
> Set up a database to store and retrieve data.  
> Use local storage to store and retrieve data.

## Local Storage
0. syntax   
   ```javascript
   myStorage = window.localStorage;
   ```
1. Storing, getting data
   ```javascript
   localStorage.setItem('name','value');
   localStorage.getItem('key');
   ```
2. Updating data
    ```javascript
   localStorage.setItem('key','value'); 
   localStorage.key = 'value';
   ```
   - 해당 키를 찾아 value값으로 덮어쓰기 해줌 
3. Deleting data
    ```javascript
   localStorage.removeItem('key'); //(1)
   localStorage.clear(); //(2)
   ```
    - (1)번은 해당 key를 지우기 위해 사용
    - (2)번은 전체삭제
4. stringifying, parsing data
    ```javascript
   //string => object
   JSON.parse();

   //object => string
   JSON.stringify();
   ```

