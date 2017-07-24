<?php
	
	require 'config.php';

	$sql = "SELECT cat_name from portalcategories";

	$result = $conn->query($sql);
	$data = "";
	$count = 0;
	if($result->num_rows > 0){
		//output data of each row
		//$data = "<div class = 'catdata'><br>";

		while($row = $result->fetch_assoc()){
			$count++;
			//$data .= "<input type = 'checkbox' id = 'rad" . $count. "' name = 'radopt' value = '" . $row["cat_name"] . "'> ".$row["cat_name"] . "<br>";

			$data .= "<input type = 'checkbox' class = 'checkitem' name = 'radopt" . $count . "' value = '" . $row["cat_name"] . "'> ".$row["cat_name"] . "<br>";

			//echo $count;

		}

		//$data .= "</div>";
	}else{
		echo "0 results";
	}
	echo $data;
	$conn->close();

?>