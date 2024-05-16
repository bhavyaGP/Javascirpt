const user=
{
    username:"bhavya",
    age:19,
    greeting:function(){
        console.log(`${this.username}, welcome !!`)
        console.log(this) //current contex
    }
}
user.greeting();
user.username="xyz"
user.greeting()


const fun = () => {
    console.log("This is arrow");
}
fun();


const add=(n1,n2)=> (n1+n2) //implicit return
console.log(add(1,2))