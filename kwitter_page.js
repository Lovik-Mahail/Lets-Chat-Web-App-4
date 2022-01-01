const firebaseConfig = {
      apiKey: "AIzaSyC0eDSe7jNbUyX08OKcnSt_h46q8HTOapc",
      authDomain: "kwitter-70b83.firebaseapp.com",
      databaseURL: "https://kwitter-70b83-default-rtdb.firebaseio.com",
      projectId: "kwitter-70b83",
      storageBucket: "kwitter-70b83.appspot.com",
      messagingSenderId: "678903961513",
      appId: "1:678903961513:web:32546ab0642247e073d6b8"
    };
    firebase.initializeApp(firebaseConfig);

user_Name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
     msG = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_Name,
            message:msG,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
