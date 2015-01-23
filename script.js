//Flirty greeting

//bonjour();

jQuery("#greeting-form").on("submit", function (event_details) {alert("WINNER");

    var greeting = "Hello ";
    var fullName = jQuery("#fullName").val()
    var winky = " ;) xx";
    var greeting_message = greeting + fullName + winky;
    //alert(greeting_message);
    jQuery("#greeting-form").hide();
    jQuery("#greeting").append("<p>" + greeting_message + "</p>");
    event_details.preventDefault();
//}

});
jQuery("#booking-form").on("submit", function (event_details);

    var thename = jQuery("#name").val();
    var email = jQuery("#email").val();
    var guests = jQuery("#guests").val();
    var message1 = "Hey there, ";
    var message2 = "thank you for your booking for ";
    var message3 = " guests, we will confirm your booking at";
    var booking_message = message1 + thename + message2 + guests + message3 + email;
    //alert(greeting_message);
    jQuery("#booking-form").hide();
    jQuery("#booking").append("<p>" + booking_message + "</p>");
    event_details.preventDefault();
//}
