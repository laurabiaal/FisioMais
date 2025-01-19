function addClient() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const birthdate = document.getElementById("birthdate").value;
  
    if (!name || !email || !phone || !address || !birthdate) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
  
    const clientList = document.getElementById("client-list");
    const newRow = document.createElement("tr");
  
    newRow.innerHTML = ` 
          <td>${name}</td> 
          <td>${email}</td> 
          <td>${phone}</td> 
          <td><button onclick="alert('Histórico do cliente: 
  ${name}')">Ver Histórico</button></td> 
      `;
  
    clientList.appendChild(newRow);
  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("birthdate").value = "";
  }