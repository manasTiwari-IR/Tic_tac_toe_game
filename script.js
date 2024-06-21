let count = 0;
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function addXO(e) {
  e = parseInt(e);
  let T = document.querySelector(`.btn${e}`).querySelector("p").innerHTML;
  if (count % 2 == 0 && count < 9 && T == "") {
    document.querySelector(`.btn${e}`).querySelector("p").innerHTML = "X";
    document.querySelector(`.btn${e}`).querySelector("p").style.fontSize =
      "4rem";
    document.querySelector(`.btn${e}`).querySelector("p").style.opacity = "1";
    document.querySelector(`.btn${e}`).querySelector("p").style.color = "wheat";
    count++;
  } else if (count < 9 && T == "") {
    document.querySelector(`.btn${e}`).querySelector("p").innerHTML = "O";
    document.querySelector(`.btn${e}`).querySelector("p").style.fontSize =
      "4rem";
    document.querySelector(`.btn${e}`).querySelector("p").style.opacity = "1";
    document.querySelector(`.btn${e}`).querySelector("p").style.color =
      "cornsilk";
    count++;
  }
  checkWinner(e);
}

function reset() {
  count = 0;
  for (let i = 1; i <= 9; i++) {
    document.querySelector(`.btn${i}`).querySelector("p").style.fontSize =
      "1rem";
    document.querySelector(`.btn${i}`).querySelector("p").style.opacity = "0";
    document
      .querySelector(`.btn${i}`)
      .querySelector("p").style.backgroundColor =
      "background-color: rgba(0, 0, 0, 0.2);";
    document.querySelector(`.btn${i}`).style.pointerEvents = "all";
    setTimeout(() => {
      document.querySelector(`.btn${i}`).querySelector("p").innerHTML = "";
    }, 200);
  }
  arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (let i = 1; i <= 9; i++) {}
  document.querySelector(".mgs").style.scale = "0";
  setTimeout(() => {
    document.querySelector(".mgs").innerHTML = ``;
    document.querySelector(".resetbtn").style.display = "block";
    document.querySelector(".mgs").style.display = "none";
  }, 200);
}

function checkWinner(x) {
  let i = Math.floor((x - 1) / 3);
  let j = (x - 1) % 3;
  let flag = 0;
  let winner = "";
  let a = 0;
  let b = 0;
  let c = 0;
  arr[i][j] = document.querySelector(`.btn${x}`).querySelector("p").innerHTML;
  if (arr[0][1] == arr[0][0] && arr[0][0] == arr[0][2]) {
    winner = arr[0][0];
    flag = 1;
    a = 1;
    b = 2;
    c = 3;
  } else if (arr[1][1] == arr[1][0] && arr[1][0] == arr[1][2]) {
    winner = arr[1][0];
    flag = 1;
    a = 4;
    b = 5;
    c = 6;
  } else if (arr[2][1] == arr[2][0] && arr[2][0] == arr[2][2]) {
    winner = arr[2][0];
    flag = 1;
    a = 7;
    b = 8;
    c = 9;
  } else if (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) {
    winner = arr[0][0];
    flag = 1;
    a = 1;
    b = 4;
    c = 7;
  } else if (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]) {
    winner = arr[0][1];
    flag = 1;
    a = 2;
    b = 5;
    c = 8;
  } else if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) {
    winner = arr[0][2];
    flag = 1;
    a = 3;
    b = 6;
    c = 9;
  } else if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
    winner = arr[0][0];
    flag = 1;
    a = 1;
    b = 5;
    c = 9;
  } else if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
    winner = arr[0][2];
    flag = 1;
    a = 3;
    b = 5;
    c = 7;
  } else if (count == 9) {
    setTimeout(() => {
      console.log("reset");
      reset();
    }, 4000);
    for (let i = 1; i <= 9; i++) {
      document.querySelector(`.btn${i}`).style.pointerEvents = "none";
    }
    document.querySelector(".resetbtn").style.display = "none";
    document.querySelector(".mgs").style.display = "block";
    setTimeout(() => {
      document.querySelector(".mgs").innerHTML = `Match Draw`;
      document.querySelector(".mgs").style.scale = "1";
    }, 200);
  }

  if (flag == 1) {
    flag = 0;
    for (let i = 1; i <= 9; i++) {
      document.querySelector(`.btn${i}`).style.pointerEvents = "none";
    }
    document.querySelector(".resetbtn").style.display = "none";
    document.querySelector(".mgs").style.display = "block";

    setTimeout(() => {
      if (winner == "X") {
        document.querySelector(".mgs").innerHTML = `Player-1 Wins`;
      } else {
        document.querySelector(".mgs").innerHTML = `Player-2 Wins`;
      }
      document.querySelector(".mgs").style.scale = "1";
    }, 200);
    blink(a, b, c);
  }
}

function blink(a, b, c) {
  let A = setInterval(() => {
    document
      .querySelector(`.btn${a}`)
      .querySelector("p")
      .classList.toggle("blink");
    document
      .querySelector(`.btn${b}`)
      .querySelector("p")
      .classList.toggle("blink");
    document
      .querySelector(`.btn${c}`)
      .querySelector("p")
      .classList.toggle("blink");
    document.querySelector(`.btn${a}`).classList.toggle("blink1");
    document.querySelector(`.btn${b}`).classList.toggle("blink1");
    document.querySelector(`.btn${c}`).classList.toggle("blink1");
  }, 500);
  setTimeout(() => {
    clearInterval(A);
    setTimeout(() => {
      reset();
    }, 700);
  }, 4200);
}
