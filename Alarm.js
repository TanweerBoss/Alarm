 // Update the current time every second
  const alarms = [];

    function updateTime() {
      // Get the current time
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      // Update the web page with the current time
      const currentTimeElement = document.getElementById("currentTime");
      currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;

      // Check if any alarms have expired
      for (let i = 0; i < alarms.length; i++) {
        const alarm = alarms[i];
        if (now >= alarm.time) {
          alert(alarm.message);
          alarms.splice(i, 1);
          updateAlarmsList();
        }
      }
    }

    setInterval(updateTime, 1000);

    function setAlarm() {
      // Get the alarm time input
      const alarmTime = document.getElementById("alarmTime").value;

      // Convert the input into a Date object
      const now = new Date();
      const [hours, minutes] = alarmTime.split(":");
      const alarmTimeMs = (hours * 60 + minutes * 1) * 60 * 1000;
      const alarmTimeDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

      // Create the alarm object
      const alarm = {
        time: alarmTimeDate,
        message: `I LOVE YOU MY LOVE, MY JAAN FARHA at ${alarmTime}`
      };

      // Add the alarm to the list
      alarms.push(alarm);
      updateAlarmsList();
    }

    function deleteAlarm(index) {
      alarms.splice(index, 1);
      updateAlarmsList();
    }

    function updateAlarmsList() {
      const alarmsList = document.getElementById("alarmsList");
      alarmsList.innerHTML = "";

      for (let i = 0; i < alarms.length; i++) {
        const alarm = alarms[i];

        const listItem = document.createElement("li");
        listItem.textContent = `${alarm.message} `;
        alarmsList.appendChild(listItem);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          deleteAlarm(i);
        });
        listItem.appendChild(deleteButton);
      }
    }






