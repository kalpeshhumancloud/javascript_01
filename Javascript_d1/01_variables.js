const accountId = 144553
let accountEmail = "kalpesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2   // Not allowed

console.log(accountId);
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengluru"

// do not use var 
// because of issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity])
