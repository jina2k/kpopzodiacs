<?php

  $con = mysqli_connect('localhost','root','','kpop');
  if (!$con) {
    echo "Could not connect to the database" . mysqli_error($con);
  }
  $mmonth = '';
  $dday = '';
  $yyear = '';
  if (isset($_POST['month'])) {
    $mmonth = $_POST['month'];
  }
  if (isset($_POST['day'])) {
    $dday = $_POST['day'];
  }
  if (isset($_POST['year'])) {
    $yyear = $_POST['year'];
  }
  $entire = $yyear . '-' . $mmonth . '-' . $dday;

  $zodiac1 = '';
  $zodiac2 = '';
  $finalzod = '';
  if ($mmonth == "01") {
    $zodiac1 = "Capricorn";
    $zodiac2 = "Aquarius";
    if (intval($dday) < 20) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "02") {
    $zodiac1 = "Aquarius";
    $zodiac2 = "Pisces";
    if (intval($dday) < 19) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "03") {
    $zodiac1 = "Pisces";
    $zodiac2 = "Aries";
    if (intval($dday) < 21) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "04") {
    $zodiac1 = "Aries";
    $zodiac2 = "Taurus";
    if (intval($dday) < 20) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "05") {
    $zodiac1 = "Taurus";
    $zodiac2 = "Gemini";
    if (intval($dday) < 21) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "06") {
    $zodiac1 = "Gemini";
    $zodiac2 = "Cancer";
    if (intval($dday) < 22) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "07") {
    $zodiac1 = "Cancer";
    $zodiac2 = "Leo";
    if (intval($dday) < 23) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "08") {
    $zodiac1 = "Leo";
    $zodiac2 = "Virgo";
    if (intval($dday) < 23) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "09") {
    $zodiac1 = "Virgo";
    $zodiac2 = "Libra";
    if (intval($dday) < 23) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "10") {
    $zodiac1 = "Libra";
    $zodiac2 = "Scorpio";
    if (intval($dday) < 24) {
      $finalzod = $zodiac1;
    }
  }
  else if ($mmonth == "11") {
    $zodiac1 = "Scorpio";
    $zodiac2 = "Sagitarius";
    if (intval($dday) < 22) {
      $finalzod = $zodiac1;
    }
  }
  else {
    $zodiac1 = "Sagittarius";
    $zodiac2 = "Capricorn";
    if (intval($dday) < 22) {
      $finalzod = $zodiac1;
    }
  }
  if ($finalzod == "") {
    $finalzod = $zodiac2;
  }

  $allresults = [];
  $stmt = $con->prepare("
  SELECT
    *
  FROM
    idols
  WHERE
    idols.birthday LIKE CONCAT('%-', ?,'-%')");
  $stmt->bind_param('s', $mmonth);
  $stmt->execute();

  $monthResult = [];
  foreach ($stmt->get_result() as $row) {
    $monthResult[] = ['stageName' => $row['stageName'], 'birthday' => $row['birthday'], 'url' => $row['url']];
  }
  $allresults['month'] = $monthResult;

  $stmt2 = $con->prepare("
  SELECT
    *
  FROM
    idols
  WHERE
    idols.birthday LIKE CONCAT('%-', ?, '-', ?)");
  $stmt2->bind_param('ss', $mmonth, $dday);
  $stmt2->execute();

  $dayResult = [];
  foreach ($stmt2->get_result() as $row) {
    $dayResult[] = ['stageName' => $row['stageName'], 'birthday' => $row['birthday'], 'url' => $row['url']];
  }
  $allresults['day'] = $dayResult;

  $stmt3 = $con->prepare("
  SELECT
    *
  FROM
    idols
  WHERE
    idols.birthday LIKE CONCAT(?, '-%')");
  $stmt3->bind_param('s', $yyear);
  $stmt3->execute();

  $yearResult = [];
  foreach ($stmt3->get_result() as $row) {
    $yearResult[] = ['stageName' => $row['stageName'], 'birthday' => $row['birthday'], 'url' => $row['url']];
  }
  $allresults['year'] = $yearResult;

  $stmt4 = $con->prepare("
  SELECT
    idols.stageName,
    idols.birthday,
    idols.url
  FROM
    idols,
    idolZodiacs
  WHERE
    idols.url = idolZodiacs.url
    and idolZodiacs.zodiac = ?");
  $stmt4->bind_param('s', $finalzod);
  $stmt4->execute();

  $zodiacResult = [];
  foreach ($stmt4->get_result() as $row) {
    $zodiacResult[] = ['stageName' => $row['stageName'], 'birthday' => $row['birthday'], 'url' => $row['url']];
  }
  $allresults['Zodiac('.$finalzod.')'] = $zodiacResult;

  //now we have monthResult, dayResult, yearResult, and zodiacResult
  echo json_encode($allresults);    
?>