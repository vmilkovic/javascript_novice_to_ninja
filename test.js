const myMaths = {

	square(x){
		return x * x;
	},
	mean(array, callback){
		if(callback){
			array.map(callback);
		}
		const total = array.reduce((a, b) => a + b);
		return total/array.length;
	}
};

console.log(myMaths.square(3));
console.log(myMaths.mean([1,2,3]));