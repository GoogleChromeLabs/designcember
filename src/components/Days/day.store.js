// this runs at build time
// this is not shipped to the client
// spoof a day of the month by setting todaysDate to a number

const Today = new Date()
const daysInMonth = 31
const todaysDate = Today.getDate()
const Days = {}

for (var i = 1; i <= daysInMonth; i++) {
  Days[`day${i}`] = i <= todaysDate
    ? 'active'
    : 'pending'
}

export default Days
