const users = [
  {
    name: "User 500",
    occupation: "Occupation 1",
    test: 1,
  },
  {
    name: "User 2",
    occupation: "Occupation 2",
    test: 1,
  },
  {
    name: "User 3",
    occupation: "Occupation 3",
    test: 1,
  },
  {
    name: "User 1",
    occupation: "Occupation 1",
    test: 1,
  },
  {
    name: "User 2",
    occupation: "Occupation 2",
    test: 1,
  },
  {
    name: "User 3",
    occupation: "Occupation 3",
    test: 1,
  },
];

const userTable = drawTable2(users);
const userList = document.getElementById("userList");

userList.append(userTable);

function drawTable(dataList) {
  const table = document.createElement("table");
  let trs = [];

  dataList.forEach((data) => {
    const tr = document.createElement("tr");
    let tds = [];

    Object.keys(data).forEach((key) => {
      const td = document.createElement("td");
      td.innerText = data[key];
      tds.push(td);
    });

    tds.forEach((td) => tr.append(td));
    trs.push(tr);
  });

  trs.forEach((tr) => table.append(tr));
  return table;
}

function drawTable2(dataList) {
  const table = document.createElement("table");

  dataList.forEach((data) => {
    const tr = document.createElement("tr");

    Object.keys(data).forEach((key) => {
      const td = document.createElement("td");
      td.innerText = data[key];
      tr.append(td);
    });

    table.append(tr);
  });

  return table;
}
