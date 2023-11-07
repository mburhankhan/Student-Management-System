import inquirer from "inquirer";

//Functions
//Enroll Student
//Add new students      Ok  
//Full Name             OK
//Father Name           OK
//Qualification         OK
//Age                   OK
//Choose Course         OK
//Pay fees
//Add 5 digits unique id
//View balance
//fees status
//pay tuition fees
//
//show status


class Student {
    Name: string
    Father_Name: string
    Qualification: string
    Age: number
    Course: string[] = []
    ID: number
    Balance: number
    constructor(name: string, father_name: string, qual: string, Id: number, age: number, balance: number) {
        this.Name = name
        this.Father_Name = father_name
        this.ID = Id
        this.Qualification = qual
        this.Age = age
        this.Balance = balance
    }
    addCourse(obj: string) {
        this.Course.push(obj)
    }
}

let student: Student;
// console.log(student)
let students: Student[] = []
let idNo = 52000



let enroll = async (students: Student[]) => {
    let res = await inquirer.prompt([{
        message: "Select operation",
        type: "list",
        choices: ["Enroll Course", "View Balance", "Check Status"],
        name: "operation"
    }])
    if (res.operation === "Enroll Course") {
        let ans = await inquirer.prompt([{
            type: "string",
            name: "FullName",
            message: "Enter your Full Name:"

        },
        {
            type: "string",
            name: "FatherName",
            message: "Enter your Father Name:"

        },
        {
            message: "Choose your qualification:",
            name: "qualification",
            type: "list",
            choices: ["Matric", "DAE", "Intermediate", "Bachelors", "Masters", "PhD"]
        },
        {
            message: "Enter your age:",
            name: "age",
            type: "number"
        },
        {
            message: "Select any course to enroll:",
            type: "list",
            name: "CoursesList",
            choices: ["Web Develpment", "Mobile App Development", "Generative AI Development", "Web 3.0 & Metaverse Develpment"]
        },
        {
            message: "Your total course cost is Rs. 5000/-\nPlease select any payment option:",
            type: "list",
            name: "PaymentOption",
            choices: ["Lump Sum", "Monthly"]
        }
        ])
        if (ans.PaymentOption === "Lump Sum") {
            console.log(`Congrat's you are enrolled in ${ans.CoursesList} course.\nPlease note your ID: ${++idNo}`)
            student = new Student(ans.FullName, ans.FatherName, ans.qualification, idNo, ans.age, 0)
        }
        else if (ans.PaymentOption === "Monthly") {
            let balance = 1000
            console.log(`Consgrat's you are enrolled in ${ans.CoursesList} course. Your remaining balance ${balance} due on next month.\nPlease note your ID:${++idNo}`)
            student = new Student(ans.FullName, ans.FatherName, ans.qualification, idNo, ans.age, balance)
        }
        student.addCourse(ans.CoursesList)
        students.push(student)
        console.log(student)
    }
}


enroll(students)
