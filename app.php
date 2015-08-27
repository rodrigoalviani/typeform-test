<?php
$api = "http://aerial-valor-93012.appspot.com/";

$ret = file_get_contents("{$api}/challenge");
if ($ret) {
	$json = json_decode($ret, true);

	$retFinal = file_get_contents("{$api}/challenge/{$json['token']}/" . array_sum($json['values']));
	if ($retFinal) {
		$retFinalArray = json_decode($retFinal, true);
		echo "Whats a Mamon favourite food?\n{$retFinalArray['answer']}\n";
	} else {
		echo "{$api} is offline?\n";
	}
} else {
	echo "{$api} is offline?\n";
}