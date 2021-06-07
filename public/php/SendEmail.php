<?php
// ini_set("SMTP", "mail.erwinata.com");
// ini_set("smtp_port","465");
// ini_set("sendmail_from", "yoshi@erwinata.com");
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

$to = "yoshi.dharman@ti.ukdw.ac.id";
$subject = "Test mail";
$message = "Hello! This is a simple email message.";
$from = "Winatang <person1@gmail.com>";
$headers = "From:" . $from;
$retval = mail($to,$subject,$message,$headers);
   if( $retval == true )  
   {
      echo "Message sent successfully...";
   }
   else
   {
      echo "Message could not be sent...";
   }
?>