let player_name = "";
let total_clicks = 0;
const openPrompt = () => {
  player_name = prompt("Enter your name");
  console.log("player name", player_name);
  if (!player_name) {
    openPrompt();
  }
  document.querySelector("#second-btn").removeAttribute("disabled");
  document.querySelector("#first-btn").setAttribute("disabled", "disabled");
  document.querySelector("#first-btn").style.backgroundColor = "gray";
  document.querySelector("#second-btn").style.backgroundColor = "#0094ff";
  return;
};

let count = 0;
const TIME_LIMIT = 5;
let firstClick = false;
let timesUp = false;
document.querySelector(".time-tick").innerHTML = TIME_LIMIT;
const clickStarted = () => {
  if (count == 0) {
    //start timer
    firstClick = true;
    timesUp = false;
    count++;
    document.querySelector(".counter").innerHTML = count;
    timerHandler();
  } else if (!timesUp) {
    count++;
    document.querySelector(".counter").innerHTML = count;
  }
};
//code for setting timesup is true
let timeLeft;
let records = [];
timeLeft = TIME_LIMIT;
const timerHandler = () => {
  console.log("inside timer handler");
  const interval_time = setInterval(() => {
    timeLeft--;
    document.querySelector(".time-tick").innerHTML = timeLeft;
    if (timeLeft == 0) {
      timesUp = true;
      clearInterval(interval_time);
      records.unshift({ player_name: player_name, total_clicks: count });
      console.log(records);
      let stringOfRecords = "";
      records.map((item) => {
        stringOfRecords +=
          "   <tr>" +
          " <td>" +
          item.player_name +
          "</td>" +
          "<td>" +
          item.total_clicks +
          "</td>" +
          "</tr>";
      });
      console.log(stringOfRecords);
      document.querySelector("#player").innerHTML = stringOfRecords;
      document.querySelector("#second-btn").style.backgroundColor = "gray";
      document.querySelector("#first-btn").style.backgroundColor = "#0094ff";
      document
        .querySelector("#second-btn")
        .setAttribute("disabled", "disabled");
      document.querySelector("#first-btn").removeAttribute("disabled");
      count = 0;
      document.querySelector(".counter").innerHTML = count;
      timeLeft = TIME_LIMIT;
      document.querySelector(".time-tick").innerHTML = timeLeft;
    }
  }, 1000);
};
