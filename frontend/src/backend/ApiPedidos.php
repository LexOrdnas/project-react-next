<?php 

require_once('Conn.php');

$select = 'SELECT * FROM request
join product
on product.id_product = request.id_product
join client
on client.id_client = request.id_client';

$result = $con->query($select);
$request = [];

while ($row = mysqli_fetch_assoc($result)) {
    $request[] = $row;
}

echo json_encode($request);
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");