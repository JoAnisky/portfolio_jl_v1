<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-headers: Content-Type, Access-Control-Allow-headers, Authorization, X-Requested-With");

    $data = json_decode(file_get_contents("php://input"));

    // Validation des entrées
    $firstName = filter_var($data->firstname, FILTER_SANITIZE_STRING);
    $lastName = filter_var($data->lastname, FILTER_SANITIZE_STRING);
    $email = filter_var($data->email, FILTER_VALIDATE_EMAIL);
    $message = filter_var($data->message, FILTER_SANITIZE_STRING);

    if(isset($firstName) && isset($lastName) && isset($email) && isset($email)){
        if(!empty($firstName) && !empty($lastName) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($email)){
            
            // Échappement des entrées
            $firstName = htmlspecialchars($firstName);
            $lastName = htmlspecialchars($lastName);
            $userEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
            $message = htmlspecialchars($message);

            // Infos d'envoi
            $receiver       = 'some@from.address';

            // Message
            $sender  = $lastName . ' ' . $firstName . '< ' . $userEmail.' >';
            $headers  = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $headers .= 'From: '.$sender . "\r\n";
            $subject  = 'Contact depuis le Portfolio';
            $emailMessage = '
                        <p><b>Nom : </b></p><span>' .$firstName . '</span></p>
                        <p><b>Prénom : </b><span>' .$lastName . '</span></p>
                        <p><b>Email</b> : ' .$userEmail. '</p>
                        <p><b>Message</b> : ' .$message. ' </p>';

            $result = mail($receiver, $subject, $emailMessage , $headers);
            if ($result === true){
                echo json_encode(["responseServer"=> true, "responseMail"=> true, "responseMessage" => "Votre message a bien été envoyé, merci"]);                
            } else {
                
                echo json_encode(["responseServer"=> true, "responseMail"=> false, "responseMessage" => "données reçues mail NON envoyé"]);
            }
        } else {
            echo json_encode(["responseServer" => false, "responseMessage" => "Données vides"]);
        }
    } else {
        echo json_encode(["responseServer" => false, "responseMessage" => "Rien reçu par POST"]);
    }
?>