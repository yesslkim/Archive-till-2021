# Operators

- Updates
  - [2020.08.16] - Aritmetic Operators 기본 개념 기록
  - [2020.08.24] - increment and decrement 기본개념정리 + assignment operators 정리
  - [2020.10.07] - comparison operators, logical operators 개념 정리.

---

## Operators(연산자)

### Arithmetic Operators

- Addition : +
- Substraction: -
- Multiplication: \*
- Division: /
- Remainder : %
- Exponent : \*\*

### Increment and Decremnent Operators

- ++increment
- --decrement

Repetedly add or subtract one with a numeric variable value

```javascript
let num1 = 4;
num1++; // ++이 뒤에 붙으면 우선 +1이 되었기 때문에 5이지만 출력은 오리지널 값인 4로 출력됨
++num1; // ++이 앞에 붙으면 +1하고 난 후의 값을 출력 지금은 5에서 +1 되었기 때문에 6
```

num1++ : 값에 +1을 했지만 출력되는 값은 오리지널 값(=increment되기 전의 값)

++num1 : 값에 +1하고 난 후의 값을 출력

### Assignment Oprators

```
- += Addition assignment // **ex.** x+=6 ⇒ x=x+6
- -= subtraction assignment
- \*= multiplication assignment
- /= division assignment
```

### Comparison Operators

```
- < : less than
- > : greater than
- <= : less than or eqaul to
- >= : greater than or equal to
- === : eqaul to
- !== : not equal to
```

### Logical Operators

```
- and opeator (&&)
- or operator(||)
- not operator(!)
```
