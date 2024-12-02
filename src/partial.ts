// interface User{
//     is:string;
//     name:string;
//     age:number;
//     email:string;
//     password:string
// };

// //pick particular properties if we want hare email,age,name-to update user profile so we don't pick password here
// type UpdateProps=Pick<User, 'name' | "email" | "age" >

// function update(updateProps :UpdateProps){
//     /*
//     user.update({
//         name:updateProps.name,
//         age:updateProps.age,
//         email:updateProps.email
//     })
//         */

// }


// type UpdatePropsOptional= Partial<UpdateProps>


// //here properties are optional 
// const user:UpdatePropsOptional={
//     name:"chandhan",
//     age:24,
// }
