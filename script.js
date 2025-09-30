//complete this code
class Person {}

class Student extends Person {}
 class Person {
	 constructor(name, age){
		 this._name = name;
		 this._age = age;
	 }
	 //getter
	 get name() {
		 return this._name;
	 }
	 // setter
	 set age(newAge){
			 this._age = newAge;
		 
	 }
 }
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}
// // Do not change the code below this line
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;
