var c1 = " QSRI-BSHT-GSTA-PPWV "
var n1 = " aziz "
var s1 = document.getElementById('s1').value
var r1 = document.getElementById('r1').value
var a1 = document.getElementById('a1').value
var t1 = document.getElementById('t1').value
var l1 = document.getElementById('l1').value
var c2 = "GHTZ-NNQT-PMAB-XNVV"
var n2 = document.getElementById('n2').value
var s2 = document.getElementById('s2').value
var r2 = document.getElementById('r2').value
var a2 = document.getElementById('a2').value
var t2 = document.getElementById('t2').value
var l2 = document.getElementById('l2').value

var fa = document.getElementById('mnaffakh').value






   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyDkQy_mYUv47Sgce8028eNPAW4BOu5a0ps",
    authDomain: "hackatest-8ff1d.firebaseapp.com",
    databaseURL: "https://hackatest-8ff1d.firebaseio.com",
    projectId: "hackatest-8ff1d",
    storageBucket: "hackatest-8ff1d.appspot.com",
    messagingSenderId: "66959913351",
    appId: "1:66959913351:web:95f99db102ab9db9c0a322",
    measurementId: "G-P81RVR064N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  function set(){
    var data = { FirstName: document.getElementById('contact_input').value};
    var UserID = 225422;
    var MyPath = firebase.database().ref('Users/'+ UserID);
    MyPath.set(data)
      .then(function() {
        console.log('succeeded');
      })
      .catch(function(error) {
        console.log("failed: " + error.message);
      });
    
  }



  function lettre(){

    
document.getElementById('contact_textarea').innerHTML="Bonjour Dr "+ n1 +"Tout d’abord, j’ai l’immense plaisir de vous offrir nos applications et je tiens aussi à vous annoncer que nous restons à votre disposition pour faire de notre solution Le Comet : votre bras droit digital pour la prescription de médicaments le comet pc :   Code : " + c1+ "Comet Mobile :  code : " + c1 +"Votre satisfaction faisant partie de nos priorités, nous vous invitons à ne pas hésiter à nous demander un accompagnement dans vos premiers pas pour découvrir nos applications. Notre challenge dans cette action de solidarité est de faire bénéficier le maximum de médecins et pharmaciens, veuillez s’il vous plaît partager l'information avec vos confrères " 







  }

  // "Bonjour Dr "+n1+"Tout d’abord, j’ai l’immense plaisir de vous offrir nos applications et je tiens aussi à vous annoncer que nous restons à votre disposition pour faire de notre solution Le Comet : votre bras droit digital pour la prescription de médicaments le comet pc :   Code : " + c1+ "Comet Mobile :  code : " + c1 +"Votre satisfaction faisant partie de nos priorités, nous vous invitons à ne pas hésiter à nous demander un accompagnement dans vos premiers pas pour découvrir nos applications. Notre challenge dans cette action de solidarité est de faire bénéficier le maximum de médecins et pharmaciens, veuillez s’il vous plaît partager l'information avec vos confrères " 

  function lettre2(){

    
    document.getElementById('contact_textarea').innerHTML="Bonjour Dr "+ " "+ document.getElementById('n2').value +" " +"Tout d’abord, j’ai l’immense plaisir de vous offrir nos applications et je tiens aussi à vous annoncer que nous restons à votre disposition pour faire de notre solution Le Comet : votre bras droit digital pour la prescription de médicaments le comet pc :   Code : " +" "+ c2+" "+ "Comet Mobile :  code : " +" "+ c2 + " "+"Votre satisfaction faisant partie de nos priorités, nous vous invitons à ne pas hésiter à nous demander un accompagnement dans vos premiers pas pour découvrir nos applications. Notre challenge dans cette action de solidarité est de faire bénéficier le maximum de médecins et pharmaciens, veuillez s’il vous plaît partager l'information avec vos confrères " 
    
    
    
    
    
    
    
      }