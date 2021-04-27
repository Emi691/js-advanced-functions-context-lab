/* Your Code Here */
function createEmployeeRecord(employeeArray){
    const employeeRecord = {}
    employeeRecord.firstName = employeeArray[0]
    employeeRecord.familyName = employeeArray[1]
    employeeRecord.title = employeeArray[2]
    employeeRecord.payPerHour = employeeArray[3]
    employeeRecord.timeInEvents = []
    employeeRecord.timeOutEvents = []   
    return employeeRecord   
}

function createEmployeeRecords(employeesArray){
    const employeeRecords = employeesArray.map(employee => createEmployeeRecord(employee))
    return employeeRecords
}

function createTimeInEvent(date){
    const dateArray = date.split(' ')
    const day = dateArray[0]
    const hour = parseInt(dateArray[1])
    this.timeInEvents.push({type: "TimeIn", hour: hour, date: day})
    return this
}

function createTimeOutEvent(date){
    const dateArray = date.split(' ')
    const day = dateArray[0]
    const hour = parseInt(dateArray[1])
    this.timeOutEvents.push({type: "TimeOut", hour: hour, date: day})
    return this
}

function hoursWorkedOnDate(date){
    const clockIn = this.timeInEvents.find(timeInEvent => timeInEvent.date === date)
    const clockOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date)
    const hoursWorked = (clockOut.hour - clockIn.hour)/100 
    return hoursWorked
}

function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    let wagesEarned = hoursWorked * this.payPerHour
    return wagesEarned
}

function findEmployeeByFirstName(srcArray, firstName){
    const employee = srcArray.find(record => record.firstName === firstName)
    return employee
}

function calculatePayroll(array){
    const payroll = array.reduce((memo, record) => {
        return memo + allWagesFor.call(record)
    }, 0)
    return payroll
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}