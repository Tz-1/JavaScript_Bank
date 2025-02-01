# Banking System

## Description
This is a simple banking system implemented in JavaScript that allows users to log in with their DNI and password, check their balance, withdraw money, deposit money, and exit the system.

## Features
- User authentication via DNI and password.
- View account balance.
- Withdraw money with balance validation.
- Deposit money with input validation.
- Exit the system.

## How It Works
1. The user is prompted to enter their DNI and password.
2. If the credentials match an existing client, they gain access to the banking menu.
3. The user can choose from the following options:
   - **View balance**: Displays the current account balance.
   - **Withdraw money**: Allows the user to withdraw funds if sufficient balance is available.
   - **Deposit money**: Enables the user to add funds to their account.
   - **Exit**: Terminates the session.
4. The system uses JavaScript `prompt()` and `alert()` for interaction.

## Usage
1. Open the HTML file that includes this JavaScript in a browser.
2. Follow the on-screen prompts to interact with the system.

## Example Clients
```javascript
clientes = [
  { nombre: "Patricia Torres", dni: "12345678", clave: 1234, saldo: 500000 },
  { nombre: "Antonio Jara", dni:"87654321", clave: 4321, saldo: 200000 },
  { nombre: "Pedro González", dni: "12348765", clave: 1243, saldo: 2500000 },
];
```

