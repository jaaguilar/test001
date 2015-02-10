var Animal = require("./Animal.js");

var util = require("util");

function Perro(age)
{
	//llamada al constructor de la clase padre
	Animal.call(this,age);
}
//llamada a util para decirle que Perro hereda de Animal
util.inherits(Perro, Animal);
var dogInstance = new Perro(50);
for (i = 0; i < 10; i++) {
	dogInstance.getOld();
};