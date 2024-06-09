<?php
declare(strict_types=1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Répondre aux requêtes OPTIONS pour les pré-vérifications CORS
    header("HTTP/1.1 204 No Content");
    exit;
}

$workImage = isset($_GET['workImage']) ? $_GET['workImage'] : '';
$dirPath = "../public/media/work/$workImage/screens";

// Vérification du répertoire
if ($dirPath === false || !is_dir($dirPath)) {
    echo json_encode([
        'directory' => $dirPath,
        'fileCount' => 0,
        'message' => 'Directory does not exist.'
    ]);
    exit;
}

$files = glob($dirPath . "/*");
$filecount = $files ? count($files) : 0;

echo json_encode([
    'directory' => $dirPath,
    'fileCount' => $filecount,
    'message' => 'Directory exists and files counted.'
]);