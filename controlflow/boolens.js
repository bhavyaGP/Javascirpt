// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}



const empobj={}

if(Object.keys(empobj).length===0)
    console.log("Empty");


val1 = null ?? 10 ?? 20
console.log(val1);