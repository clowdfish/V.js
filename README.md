# V

> A simple validation library

V is a simple validation plugin for jQuery. This is all you can do with it:

* Declare validation rules in your markup
* Check if a field or a whole form is valid
* Apply side effects (set/remove classes) to input elements or their parent elements

## Install

The easiest way to install V is via [bower](http://bower.io):

```
$ bower install V --save-dev
```

Then you can include V using your favourite build tool, or simply load it into your markup via a `<script>` tag:

```html
<script src="bower_components/V/V.min.js"></script>
```

## Use

### Basic Usage

Declare the validation rules to be used in your markup using the `v-rules` attribute:

```html
<form>
  <input type="text" v-rules="required" placeholder="Your name">
  <input type="text" v-rules="required url" placeholder="Your website">
  <input type="submit" value="Submit">
</form>
```

Check if the whole form is valid on submit:

```js
$('form').on('submit', function(event) {
  var valid;
  
  event.preventDefault();
  valid = $(this).validate();
  if(!valid) {
    alert('Please fill out the form properly!');
  }
  
  return valid;
});
```

### Side effects

Side effects can be applied to either the input fields themselves or to their parent elements, for example `<fieldset>`s.

**To do**

### Configuration

**To do**

## Contribute

Wow, if you want to contribute, that's really great! :)

Here's how to get started:

```
$ npm install && bower install && tsd reinstall
```

V is developed in TypeScript, so be sure to always edit the source file `V.ts`. Once you've done your changes, run `$ gulp` to compile into JavaScript. Always commit the compiled files `V.js`, `V.min.js`, and `V.d.ts` with your pull requests.

Happy hacking! :)
