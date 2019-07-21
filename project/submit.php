<?php
$member = fopen("member.txt", "r") or die("File Not Found");
$infoArray = array();
session_start();
$id = $_POST["ID"];
$pw = $_POST["PW"];
$_SESSION["id"] = $id;
$_SESSION["pw"] = $pw;

while (!feof($member)) {
    $line = fgets($member);
    $inform = explode("|", $line);
    $infoArray[$inform[0]] = $inform[1];
}

foreach ($infoArray as $key => $value) {
    if (strcmp($id, $key) != 0) {
        print "아이디가 존재하지 않습니다.";
    } else if (strcmp($id, $key) == 0 && strcmp($pw, trim($value)) != 0) {
        print "비밀번호가 틀렸습니다.";
    } else if (strcmp($id, $key) == 0 && strcmp($pw, trim($value)) == 0) {
        header("location:" . "./main.php");
        break;
    }
}
