let newbtn = document.getElementById('Button1');
let space = document.getElementById('space');

newbtn.addEventListener('click', function () {
    let loanAmt = parseFloat(prompt("Enter the loan amount:"));
    
    let dwnPmtAmt = parseFloat(prompt("Enter the down payment percentage:"));
    dwnPmtAmt = dwnPmtAmt / 100;
    
    let loanLength = parseInt(prompt("Enter the loan term in years (e.g., 15 or 30):"));
    
    if (loanLength !== 15 && loanLength !== 30) {
        alert("Invalid loan term. Please enter either 15 or 30 years.");
        return;
    }
    
    let remainderLoan = loanAmt - loanAmt * dwnPmtAmt;
    let interestRate = parseFloat(prompt("Enter the annual interest rate (as a decimal, e.g., 0.10 for 10%):"));
    
    // Display loan details at the beginning
    space.innerHTML = ""; // Clear previous content
    let loanDetails = document.createElement('p');
    loanDetails.innerHTML = `<strong>Loan Details:</strong><br>
                             Original Loan Amount: $${loanAmt.toFixed(2)}<br>
                             New Loan Amount: $${remainderLoan}<br>
                             Down Payment: ${dwnPmtAmt * 100}% ($${(loanAmt * dwnPmtAmt).toFixed(2)})<br>
                             Loan Term: ${loanLength} years<br>
                             Interest Rate: ${(interestRate * 100).toFixed(2)}%`;
    space.appendChild(loanDetails);
    
    function Amortization(interestRate, remainderLoan, loanLength) {
        let monthlyInterestRate = interestRate / 12;
        let numberOfPayments = loanLength * 12;
        let monthlyPayment = (remainderLoan * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        
        let result = document.createElement('p');
        result.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
        space.appendChild(result);
        
        for (let i = 1; i <= numberOfPayments; i++) {
            let interestPayment = remainderLoan * monthlyInterestRate;
            let principalPayment = monthlyPayment - interestPayment;
            remainderLoan -= principalPayment;
            
            let paymentDetail = document.createElement('p');
            paymentDetail.innerHTML = `<strong>Month ${i}:</strong><br>
                                       Payment: $${monthlyPayment.toFixed(2)}<br>
                                       Principal: $${principalPayment.toFixed(2)}<br>
                                       Interest: $${interestPayment.toFixed(2)}<br>
                                       Remaining Balance: $${remainderLoan.toFixed(2)}`;
            space.appendChild(paymentDetail);
            
            if (remainderLoan <= 0) {
                let uhOh = document.createElement('p');
                uhOh.textContent = "Uh oh";
                space.appendChild(uhOh);
                break;
            }
        }
    }

    Amortization(interestRate, remainderLoan, loanLength);
});
