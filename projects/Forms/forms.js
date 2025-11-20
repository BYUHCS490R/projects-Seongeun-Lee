 document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fullname = document.getElementById('fname').value;
    const password = document.getElementById('pass').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const date = document.getElementById('date').value;
    const activity = document.getElementById('activity').value;
    const comment = document.getElementById('comment').value;

    if (!fullname || !password || !phone || !age || !date) {
        alert('Please fill in all required fields.');
        return;
    }

    if (age < 20 || age > 35) {
        alert('Age must be between 20 and 35.');
        return;
    }

    if (comment.length > 300) {
        alert('300 characters maximum allowed.');
        return;
    }

    const formData = {
    name: fullname,
    pass: password,
    phone: phone,
    age: age,
    date: date,
    activity: activity,
    comments: comment
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