class Student{
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }

    display(){
        console.log("Name" , this.name);
        console.log("Marks",this.marks);
    }
}
const student = new Student("Vikash" , 45);
student.display();