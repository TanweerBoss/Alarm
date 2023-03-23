# Alarm
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Alarm Clock</title>
    <link rel="stylesheet" href="Alarm.css">
</head>
<body>
    
    <h1>Alarm Clock</h1>
    <h3><p>Current time: <span id="currentTime"></span></p></h3>
  <h3><label for="alarmTime" >Enter alarm time:</label>
  <input type="time" id="alarmTime">
  <button onclick="setAlarm()">Set Alarm</button></h3>
  <ul id="alarmsList"></ul>
  <script src="Alarm.js"></script>
  

    
</body>
</html>
