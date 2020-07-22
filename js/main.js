function validateForm() {
  let task = document.getElementById("task").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  if (task == "" && date == "" && time == "") {
    alert("please fill all form fields");
    return false;
  } else {
    addData();
  }
}

let myArray = new Array();

const addData = () => {
  getData();
  myArray.push({
    task: document.getElementById("task").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  });
  localStorage.setItem("myStorage", JSON.stringify(myArray));
  showData();
  console.log("data added");
};

const getData = () => {
  let str = localStorage.getItem("myStorage");
  if (str != null) {
    return (myArray = JSON.parse(str));
  }
};

const showData = () => {
  getData();

  let table = document.getElementById("myTable");
  let x = table.rows.length;
  while (--x) {
    table.deleteRow(x);
  }
  for (let i = 0; i < myArray.length; i++) {
    let row = table.insertRow(-1);
    let td1 = row.insertCell(0);
    let td2 = row.insertCell(1);
    let td3 = row.insertCell(2);
    let td4 = row.insertCell(3);
    let close = document.createElement("button");
    let closetxt = document.createTextNode("click to check task status");
    close.appendChild(closetxt);
    close.setAttribute("class", "close");
    close.addEventListener("click", function check(r) {
      if (close.innerHTML === "NOT DONE !") {
        close.innerHTML = "DONE";
        close.style.backgroundColor = "green";
        close.style.color = "white";
      } else {
        close.innerHTML = "NOT DONE !";
        close.style.backgroundColor = "red";
        close.style.color = "white";
        close.style.padding = "0.8em";
      }
    });

    td1.innerHTML = myArray[i].task;

    td2.innerHTML = myArray[i].date;

    td3.innerHTML = myArray[i].time;

    td4.appendChild(close);
  }
};

const deleteData = () => {
  localStorage.clear();
  console.log("data deleted");
};

/*function addRowHandlers() {
  var table = document.getElementById("tableId");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function (row) {
      return function () {
        var cell = row.getElementsByTagName("td")[0];
        var id = cell.innerHTML;
        alert("id:" + id);
      };
    };

    currentRow.onclick = createClickHandler(currentRow);
  }
}
window.onload = addRowHandlers();*/
