const styles = {
  propertyName: 'color',
};

$("#slider").slider({
  min: 0x000000,
  max: 0xffffff,
  change: function (event, ui) {
    $("#example").css(styles.propertyName, `#${ui.value.toString(16)}`);
  },
  slide: function (event, ui) {
    $("#slider span").css('background', `#${ui.value.toString(16)}`);
  },
});


$("input[type='radio']")
  .checkboxradio()
  .click((event) => {
    styles.propertyName = (event.target.id === 'radio-1') ? 'color' : 'background';
  });
