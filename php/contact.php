<?php declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: https://www.jonathanlore.fr');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée']);
    exit;
}

if (!file_exists(__DIR__ . '/vendor/autoload.php')) {
    http_response_code(500);
    echo json_encode(['error' => 'PHPMailer non installé']);
    exit;
}

require __DIR__ . '/vendor/autoload.php';

$data = json_decode(file_get_contents('php://input'), true) ?? [];

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

$errors = [];

// Validation du nom (combinaison firstname + lastname)
if (empty($name) || strlen($name) < 4) {
    $errors[] = 'Le nom doit contenir au moins 4 caractères';
}

if (!empty($name) && !preg_match('/^[a-zA-ZÀ-ÿ\s\-\.\']+$/u', $name)) {
    $errors[] = 'Le nom contient des caractères invalides';
}

// Validation de l'email
if (empty($email)) {
    $errors[] = 'L\'email est obligatoire';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Format d\'email invalide';
} elseif (strlen($email) > 255) {
    $errors[] = 'L\'email est trop long';
}

// Validation du message
if (empty($message)) {
    $errors[] = 'Le message est obligatoire';
} elseif (strlen($message) < 10) {
    $errors[] = 'Le message doit contenir au moins 10 caractères';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['errors' => $errors]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = getenv('SMTP_HOST') ?: 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = getenv('SMTP_USER');
    $mail->Password = getenv('SMTP_PASSWORD');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = (int)(getenv('SMTP_PORT') ?: 465);

    if (!$mail->Username || !$mail->Password) {
        throw new Exception('Identifiants SMTP non configurés');
    }

    $mail->setFrom($mail->Username, 'Formulaire Contact');
    $mail->addAddress(getenv('CONTACT_EMAIL') ?: $mail->Username, 'Jonathan');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'Nouveau message depuis le formulaire de contact';
    $mail->Body = "
        <h3>Nouveau message</h3>
        <p><strong>Nom :</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Message :</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
    ";
    $mail->AltBody = "Nom: {$name}\nEmail: {$email}\nMessage:\n{$message}";

    $mail->send();

    http_response_code(200);
    echo json_encode(['message' => 'Votre message a été envoyé avec succès']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur lors de l\'envoi du message. Réessayez ultérieurement']);
}