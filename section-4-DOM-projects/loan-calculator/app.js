// listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
    // hide results
    document.getElementById('results').style.display = 'none';

    // show loader on click
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);
    e.preventDefault();
});

// calculate results function
function calculateResults() {
    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const prinicipal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // calculate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (prinicipal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (
            monthly * calculatedPayments -
            prinicipal
        ).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';

    } else {
        showError('check your numbers!');
    }
}

// show error function

function showError(error) {
  document.getElementById('loading').style.display = 'none';// hide loader

  document.getElementById('results').style.display = 'none'; // hide results 


    // create div
    const errorDiv = document.createElement('div');
    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errorDiv.className = 'alert alert-danger';
    // create text node & append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // window object set timeout method
    // clear error after 3 seconds
    // 2 params function , time in miliseconds
    setTimeout(clearError, 3000);
}

// clear err function
function clearError() {
    document.querySelector('.alert').remove();
}
