const accountId = 144553
let accountEmail = "bhavya@google.com"
var accountPassword = "12345"
accountCity = "xyz"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "xyz2"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])