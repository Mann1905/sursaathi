<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Initialize response
$response = [];

try {
    $mail = new PHPMailer(true);

    // SMTP config
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';           // your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'sursaathi.music@gmail.com';     // your email
    $mail->Password = 'tpat vrof brob memy';    // your app password here
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('sursaathi.music@gmail.com', 'Your Name');

    // Determine route based on a POST field 'route' (newsletter, contact, donation)
    $route = $_POST['route'] ?? '';

    if ($route === 'newsletter') {
        // Newsletter form
        $toEmail = $_POST['email'] ?? '';
        if (!$toEmail) {
            throw new Exception("Email is required");
        }

        $mail->addAddress('sursaathi.music@gmail.com');
        $mail->Subject = 'Newsletter Signup';
        $newBodyText = "New Signup: $toEmail";
        $mail->Body = nl2br(htmlspecialchars($newBodyText));
        $mail->send();

        $response['message'] = 'Email sent successfully!';

    } elseif ($route === 'contact' || $route === 'donation') {
        // Contact or Donation form
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $phone = $_POST['phone'] ?? '';
        $message = $_POST['message'] ?? '';

        // Send to your email (sursaathi.music@gmail.com)
        $mail->addAddress('sursaathi.music@gmail.com');
        $mail->Subject = $route === 'contact' ? 'New Contact Form Submission' : 'New Donation Form Submission';

        $bodyText = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
        $mail->Body = nl2br(htmlspecialchars($bodyText));

        // Handle attachment if exists
        if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] == UPLOAD_ERR_OK) {
            $uploadTmpPath = $_FILES['attachment']['tmp_name'];
            $uploadName = $_FILES['attachment']['name'];
            $mail->addAttachment($uploadTmpPath, $uploadName);
        }

        $mail->send();
        $response['message'] = $route === 'contact' ? 'Contact form sent successfully!' : 'Donation submitted successfully!';

    } else {
        throw new Exception("Invalid route");
    }

} catch (Exception $e) {
    http_response_code(500);
    $response['error'] = 'Mailer Error: ' . $e->getMessage();
}

echo json_encode($response);
