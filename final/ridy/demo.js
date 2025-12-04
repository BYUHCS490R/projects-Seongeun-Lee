 document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const state = document.getElementById('state').value;

    if (!fullname || !email || !state) {
    alert('Please fill in all required fields.');
    return;
    }

    const formData = {
    name: fullname,
    email: email,
    state: state
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'submit.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Form submitted successfully!');
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //document.getElementById('myform').reset(); 
            document.getElementById('myform').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert('An error occurred while submitting the form.');
        }
    };
    xhr.send();
});