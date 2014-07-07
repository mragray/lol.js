(function($, window, document, undefined){

  $.fn.lol = function( options ) {
    return this.each(function(){
      var self = this,
          storedValue = localStorage.getItem(self.id);
      
      if (storedValue) {
        $(self).val(storedValue);
      }

      $(self).on('blur', $(self).parent('form'), function(e) {
        if (e.target.checkValidity()) {
          console.log('valid');
          localStorage.setItem($(self).attr('id'), event.target.value);
        } else {
          console.log('nope!');
        }
      });
    });
  }
  
  $.fn.lol.fieldOptions = {
    id: null,
    message: null
  }

  $.fn.lol.options = {
    localStorage: true,
    validClass: false,
    invalideClass: false
  }

})(jQuery, window, document );