<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set up email parameters
  $to = 'n.bouzayani@ingeniousenergy.ca';
  $subject = 'New Contact Form Submission';
  $body = "Client Email: " . $_POST['email'] . "\n"
    . "Subject: " . $_POST['subject'] . "\n\n"
    . "Client Message: " . "\n" . $_POST['message'];

  // Send the email
  if (mail($to, $subject, $body)) {
    
    echo json_encode(['success' => true]);
  } else {
    // Return an error response
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
  }
}
?>
