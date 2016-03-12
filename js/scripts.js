//Business Logic
for (var i=1; i <= 100; i++){
  if (i % 15 == 0)
    print("Pingpong");
  else if (i % 5 == 0)
    print("Pong");
  else if (i % 3 == 0)
    print("Ping");
  else
    print(i);
};

//User Logic
$(document).ready(function(){
  $("form#inputNumber").submit(function(event){
    var userNumber = $("input#userInput").val();

  event.preventDefault();
  }
});
