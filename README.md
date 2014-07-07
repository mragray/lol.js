# lol.js: Better forms for much win.

## lol.js makes it easy to provide inline form validation and save progress in local storage incase of interruption. _This is a work in progress and is not ready for anything._

## Values:
1. Provide visual feedback as users fill out forms.
2. Save progress locally as users fill out forms.
3. Reduce HTTP requests by leveraging local storage.
4. Delegate javascript events for much win.

### As is...
```javascript
	$('input').lol();
```

```javascript
	$('input[type="tel"]').lol();
```

### Soon!
```javascript
	$(yourSelection).lol({
		pattern: {regex},		// See http://html5pattern.com/
		matches: {id}, 			// for confirmation fields
		invalidClass: {class}, 	// defaults is false
		validClass: {class} 	// defaults is false
	});
```

### Todo (in no order):
- Handle invalide form fields.
- Pass options as an argument to lol(). See "Soon!" above.
- use module exports for node / browserify modules to validate on client & server
- Update bower, jquery, and npm package info with version 1.0