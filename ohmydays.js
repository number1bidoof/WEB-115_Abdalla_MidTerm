let newbtn = document.getElementById('Button1');
let space = document.getElementById('space')
let loanAmt = Number(prompt("Please enter your loan amount: "))
console.log(loanAmt)
let dwnPmtAmt = Number(prompt("In percentage of total loan your down payment is"));
dwnPmtAmt = dwnPmtAmt / 100
console.log(dwnPmtAmt)
let loanLength = Number(prompt("Is your loan a 30 or 15 year loan"));
let remainderLoan  = loanAmt - loanAmt*dwnPmtAmt
let interestRate = 0.0575

function Amortization (interestRate,remainderLoan,loanLength){ 
    
    console.log(remainderLoan)
    for (let i = 0 ; i<remainderLoan; i++) {
        let newp = document.createElement('p')
        let month = i;
        // x is principal, r is interest rate, z is total number of payments
        let MonthlyPayment = (((interestRate / 12) * remainderLoan) / (1 - Math.pow(1 + (interestRate / 12), (loanLength * -12)))).toFixed(2)
        let interestPaid = interestRate / 12;
        let principalPaid = MonthlyPayment-interestPaid;
        remainderLoan = remainderLoan - principalPaid;
        newp.innerHTML(`${MonthlyPayment}: Monthly Payment<br>${interestPaid}: Interest Paid<br>${remainderLoan}: Remaining loan`)
        space.appendChild(newp)
    } 
} newbtn.onclick(Amortization(interestRate,remainderLoan,loanLength))
console.log('it works')