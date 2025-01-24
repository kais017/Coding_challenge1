
let employeeName = "Kaileen Kennedy"
const employeeID = 01
var isActive = true

console.log("EmployeeName", employeeName, "Type of", typeof employeeName )
console.log("EmployeeID",employeeID, "Type of", typeof employeeID )
console.log("Is Active", isActive, "Type of", typeof isActive)

let productName = "Sona"
const productPrice = "300"
var isAvailable = true

console.log("ProductName", productName, "Type of", typeof productName)
console.log("ProductPrice", productPrice, "Type of", typeof productPrice)
console.log("Is Available", isAvailable, "Type of", typeof isAvailable)

let accountBalance = 50000
let NewaccountBalance = accountBalance + 300

console.log("AccountBalance", accountBalance, "Type of", typeof accountBalance)
console.log("After deposit: $" + NewaccountBalance)

let customerName = "Batman"
let welcomeMessage = "Hey there, " + customerName + "! Welcome to Gotham City!"
console.log(welcomeMessage)

let isLoggedIn = true
let age = 100
let isMember = true
if (age >= 100 && isMember)
    console.log("You are a member! Access Granted.")
else 
console.log("You are not a member. Access Denied.")
