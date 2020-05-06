<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Exception class. */
require 'vendor/phpmailer/phpmailer/src/Exception.php';

/* The main PHPMailer class. */
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';

/* SMTP class, needed if you want to use SMTP. */
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

// Load Composer's autoloader
require 'vendor/autoload.php';




if (isset($_POST['submit'])) {

    try {
        //Server settings
        $email = new PHPMailer(TRUE);
        $email->isSMTP();                  // Enable verbose debug output
                                                   // Send using SMTP
        $email->Host       = 'tls://smtp.gmail.com';                    // Set the SMTP server to send through
        $email->SMTPAuth   = true;                                   // Enable SMTP authentication
        $email->Username   = 'macintoshleong@gmail.com';                     // SMTP username
        $email->Password   = 'InfinityWorld2020';                               // SMTP password
        $email->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $email->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    
        //Recipients
        $email->setFrom($_POST['email'], 'Mailer');
        $email->addAddress('csleong@alphaus.cloud', 'Csleong');     // Add a recipient   // Name is optional
        $email->addReplyTo('csleong@alphaus.cloud', 'Information');
    
        // Attachments
    
        // Content
        $email->isHTML(true);                                  // Set email format to HTML
        $email->Subject = 'Here is the subject';
        $email->Body    = 'This is the HTML message body <b>in bold!</b>';
        $email->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
        $email->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$email->ErrorInfo}";
    }

}

else {
    echo "Not detected";
}
?> 
 