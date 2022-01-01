const firebaseConfig = {
    apiKey: "AIzaSyD-xjf91_MqNVt-d3QgdWij3WffuVicIsY",
    authDomain: "let-s-chat-web-app-930ab.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-930ab-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-930ab",
    storageBucket: "let-s-chat-web-app-930ab.appspot.com",
    messagingSenderId: "315280239607",
    appId: "1:315280239607:web:88d802fe4acbbf13159cf2"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}
