
/*
interface User{
    id:string,
    name:string,

}

type Users={[key:string]:User}

const people:Users={
    "user1":{
        id:"user1",
        name:"chandhu"
    },
    "user2":{
        id:"user2",
        name:"jack"
    }
}

*/


interface User{
    id:string
    name:string,
}

type Users=Record<string,User>


const people:Users={
    "user1":{
        id:"user1",
        name:"chandhu"
    },
    "user2":{
        id:"user2",
        name:"jack"
    }
}


console.log(people.user1)