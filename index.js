(function( $, window, document, undefined ){

  var Field = {
    init: function( options, elem ) {
      var self = this;

      self.elem = elem;
      self.$elem = $( elem );
      self.id = self.$elem.attr( 'id' );
    },
    storage: function ( ) {
      var self = this;

      var storedValue = localStorage.getItem( self.id );
      if ( storedValue ) {
        self.$elem.val( storedValue );
      }
    },
    handle: function() {
      var self = this;

      self.$elem.on('blur', this.$elem.parent( 'form' ), function( e ) {
        if ( e.target.checkValidity() ) {
          console.log( 'valid' );
          localStorage.setItem( self.id, event.target.value );
        } else {
          console.log( 'nope!' );
        }
      });
    }
  }

  $.fn.lol = function( options ) {
    return this.each( function( ){
      var field = Object.create( Field );
      field.init( options, this );
      field.storage( );
      field.handle( );
    });
  }

  $.fn.lol.options = {
    localStorage: true,
    validClass: false,
    invalideClass: false
  }

})( jQuery, window, document );
