function recognizeSpeech() {
    var maxMatches = 5;
    var promptString = "Speak now"; // optional
    var language = "en-US";                     // optional
    window.plugins.speechrecognizer.startRecognize(function(result){
        alert(result);
    }, function(errorMessage){
        console.log("Error message: " + errorMessage);
    }, maxMatches, promptString, language);
}