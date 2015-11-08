define(function(require) {


  return {

      newUser: function() {

      var newUserEmail     = $("#registerEmail").val();
      var newUserPassword  = $("#reenterPassword").val();

      console.log(newUserEmail);
      console.log(newUserPassword);

      var ref = new Firebase("https://aaaweather.firebaseio.com/");

      ref.createUser({
        email     : newUserEmail,
        password  : newUserPassword
      },function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          alert("Successfully created user account.");
          $('#myModal').modal('hide');

        } //end else

      }); //end creatUser

    } //End newUser

    };//end return

}); //end define