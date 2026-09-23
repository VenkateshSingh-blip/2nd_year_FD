const student = {
	name: "Vikash",
	marks: 45
};

function displayStudent() {
	console.log("Name", this.name);
	console.log("Marks", this.marks);
}

const display = displayStudent.bind(student);
display();