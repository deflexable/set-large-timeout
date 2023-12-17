# set-large-timeout
setTimeout greater than 0x7FFFFFFF (2147483647)

## example

```js
import setLargeTimeout from "set-large-timeout";

const one_year = 2419200000;

const unsubscribe = setLargeTimeout(() => {
  console.log('finally called after 30 years 😮‍💨');
}, one_year * 30);

// clear timeout
unsubscribe();
```

## details

The maximum delay that can be set with setTimeout is platform-dependent and is related to the limits of the 32-bit signed integer representation used for the delay parameter.

In a 32-bit signed integer system, the maximum value that can be represented is 2,147,483,647. Therefore, the maximum delay that can be set with setTimeout is approximately 2,147,483,647 milliseconds, which is equivalent to approximately 24.86 days.