window.onload = function(){

let buses = [
    {
      name: "Thor",
      age: 1500,
      planet: "Asgard",
      height: "6.3",
    }
  ];

  if (localStorage.getItem("buses") == null) {
    let stringbus= JSON.stringify(buses);
    localStorage.setItem("buses",stringbus);
  }

};

function display(superarray = undefined) {
  let tabledata = "";
  let bus;
  if (superarray == undefined) {
    bus = JSON.parse(localStorage.getItem("buses"));
  } else {
    bus = superarray;
  }

  buses.forEach(function (bus, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.passengerCapacity}
      <td>
      <button onclick='deleteSuperhero(${index})'>delete</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  //document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    document.getElementById("trows").innerHTML = tabledata;
}
display();

function add(e) {
    e.preventDefault()  
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let dest = document.getElementById("dest").value;
    let numb = document.getElementById("numb").value;
    let pass = document.getElementById("pass").value;
 
   bus.name = name;
   bus.source=source;
   bus.destination=dest;
   bus.number=Number(numb);
   bus.passengerCapacity=Number(pass);

    let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
   localStorage.setItem("buses",JSON.stringify(buses));

  display(buses);

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("dest").value = "";
  document.getElementById("numb").value = "";

  document.getElementById("pass").value = "";


}




function searchByDest() {
  let searchValue = document.getElementById("searchDest").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return (
      bus.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}