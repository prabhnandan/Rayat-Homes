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
        Username: "singhprabhnandan@gmail.com",
        Password: "0D23615F1D9837EB4C956A04341A61DEAD0A",
        To: 'prabhnandansingh@yahoo.com',
        From: "singhprabhnandan@gmail.com",
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
