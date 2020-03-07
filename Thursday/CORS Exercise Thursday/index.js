function getAllUsers() {
    fetch("https://laurberg.codes/flow2/api/Person/all")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        populateTable(data);
      });
  }

  const populateTable = data => {
    const dataArray = data.all.map(data => `<tr><td>${data.id}</td><td>${data.fName}</td><td>${data.lName}</td><td>${data.phone}</td></tr>`);
    document.getElementById('tableBody').innerHTML = dataArray.join('');
};

  document.addEventListener("DOMContentLoaded", getAllUsers);