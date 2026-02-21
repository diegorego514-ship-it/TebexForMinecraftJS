$json = file_get_contents('php://input');
$secret = "0d45982a10e3a072d0c1261c55dd9918";
$signature = hash_hmac('sha256', hash('sha256', $json), $secret);