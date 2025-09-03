// ARRAYs
// objects

// 1 array = > collection of data (like a list )

// ["item1","item2",...]

let student = "rohit,ram";
console.log(student[0]);

let studentList = ["rohit", "ram"];
console.log("student list", studentList);

let arr = ["nameet", 98798798];

// accessing array item
// arrayName[indexno]
console.log("array third item", arr[2]);
console.log("array second item", arr[1]);

//checking no of items in array (arrayName.lenght)

console.log("no of items in array arr : ", arr.length);

// creating student ref without arr
let student1 = "aayush";
let student2 = "vivek";

// let student=["aayush",]

// ===============objects in js ==============
// collection of key value pair
// to create a object use {}

let studentDetails = {
  name: "aayush",
  rollno: 87687687,
  timing: "10 AM",
  activeStatus: true,
  getSum: (a, b) => {
    return a + b;
  },
};

// console.log(studentDetails[name]);

let employeeData = [
  {
    empId: "35546",
    employeeName: "jhon doe",
    department: "it",
  },
  {
    empId: "8798789",
    employeeName: "rohit",
    department: "BDE",
  },
];


console.log(employeeData[0])
