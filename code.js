onEvent("button1", "click", function( ) {
  setScreen("screen2");
  playSound("assets/category_movement/puzzle_game_ui_liquid_02.mp3", false);
});
onEvent("button2", "click", function( ) {
  open("https://www.facebook.com");
  playSound("assets/category_bell/choose_background.mp3", false);
});
onEvent("button3", "click", function( ) {
  setScreen("screen1");
  playSound("assets/category_digital/ping.mp3", false);
});
