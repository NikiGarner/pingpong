var gameString = [];
var pingpong = function(n){
  for (var i = 1; i <= n; i++){
  if (i % 15 === 0){
    gameString.push("Pingpong");
  }
  else if (i % 5 === 0){
    gameString.push("Pong");
  }

  else if (i % 3 === 0){
    gameString.push("Ping");
  }
  else{
    gameString.push('' + i + '');
  }
  }
};


  $("form#inputNumber").submit(function(event){
    var n = $("input#userInput").val();

    pingpong(n);


    $("#result").show();
    $("#resultNumber").append(gameString.join(' '));

    event.preventDefault();
});
