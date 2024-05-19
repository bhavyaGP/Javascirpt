// for of
const arr=[1,3,3,4,5]

for (const i of arr) {
    // console.log(i);    
}


//maps

const map=new Map()
map.set("in","India")
map.set("us","United states")
map.set("fr","France")

for (const [key,value] of map) {
    // console.log(key);
}

const user={
    "game":"NFS",
    "game1":"GTA"
}

//not iterable user

for (const key in user) {
    // console.log(key,user[key]);
}


//for each
const nums=["one","two","three","four"]


//val,index,arr
nums.forEach( (val)=>{
    // console.log(val);
} )
    
const coding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

coding.forEach((item)=>{
    console.log(item.languageName);
})