<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $data = json_decode(file_get_contents("php://input"));

    $firstName = $data->firstname;
    $lastName = $data->lastname;
    $email = $data->email;
    $message = $data->message;

    // ... 
    // ici, vous pouvez effectuer les opérations nécessaires pour enregistrer ces données, telles que les stocker dans une base de données ou les envoyer par e-mail
    // ... 

    echo json_encode(array("message" => "Les données ont été enregistrées avec succès."));
    echo json_encode(array("nom" => $firstName, "prénom" => $lastName, "email" => $email, "message" => $message));

    if(isset($firstName) && isset($lastName) && isset($email) && isset($email)){
        if(!empty($firstName) && !empty($lastName) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($email)){
            
            // Récupération des données
            $firstName = htmlspecialchars($firstName);
            $lastName  = htmlspecialchars($lastName);
            $message   = htmlspecialchars($email);

            // Infos d'envoi
            $fromMail     = filter_var($email, FILTER_SANITIZE_EMAIL);
            $toMail       = 'anisky5@gmail.com';

            // Message
            $sender  = $lastName . ' ' . $firstName . '< ' . $fromMail.' >';
            $header  = 'MIME-Version: 1.0' . "\r\n";
            $header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $header .= 'From: '.$sender . "\r\n";
            $object  = 'Contact depuis le Portfolio';
            $message = '
                        <p>Message reçu depuis mon Portfolio le ' .$date.'</p>
                        <p><b>Nom : </b></p><span>' .$firstName . '</span>
                        <p><b>Prénom : </b><span>' .$lastName . '</span>
                        <p><b>Email</b> : ' .$fromMail. '</p>
                        <b>Message</b> : ' .$message. ' </p>';

            $serverResponse = mail($toMail, $header, $object, $message);
            if ($serverResponse === true){
                echo json_encode(["responseServer"=> true, "responseMail"=> true, "responseMessage" => "données reçues, mail OK"]);                
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