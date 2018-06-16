//<script type="text/javascript">
function validate()
{ 
   if( document.Registration.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.Registration.textnames.focus() ;
     return false;
   }
   
   if( document.Registration.mobileno.value == "" ||
           isNaN( document.Registration.mobileno.value) ||
           document.Registration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.Registration.mobileno.focus() ;
     return false;
   }  
  var email = document.Registration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  if(email == "")
  {
    alert("Enter the email ID")
    document.Registration.emailid.focus() ;
     return false;
  }
 else if (atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.Registration.emailid.focus() ;
     return false;
 }
 if( document.Registration.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.Registration.City.focus() ;
     return false;
   }   
  
   return( true );
}
//</script>
