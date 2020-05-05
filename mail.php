<?php 

if(!isset($_POST['email'])) {
    died("Error");
} 
    $email_to = "macintoshleong@gmail.com";
    $email_subject = "A Friendly Postcard";
    
    function died($error) {
        // error code goes here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error. "<br></br>";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
    
    $email_from = "spaceman@gmail.com";
    $email = $_POST['email'];
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    
    $email_message = "This is the email".clean_string($email)."";
    
    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>
