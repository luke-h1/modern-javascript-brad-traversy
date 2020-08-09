document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

// load single customer
function loadCustomer(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText)
            // document.getElementById('customer').innerHTML = this.responseText;
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul> 
            <li>ID: ${customer.id}</li> 
            <li>NAME: ${customer.name}</li>
            <li>COMPANY ${customer.company}</li>
            <li>PHONE ${customer.phone}</li>
            </ul> 
            `;
            document.getElementById('customer').innerHTML = output;
        }
    };
    xhr.open('GET', 'customer.json', true);
    xhr.send();
}

// load customers
function loadCustomers(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function (customer) {
                output += `
        <ul>
            <li>ID: ${customer.id}</li> 
            <li>NAME: ${customer.name}</li> 
            <li>COMPANY: ${customer.company}</li> 
            <li>PHONE: ${customer.phone}</li> 
        </ul>
        `;
            }); 
            document.getElementById('customers').innerHTML = output; 
        }
    };
    xhr.send();

}
