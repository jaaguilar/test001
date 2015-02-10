function Animal(age){
	this.hasEnergy=true;
	this.hasAge=true;
	this.Age = age;
	console.log("constructor: la edad inicial es "+this.Age);
}

Animal.prototype.getOld = function(){
	this.Age++;
	console.log(this.Age);
};

module.exports = Animal;