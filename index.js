var lol = function(field) {
    var values = {
      id: null,
      message: null
    };

    for (var prop in values) {
      if (values[prop] !== 'undefined') {
        values[prop] = field[prop];
      }
    }

    var $el = $('#' + values.id),
        storedValue = localStorage.getItem(values.id);

    // Set field value from local storage
    if (storedValue) {
      $el.val(storedValue);
    }

    // Set event listener to update local storage
    $el.on('blur', function(e) {
      if (e.target.checkValidity()) {
        localStorage.setItem(values.id, event.target.value);
      } else {
        alert(values.message);
      }
    });
}
window.lol = lol;

var info = {id: 'phoneNumber', message: 'Hey'};
lol(info);