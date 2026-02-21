$body = file_get_contents("php://stdin");
$secret = "myagreedsecret";
$signature = hash_hmac("sha256", $body, $secret);

if ($signature != $_SERVER['HTTP_X_TEBEX_SIGNATURE']) {
    return "Invalid signature";
}
