let date=new Date("2004-12-14")
console.log(date.toLocaleString());
console.log(date.getMonth()+1); //give current month

let time=Date.now()
console.log(time);
// console.log(date.getTime());
console.log(Math.floor(Date.now()/1000))
console.log(`current date is :${date.toDateString()}`)

date.toLocaleString('default',{
    weekday:"long"
})