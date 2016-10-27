<?php

$ans = array(
'status' => 'failed',
'text' => 'Невозможно отправить сообщение',
);

if ($_POST['email'] != '' && $_POST['message'] !='') {
		
	$subject = 'Сообщение с сайта Kosmetic.ru';
    $mess =  substr(htmlspecialchars(trim($_POST['message'])), 0, 1000000);
   
    $to = 'test@test.ru';
  
    $from=substr(htmlspecialchars(trim($_POST['email'])), 0, 1000000);
  

    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: Отправитель <$from>\r\n"; 


    if (mail($to, $subject, $mess, $headers)){
    	
    	$ans['status'] = 'success';
	    $ans['text'] = 'Сообщение отправлено!';	   
    };  
    

   	echo json_encode($ans);
   	die();
} 


$ans['text'] = 'Невозможно отправить сообщение. Заполниете все поля';
echo json_encode($ans);