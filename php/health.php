<?php
declare(strict_types=1);

header('Content-Type: application/json');

// vérification légère (extension PHP chargée)
$checks = [
    'php_version' => PHP_VERSION,
    'extensions' => [
        'json' => extension_loaded('json'),
    ],
];

// Si une extension critique manque → KO
foreach ($checks['extensions'] as $ext => $ok) {
    if (!$ok) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => "Missing PHP extension: $ext",
            'checks' => $checks,
        ]);
        exit;
    }
}

// Health OK
echo json_encode([
    'status' => 'ok',
    'message' => 'API is healthy',
    'checks' => $checks,
]);
