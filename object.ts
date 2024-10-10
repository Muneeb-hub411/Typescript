// let obj ={
//     name:"Muneeb",
//     age:22,
//     Designation:"Junior web developer"
// }


// function createuser({}):{}{
//     return {}
// }

// let user = createuser(obj)
// console.log(user)






// function createuser({ name, email }: { name: string; email: string }) {
//     console.log(name, email);
//   }
  
//   let newuser = { name: "hitesh", email: "ab@gmail.com", ispaid: true };
  
//   createuser(newuser); // This works fine even with the extra property
//   export {};



// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// createUser(newUser)




//type Alias is use to create your own type when we have to use a obj in many places we can create its own type


type user={
    email:string,
    password:string
}


function login(User:user):string{
    return User.email + User.password

}




























export {};




