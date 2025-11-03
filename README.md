# set-large-timeout
setTimeout greater than 0x7FFFFFFF (2147483647) milliseconds

#### Install

```
npm install set-large-timeout --save
```

or using yarn

```
yarn add set-large-timeout
```

## example for timeout

```js
import { setLargeTimeout } from "set-large-timeout";

const one_year = 2419200000;

const unsubscribe = setLargeTimeout(() => {
  console.log('finally called after 30 years 😮‍💨');
}, one_year * 30);

// clear timeout
unsubscribe();
```

## example for interval

```js
import { setLargeInterval } from "set-large-timeout";

const unsubscribe = setLargeInterval(() => {
  console.log('called every 3 years 😮‍💨');
}, one_year * 3);

// clear interval
unsubscribe();
```