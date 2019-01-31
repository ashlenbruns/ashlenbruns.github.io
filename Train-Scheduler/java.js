var config = {
    apiKey: "AIzaSyC1WYODhJkTUIXClWYmsrhmik9N_GiAPTs",
    authDomain: "swiss-train-scheduler.firebaseapp.com",
    databaseURL: "https://swiss-train-scheduler.firebaseio.com",
    projectId: "swiss-train-scheduler",
    storageBucket: "swiss-train-scheduler.appspot.com",
    messagingSenderId: "349934346673"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$('#user-add').on('click', function(event) {
    event.preventDefault();

    var inputName = $('#exampleInputName').val().trim();
    var inputDestination = $('#exampleInputDestination').val().trim();
    var inputTime = $('#exampleInputTime').val().trim();
    var inputFreq = $('#exampleInputFrequency').val().trim();

    var newTrain = {
        train: inputName,
        destination: inputDestination,
        time: inputTime,
        frequency: inputFreq
    };

    database.ref().push(newTrain);

    $('#exampleInputName').val('');
    $('#exampleInputDestination').val('');
    $('#exampleInputTime').val('');
    $('#exampleInputFrequency').val('');
 
});

database.ref().on('child_added', function(childSnapshot){

    var trainName = childSnapshot.val().train;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = moment(childSnapshot.val().time, 'HH:mm').subtract(1, 'years');
    var trainFrequency = childSnapshot.val().frequency;
    var diffBtwnTime = moment().diff(moment(trainTime), 'minutes');
    var remainder = diffBtwnTime % childSnapshot.val().frequency;
    var minAway = childSnapshot.val().frequency - remainder;
    var nextArrival = moment().add(minAway, 'minutes');
    nextArrival = moment(nextArrival).format('HH:mm');

    var newRow = $('<tr>').append(
        $('<td>').text(trainName),
        $('<td>').text(trainDestination),
        $('<td>').text(trainFrequency),
        $('<td>').text(nextArrival),
        $('<td>').text(minAway)
    );
    
    $('.table').append(newRow);

});

