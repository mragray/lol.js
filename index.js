var lol = function(field) {
    var settings = {
      errorClass: 'invalid',

    }
    var values = {
      id: null,
      pattern: null,
      message: null
    };

    for (var prop in values) {
      if (values[prop] !== 'undefined') {
        values[prop] = field[prop];
      }
    }

    var $el = $('#' + values.id);

    $el.on('blur', function(e) {
      if (e.target.checkValidity()) {
        localStorage.setItem(values.id, event.target.value);
        console.log(values.id);

      } else {
        console.log(values.message);
      }
    });
}
window.lol = lol;