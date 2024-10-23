# React Portfolio

## Contact Form

The contact form uses an embedded google form to collect the contents of the form, and save it to a spreadsheet, as well as automatically email me the code for the form. The GoogleScript code is the following:

```gs
function sendEmailNotification(e) {
    // Get the submitted form data from the event object
    var responses = e.values;

    // Adjust the field indices based on the order in your Google Form
    var name = responses[1]; // Assuming the name is in the first form field (after the timestamp)
    var email = responses[2]; // Assuming the email is in the second form field
    var message = responses[3]; // Assuming the message is in the third form field

    // Create the email body
    var emailBody =
        "New Contact Form Submission:\n\n" +
        "Name: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Message: " +
        message +
        "\n\n";

    // Send the email (replace "your-email@example.com" with your actual email address)
    MailApp.sendEmail({
        to: "benjrice546@gmail.com", // Replace with your own email
        subject: "New Contact Form Submission",
        body: emailBody,
    });
}

function onFormSubmit(e) {
    sendEmailNotification(e); // Call the function to send an email
}
```
