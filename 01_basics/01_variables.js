const accountId =153
let accountEmail ="Sushan@gmail.com"
var accountPassword ="12345"
accountCity="Pokhara"
let accountState

// accountId=2 // not allowed
accountEmail="sus@gmail.com"
accountPassword="11"
accountCity="Kathmandu"
/* prefer not to use var
because of the issues in block scope and functional scope
*/


console.log(accountId);
console.log(accountEmail);

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
