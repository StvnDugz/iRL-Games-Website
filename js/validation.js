function validate(){
  // declaring variables
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var position = document.getElementById("position");
  var error_message = document.getElementById("error_message");
  var numbers = /^\d{10}$-/;
  var mailformat = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;  
  var text;
  error_message.style.padding = "10px";

  // calculations

  //if the name lenght is less than 5
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  
  //if the phone number value has a number format and the phone number lenght is less than or equal to 7
  if(phone.match(numbers) || phone.length <= 7){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
   //if the email value has an email format and the email lenght is equal to 0
  if(!email.match(mailformat) || email.length === 0){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
   //if one of the options in the slection menu isn't selcted
  if(position.selectedIndex <=0)
  {
    text = "Please select position";
    error_message.innerHTML = text;
    return false;
  }
    //if one of the radio buttons isn't selcted
  if((document.getElementById("radio1").checked == false) && (document.getElementById("radio2").checked == false) && (document.getElementById("radio3").checked == false) && (document.getElementById("radio4").checked == false)){
    text = "Please select length of experience";
    error_message.innerHTML = text;
    return false;
  }
  //if the message lenght is less than 140 characters
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  //else display the message
  alert("Form Submitted Successfully!");
  return true;
}