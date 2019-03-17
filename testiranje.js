const Human = {
	arms: 2,
	legs: 2,
	walk(){ console.log('Walking'); }
}
const Superhuman = Object.create(Human);
Superhuman.change = function(){
	return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
}
Superhuman.init = function(name, realName){
	this.name = name;
	this.realName = realName;
	this.init = undefined; //maknemo init tako da se samo jednom pozove
	return this;
}
const batman = Object.create(Superhuman);
batman.name = 'Bruce Wayne'

const wonderWoman = Object.create(Superhuman);
wonderWoman.name = 'Diana Prince';

const aquaman = Object.create(Superhuman);
aquaman.name = 'Arthur Curry';

const superman = Object.create(Superhuman);
superman.name = 'Clark Kent';

superman.friends =  [batman, wonderWoman, aquaman]
superman.findFriends = function(){
	this.friends.forEach(friend => {
		console.log(`${friend.name} is friends with ${this.name}`);
	});
}
superman.findFriends();
