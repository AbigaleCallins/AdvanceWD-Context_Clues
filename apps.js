$(document).ready(function () {
  var friends = ["Abby", "Brittney", "Ashley", "Micheal", "Diamond", "Tina"];
  var locations = [
    "Tokyo",
    "Toronto",
    "Nigeria",
    "London",
    "India",
    "Miami",
    "Atlanta",
    "Thailand",
    "Baguio",
    "Ohio",
  ];
  var weapons = [
    "rope",
    "shotgun",
    "rifle",
    "candle-stick",
    "plank",
    "high-heel",
    "ice pic",
    "axe",
    "sock",
    "posion",
    "car",
    "pill-od",
    "pool",
    "high dose potassium",
    "knife",
    "broken glass",
    "pillow",
    "bucher knife",
    "wood-chipper",
    "shoe-lace",
  ];

  var $h3Div = $("<div id='h3Div'></div>");
  $("body").append($h3Div);

  for (var i = 1; i <= 100; i++) {
    var $h3 = $("<h3 class='message></h3>");
    $($h3Div).append($h3);
    $($h3).attr("id", [i]);
    $($h3).text("Accusation" + " " + [i]);
    $($h3).click(getAlert(i));
  }

  function getAlert(i) {
    var friend = friends[i % 5];
    var location = locations[i % 10];
    var weapon = weapons[i % 20];
    function accuAlert() {
      alert(
        "Accusation " +
          i +
          ": I accuse " +
          friend +
          " with the " +
          weapon +
          " in " +
          location +
          "!"
      );
    }
    return accuAlert;
  }
});
