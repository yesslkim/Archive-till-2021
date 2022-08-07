# Math Object 
- Updates
  - [2020.08.31] - 기초 개념 정리
  

---
| Math Object          | Value                                                  | Meaning                                                                                                                             |
| -------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `Math.E` (property)  | 2.718281828459045                                      | Euler's number                                                                                                                      |
| `Math.PI` (property) | 3.141592653589793                                      | the ratio of the circumference of a circle                                                                                          |
| `Math.round`         |                                                        | Round a number to the nearest integer:                                                                                              |
| `Math.floor`         | `math.floor(-5.05)`일 경우 : -6                        | a number dounwards to the nearest integer                                                                                           |
| `Math.ceil`          | `Math.ceil(null)` returns integer 0 and not NaN error. | rounds a number up to the next largest integer.                                                                                     |
| `Math.trunc`         | `Math.trunc(-0.123)`=-0                                | removing any fractional digits.                                                                                                     |
| `Math.random`        | 예제 참고                                              | The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) |

```javascript
const random =Math.random(); 
console.log(math.round(random*100)); // 정수 1~100사이를 갖게 된다.
```