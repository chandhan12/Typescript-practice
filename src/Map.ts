
/*
const users=new Map();


users.set("ras123",{name:"chandhan",age:24,email:"ras@gmail.com"})
users.set("das567",{name:"das",age:24,email:"das@gmail.com"})


const user=users.get("ras123")
console.log(user)
*/

interface user{
    id:string
    name:string
}

const Users=new Map<string,user>();


Users.set("chandhu123",{id:"chandhu123",name:"chandhu"})
Users.set("das456",{id:"das456",name:"daska"})
Users.set("john",{id:"john",name:"john doe"})


console.log(Users.get("das456"))