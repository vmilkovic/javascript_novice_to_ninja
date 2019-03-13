function squareRoot(number) {
'use strict';
if (number < 0) {
throw new RangeError('You cannot find the square root of negative numbers')
}
return Math.sqrt(number);
};

squareRoot(-1);