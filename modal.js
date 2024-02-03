//This is for the alert that displays towards the top after the inquiry button has been selected.


//The alertPlaceholder is storing the document.getElementById('liveAlertPlaceholder'), 
//Which targets the div with the id named 'liveAlertPlaceholder'. 
//$$That div is on line 28 in the index.html file.
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

//The alertTrigger is storing the document.getElementById('liveAlertBtn'), 
//Which targets the div with the id named 'liveAlertBtn'. 
//$$That div is on line 92 in the index.html file.
var alertTrigger = document.getElementById('liveAlertBtn')

//The clearMode is storing the document.getElementById('liveAlertBtn'), 
//Which targets the div with the id named 'liveAlertBtn'. 
//$$That div is on line 92 in the index.html file.
var clearMode = document.getElementById('liveAlertBtn')


//The alert function attaches what will display once the alert has been ativated.
function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

//This is an "if statement"
if (alertTrigger) {
  //This is listening for the button that is stored in the alertTrigger above to be click.
  //The alertTrigger has stored the button with the id named liveAlertBtn.
  //Once clicked, the function above will be activated and display the alert.
  alertTrigger.addEventListener('click', function () {
    //Here, the first part of the alert below is the message =Your inquiry has been submitted. .
    //The second part of it is the type = success.
    alert('Your inquiry has been submitted.', 'success')
  })
}



