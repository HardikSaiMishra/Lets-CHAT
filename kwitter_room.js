// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB7SbaCopBo5Xjt-XgJVfni3I4kaCRtbzU",
  authDomain: "kwitter-13010.firebaseapp.com",
  databaseURL: "https://kwitter-13010-default-rtdb.firebaseio.com",
  projectId: "kwitter-13010",
  storageBucket: "kwitter-13010.appspot.com",
  messagingSenderId: "155778229713",
  appId: "1:155778229713:web:595d7dae883d2e2f47acf0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username= localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome " + username
function addRoom()
{
    room_name= document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
     
     
}
function logout(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location= "index.html"
}

getData();
 
function getData() {
 
 firebase.database().ref("/").on('value', function (snapshot) {
   document.getElementById("output").innerHTML = "";
   snapshot.forEach(function (childSnapshot) {
     childKey = childSnapshot.key;
     Room_names = childKey;
 
    
     console.log("Room Name - " + Room_names);
 
 
     row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML+=row
 
   });
 });
 
}
function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";

}

