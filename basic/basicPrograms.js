// Swapping
let a = 10
let b = 5

console.log("\nSwapping Two Values:- ")
console.log("Before Swapping: ")
console.log("a: ",a)
console.log("b: ",b)

let temp = a
a = b
b = temp

console.log("\nAfter Swapping: ")
console.log("a: ",a)
console.log("b: ",b)

// Grade Calculator
console.log("\nGrade Calculator: ")
let marks = 92
function calculateGrade(marks)
{
    let grade
    if(marks >= 90)
    {
        grade = "A"
    } else if (marks >= 80)
    {
        grade = "B"
    } else if (marks >= 70)
    {
        grade = "C"
    } else if (marks >= 60)
    {
        grade = "D"
    } else
    {
        grade = "F"
    }

    return grade
}

console.log("Marks: ", marks)
console.log("Grade: ", calculateGrade(marks))

// Calculate Bill
console.log("\nCalculate Bill: ")
function calculateBill(amount, taxRate)
{
    let tax = amount * (taxRate/100)
    let totalAmount = amount + tax 
    return totalAmount
}

let amount = 1000
let taxRate = 20
console.log("Amount : ",amount)
console.log("Tax Rate : ",taxRate + "%")
console.log("Total Bill : ",calculateBill(amount, taxRate))

// Calculate Interest
console.log("\nCalculating Interest: ")
function calculateIntrest(principle,intrestRate,time){
    let intrest = principle * (intrestRate/100) * time
    return intrest 
  }
  let principle = 1000
  let rate = 8 // 8%
  let time = 2 // 2 yr
  console.log("Principle : ",principle)
  console.log("Rate : ",rate + "%")
  console.log("Time : ",time + "yr")
  console.log("Intrest : ",calculateIntrest(principle,rate,time))

// Salary calculation
console.log("\nSalary calculation: ")
function calculateSalary(basicSalary,hoursWorked,hourlyRate)
{
  let  overTime = Math.max(hoursWorked - 40,0)
  let overTimePay = overTime * (hourlyRate * 1.5)

  let totlaSalary = basicSalary + overTimePay
  return totlaSalary

}

let basicSalary = 2000
let hoursWorked = 45
let hourlyRate = 10

console.log("Total Salary : ",calculateSalary(basicSalary,hoursWorked,hourlyRate))