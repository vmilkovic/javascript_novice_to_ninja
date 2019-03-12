const cookies = document.cookie.split("; ");
console.log(cookies);
for (crumb of cookies){
const [key,value] = crumb.split("=");
console.log(key, value)
console.log(`The value of ${key} is ${value}`);
}