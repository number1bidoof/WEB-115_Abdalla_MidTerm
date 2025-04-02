let newbtn = document.getElementById('Button1');
//newbtn.textContent = "DO NOT CLICK ME FOR AMORTIZATION"
let loanAmt = Number(prompt("Please enter your loan amount: "))
console.log(loanAmt)
let dwnPmtAmt = Number(prompt("In percentage of total loan your down payment is"));
dwnPmtAmt = dwnPmtAmt / 100
console.log(dwnPmtAmt)
let loanLength = Number(prompt("Is your loan a 30 or 15 year loan"));
let remainderLoan  = loanAmt - loanAmt*dwnPmtAmt
let interestRate = 0.0575
console.log(remainderLoan)
let m = 0;
let x = 0;
let z = 0;
let u = 0;
let helpme;
function Amortization (interestRate,remainderLoan,loanLength){ 
    while(remainderLoan >= 0) {
        // x is principal, r is interest rate, z is total number of payments
        let MonthlyPayment = (((interestRate / 12) * remainderLoan) / (1 - Math.pow(1 + (interestRate / 12), (loanLength * -12)))).toFixed(2);
        x = `${loanLength} years`
        m = `${interestRate}`;
        z = `${remainderLoan}+${remainderLoan}*${interestRate}`;
        remainderLoan = (z*loanLength*12) - z;
        helpme = remainderLoan + u;
        let monthlybalance = remainderLoan - MonthlyPayment
        console.log(x)
        console.log(m)
        console.log(z)
        console.log(helpme)
        
    } 
}
Amortization(interestRate,remainderLoan,loanLength)
console.log('it works')