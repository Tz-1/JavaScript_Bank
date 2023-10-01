clientes = [
  { nombre: "Patricia Torres", dni: "12345678", clave: 1234, saldo: 500000 },
  { nombre: "Antonio Jara", dni:"87654321", clave: 4321, saldo: 200000 },
  { nombre: "Pedro González", dni: "12348765", clave: 1243, saldo: 2500000 },
];

alert("Bienvenido a su Banca en linea");
dni = prompt("Ingrese su DNI:")
clave = parseInt(prompt("Ingrese su clave:"))

var ident = false;
for (let i=0; i<clientes.length; i++){
  if (clientes[i].dni == dni && clientes[i].clave == clave) {
    ident = true;
  }
  else {
    ident = false;
  }
   
  if (ident == true){
    alert("Bienvenido " + clientes[i].nombre);
    menu(clientes[i]);
    break;} 
}

if (ident == false){
  alert("DNI o clave incorrecta")} 


function menu(user){
  var pls = 2;
  while(pls != 1){
    var opt = parseInt(prompt("Seleccione que desea hacer: \n 1.- Ver saldo\n 2.- Realizar giro\n 3.- Realizar deposito\n 4.- Salir"))
    
    switch(opt){
      case 1:
        alert("Su saldo actual es: " + user.saldo)
        break;

      case 2:
        giro = parseInt(prompt("Su saldo actual es: " + user.saldo + "\nIngrese el monto que desea girar"))
        if (giro > 0 && giro <= user.saldo) {
          user.saldo -= giro;
          alert("Giro realizado con éxito. Su nuevo saldo es: " + user.saldo);
        } else {
          alert("Monto inválido o saldo insuficiente.");
        }
        break;

      case 3:
        depo = parseInt(prompt("Su saldo actual es: " + user.saldo + "\nIngrese el monto que desea depositar"))
        if (depo > 0) {
          user.saldo += depo;
          alert("Deposito realizado con éxito. Su nuevo saldo es: " + user.saldo);
        } else {
          alert("Monto inválido");
        }
        break;

      case 4: 
        pls = 1; 
        alert("Bye Bye 😊")
        break;
      
      default:
        alert("Eleccion incorrecta. Adios!") 
        pls = 1;     
        break;    
    }
  }
}
