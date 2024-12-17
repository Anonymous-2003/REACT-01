// importing for default expot
import x from './module1.mjs'; // import variable name can be anyone
console.log(x);

// importing for named export
import {c,d} from './module1.mjs'; // import variable name should be same which you have exported
console.log(c);
console.log(d);