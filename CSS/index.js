$(document).ready(function () {
  // THIS IS A CODE FOR BACKGROUND COLOR OF QUERY TYPE
  // const changeBgColor = $("#radio, #radio2");
  // function clickedRadio() {
  //   if (changeBgColor.click(function())) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  //DEFINING VAILABLES
  const firstName = $("#fname");
  const lastName = $("#lname");
  const form = $("#form");
  const errorMsg = $("#errorMsgFirstName");
  const errorMsgLastName = $("#errorMsgLastName");
  const errorMsgEmail = $("#errorMsgEmail");

  form.submit(function (e) {
    if (firstName.val() == "" || firstName.val() == null) {
      // WHEN THE USER DIDN'T ENTER ANY STRING
      firstName.css("border", "2px solid  hsl(0, 66%, 54%)");
      errorMsg.html("This field is required").css("color", " hsl(0, 66%, 54%)");
      // e.preventDefault();
    } else {
      // WHEN THE USER ENTERS A STRING
      firstName.css("border", "2px solid green");
      errorMsg.html("");
    }
  });
  // THE CODE FOR THE LASTNAME
  form.submit(function (e) {
    let messages = [];
    if (lastName.val() == "" || lastName.val() == null) {
      e.preventDefault();
      lastName.css("border", "2px solid  hsl(0, 66%, 54%)");
      errorMsgLastName
        .html("This field is required")
        .css("color", " hsl(0, 66%, 54%)");
    }
    if (lastName.val() != messages) {
      lastName.css("border", "2px solid green");
      errorMsgLastName.html("");
    }
  });

  // THE CODE FOR THE EMAIL ADDRESS
  form.click("submit", function (e) {
    $("#email").keyup(function () {
      if (validEmail()) {
        $("#email").css("border", "2px solid green");
        errorMsgEmail.html("");
      } else {
        $("#email").css("border", "2px solid  hsl(0, 66%, 54%)");
        errorMsgEmail
          .html("Please enter a valid email address")
          .css("color", " hsl(0, 66%, 54%)");
      }
    });
    // THE CODE FOR THE EMAIL FUNCTION
    function validEmail() {
      let email = $("#email").val();
      var emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (emailPattern.test(email)) {
        return true;
      } else {
        return false;
      }
    }
  });
  // THE CODE FOR CHECK QUERY TYPE
  form.submit(function (e) {
    const checked = $("#radio, #radio2");
    const errorMsgRadio = $("#errorMsgRadio");
    const queryBox = $(".query-box");
    if (checked.is(":checked")) {
      errorMsgRadio.html("");
    } else {
      // e.preventDefault();
      errorMsgRadio
        .html("Please select a query type")
        .css("color", " hsl(0, 66%, 54%)");
    }
  });

  // THE CODE FOR THE MESSAGE BOX
  const messageBox = $("#text");
  const errorMsgBox = $("#errorMsgBox");
  const emptyMsgBox = [];

  form.submit(function (e) {
    if (messageBox.val() == emptyMsgBox || messageBox == null) {
      messageBox.css("border", "2px solid  hsl(0, 66%, 54%)");
      errorMsgBox
        .html("This field is required")
        .css("color", " hsl(0, 66%, 54%)");
      // e.preventDefault();
    } else {
      messageBox.css("border", "2px solid green");
      errorMsgBox.html("");
    }
  });

  // THE CODE FOR CHECKBOX
  form.submit(function (e) {
    const checkBox = $("#clickBox");
    const errorCheckBox = $("#errorCheckBox");
    if (checkBox.is(":checked")) {
      errorCheckBox.html("");
    } else {
      errorCheckBox
        .html("To submit this form, please consent to being contacted")
        .css("color", " hsl(0, 66%, 54%)");
    }
  });

  // CODING ON THE SUBMIT BUTTTON
  form.submit(function (e) {
    const submitButton = $(".submit");
    if (
      firstName.val() == "" ||
      lastName.val() == "" ||
      messageBox.val() == emptyMsgBox
    ) {
      e.preventDefault();
    } else {
      location.reload(
        alert("Thanks for completing the form. We'll be in touch soon!")
      );
    }
  });
});
