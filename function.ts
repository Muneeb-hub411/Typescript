function user(name:string , email:string)
{
    return (name + email)
}

let person = user("Muneeb","M@tgmail.col")
console.log(typeof(person))
export {}


// function user(name:string , email:string="m@gmail.com")
// {
//     return (name + email)
// }
// This syntaxx is used for bydefault value


// let login =(username:string , password:string):string=>{
// return "login successfully"

// }

// it used when function is returning string


// let login =(name:string):void=>{

//     console.log(name)
// }

// let handleerror=(err:string):never=>{
//  throw new Error(err)
// }

// never is used for throwing errors