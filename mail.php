<?php
if (isset($_POST['submit'])) {
    $to = $_POST['email'];
    $from = "spaceman@hotmail.my";
    $firstname = "Chee Seng";
    $lastname = "Leong";
    $subject = "Testing";
    $subject2 = "Confirm this";
    $message = $firstname . " " . $lastname . " " . "wrote the following:" . "\n\n" . "Hi there Chee Seng";

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    header('Location: index.html');
}
?> 
 