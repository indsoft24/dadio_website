<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = strip_tags($input['name']);
    $email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
    $subject = strip_tags($input['subject']);
    $message = strip_tags($input['message']);

    // --- YOUR GMAIL SMTP CREDENTIALS ---
    $to = "indsoft24@gmail.com";
    $smtp_user = "indsoft24@gmail.com";
    $smtp_pass = "ynfdehndwirfchtx"; // Your App Password
    
    $email_subject = "HeyyPal Contact: $subject from $name";
    $email_body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

    // --- RAW SMTP LOGIC (No Library Required) ---
    function send_smtp_email($to, $subject, $body, $user, $pass) {
        $host = "ssl://smtp.gmail.com";
        $port = 465;
        $timeout = 30;

        $socket = stream_socket_client($host . ":" . $port, $errno, $errstr, $timeout);
        if (!$socket) return false;

        $commands = [
            "EHLO " . $_SERVER['HTTP_HOST'] . "\r\n",
            "AUTH LOGIN\r\n",
            base64_encode($user) . "\r\n",
            base64_encode($pass) . "\r\n",
            "MAIL FROM: <$user>\r\n",
            "RCPT TO: <$to>\r\n",
            "DATA\r\n",
            "To: $to\r\nSubject: $subject\r\n\r\n$body\r\n.\r\n",
            "QUIT\r\n"
        ];

        foreach ($commands as $cmd) {
            fputs($socket, $cmd);
            $resp = fgets($socket, 512);
        }
        
        fclose($socket);
        return true;
    }

    if (send_smtp_email($to, $email_subject, $email_body, $smtp_user, $smtp_pass)) {
        http_response_code(200);
        echo json_encode(["message" => "Message sent via Gmail SMTP!"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "SMTP Connection Failed."]);
    }
}
?>
