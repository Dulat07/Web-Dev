let num = prompt("Type an any number: ", 10)

if (num > 0) {
  alert( 1 );
} else if (num < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a+b < 4) ? "below" : "over";

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));



let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
