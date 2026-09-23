const student1= {
    name:"venkatesh",
};
const student2= {
    name:"vikas",
};
function introduce(city){
    console.log('my name is $(name) and i live in $(city)');
}
introduce.call(student1,"delhi");
