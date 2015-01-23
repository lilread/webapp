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
