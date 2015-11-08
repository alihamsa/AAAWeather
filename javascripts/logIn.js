define(function(require) {


  return {

      userLogIn: function() {

      var ref = new Firebase("https://aaaweather.firebaseio.com/");

      var userEmail     = $("#emailLogIn").val();
      var userPassword  = $("#passwordLogIn").val();


      ref.authWithPassword({
        email     : userEmail,
        password  : userPassword
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
          alert('Log in failed. Check your email and password');
        } else {
          console.log("Authenticated successfully with payload:", authData);
          //on log in, hide the modal and log in options and display the search
          $("#authorize").hide();
          $('#myModal').modal('hide');
          $("#searchForm").show();
       }
     });

    } //End LogIn


  };//end return

}); //end define