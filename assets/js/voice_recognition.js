var voice = {
    // (A) INIT SPEECH RECOGNITION
    sform: null, // HTML SEARCH FORM
    sfield: null, // HTML SEARCH FIELD
    sbtn: null, // HTML VOICE SEARCH BUTTON
    recog: null, // SPEECH RECOGNITION OBJECT
    init: function() {
        // (A1) GET HTML ELEMENTS
        voice.sfrom = document.getElementById("searchbar");
        voice.sfield = document.getElementById("search_input");
        voice.sbtn = document.getElementById("search-speech");

        // (A2) GET MICROPHONE ACCESS
        navigator.mediaDevices.getUserMedia({
            audio: true
        })
            .then((stream) => {
                // (A3) SPEECH RECOGNITION OBJECT + SETTINGS
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                voice.recog = new SpeechRecognition();
                voice.recog.lang = "en-US";
                voice.recog.continuous = true;
                voice.recog.interimResults = false;

                // (A4) POPUPLATE SEARCH FIELD ON SPEECH RECOGNITION
                voice.recog.onresult = (evt) => {
                    let said = evt.results[0][0].transcript.toLowerCase();
                    voice.sfield.value = said;
                    // voice.sform.submit();
                    // OR RUN AN AJAX/FETCH SEARCH
                    voice.stop();
                };

                // (A5) ON SPEECH RECOGNITION ERROR
                voice.recog.onerror = (err) => {
                    console.error(err);
                };

                // (A6) READY!
                voice.sbtn.disabled = false;
                voice.stop();
            })
            .catch((err) => {
                console.error(err);
                voice.sbtn.value = "Please enable access and attach microphone.";
            });
    },

    // (B) START SPEECH RECOGNITION
    start: () => {
        voice.recog.start();
        voice.sbtn.onclick = voice.stop;
        voice.sbtn.classList.add("listening");
    },

    // (C) STOP/CANCEL SPEECH RECOGNITION
    stop: () => {
        voice.recog.stop();
        voice.sbtn.onclick = voice.start;
        voice.sbtn.classList.remove("listening");
    }
};
window.addEventListener("DOMContentLoaded", voice.init);