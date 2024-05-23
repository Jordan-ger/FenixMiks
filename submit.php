<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $city = filter_var($_POST['city'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $to = "sales@fenixmiks.ru";
    $subject = "Новая заявка от клиента";
    $body = "Email: $email\nИмя: $name\nТелефон: $phone\nГород: $city\nСообщение: $message";

    $headers = "From: no-reply@fenixmiks.ru\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Ваше сообщение отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>