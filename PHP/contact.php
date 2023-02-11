<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-type: application/json');

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['message'])){
        if(!empty($_POST['firstname']) && !empty($_POST['lastname']) && !empty($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) && !empty($_POST['message'])){
            
            // Récupération des données
            $firstName = htmlspecialchars($_POST['firstname']);
            $lastName  = htmlspecialchars($_POST['lastname']);
            $message   = htmlspecialchars($_POST['message']);
            $date      = htmlspecialchars($_POST['date']);

            // Infos d'envoi
            $fromMail     = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
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
               	echo json_encode(array(
                "sent" => true
                ));
                echo json_encode($_POST);
            } else {
                echo json_encode(["responseServer"=>true, "responseMail"=> false]);
            }
        } else {
            echojson_encode(["sent" => false, "message" => "Something went wrong"]);
        }
    } else {
        echo json_encode(["responseServer" => false, "responseMessage" => "Rien n'a été reçu"]);
    }
?>