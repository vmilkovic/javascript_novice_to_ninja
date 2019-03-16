const me = {name: 'Vedran'};

Object.defineProperty(me, 'eyeColor', {value: 'blue', writable: false, enumerable: true})

console.log(Object.getOwnPropertyDescriptor(me, 'eyeColor'));

console.log(me.eyeColor = 'purple');
console.log(me.eyeColor);