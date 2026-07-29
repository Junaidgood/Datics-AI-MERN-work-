let counter=3;

let student1;
let student2;
let student3;

//1
let students = [
    
        {id:1 ,name:"junaid",marks:[80,40,22]},
        {id:2 ,name:"Huzaifa",marks:[90,66,33]},
        {id:3 ,name:"Ali",marks:[100,96,33]}
    
]

//2

const generateId = (function() {
    let counter = 3; 
    return function() {
        counter++;
        return counter;
    };
})();



//3

function add(){
    for(i=1;i<students.id;i++){
      sum(students.marks)
    }
}

function calculateAverage(marksArray) {
    let sum = 0;

   for(i = 1 ;i<marksArray.length;i++){
    return sum / marksArray.length[i];
}
   return sum / marksArray.length;
}

let numavg = new calculateAverage()

function getGradeLabel(numavg){
    if(numavg >= 90 && numavg <= 100){
      console.log<<" grade is A";
    }
    else if(numavg >= 80 && numavg <= 89){
        console.log<<" grade is B";
    }

    else if(numavg >= 70 && numavg <= 79){
        console.log<<" grade is C";
    }

    else if (numavg <= 69) {
        console.log<<" grade is F";
    }
    
}


function formatStudentName(name) {
    let trimmedName = name.trim();
    
    return trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
}



function getTopper(studentsArray) {
    return studentsArray.reduce((prev, current) => {
        return (calculateAverage(prev.marks) >
         calculateAverage(current.marks)) ? prev : current;
    });
}

function getPassedStudents(studentsArray) {
    return studentsArray.filter(student => 
        calculateAverage(student.marks) >= 40);
}




let existing =[students.id[1]];

ex = new [...existing];

let = newOnes=[students.id[0]]

NOnes = new [...newOnes]

function mergeStudents(ex, NOnes) {
   console.log([...ex , ...NOnes])
}




class student {
    constructor(name,marks,generateId){

    }
}