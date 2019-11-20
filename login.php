<?php

$string .= "{";

foreach($_GET AS $key => $value) {
    $string .= "\"$key\" : \"$value\", ";
}

$string = substr($string, 0, strlen($string) - 2);

$string .= "}";

echo $string;