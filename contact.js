function emailSend() {

    var userName = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;
    var form = document.forms.item(0);
    var $email_message = "\
        <body>\
            <h2>New message from contact form</h2>\
            <p><strong>Name:</strong> "+ userName + "</p>\
            <p><strong>Email:</strong> " + email + "</p>\
            <p><strong>Message:</strong>" + message + "</p>\
        </body>\
    ";
    var messageBody = $email_message

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "contact@rayathomes.co.nz",
        Password: '93C6C54EBDAD4FA6B1E22AB2680D3E0CE4BD',
        To: 'contact@rayathomes.co.nz',
        From: "contact@rayathomes.co.nz",
        Subject: "New enquiry from " + userName,
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Form Submitted", "", "success");
                form.reset();
            }
            else {
                swal("Error", "Please try again later!", "error");
            }
        }
    );
}
