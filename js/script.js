window.addEventListener("scroll", function() {
  var header = this.document.querySelector('.header');
  header.classList.toggle("sticky", window.scrollY > 0) ;

  /*          */

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

});

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${message.value} <br>`
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "dagmawitworku3@gmail.com",
    Password : "02B309208A2B8913E1FD8DF35B907BDED3D9",
    To : 'dagmawitworku3@gmail.com',
    From : "dagmawitworku3@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  }
);
}

function checkInputs() {
  const items = document.querySelectorAll('.items');

  items.forEach( (items) => {
    if (items.value == ""){
      items.classList.add("error");
      items.parentElement.classList.add('error');
    }

    items.addEventListener("keyup", () => {
      if(items.value != "") {
        items.classList.remove("error");
        items.parentElement.classList.remove('error');
      } else {
        items.classList.add("error");
        items.parentElement.classList.add('error');
      }
    });
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
 checkInputs();
 sendEmail();
});






/*     toggle icon navbar     */

let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}











