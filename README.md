# jQuery BEM Plugin

Super simple Block-Element-Modifier manipulation for jQuery.

## Usage

Consider the following HTML:

```html
<div class="component some-other-class">
	  <h3 class="component__title">Component Title</h3>
	  <figure class="component__image">
	  	<img src="image.jpg">
		<figcaption class="component__image__caption">Image Caption</figcaption>
	  </figure>
</div>
```


### Initialize

Set the BEM root for the element:

```js
$( '.component' ).bem( '.component' );
```

### Selection

Now we can select the element's BEM children:

```js
$( '.component' ).bemChild( 'title' ).html( 'Updated Title' );

$( '.component' ).bemChild( 'image__caption' ).html( 'Updated Caption' );

$( '.component' ).bemChild( 'image' ).bemChild( 'caption' ).html( 'Updated Caption' );
```

### Modification

Apply modifiers:

```js
$( '.component' ).bemModify( 'updated', true ); // Adds class: component--updated

$( '.component' ).bemModify( 'updated', false ); // Removes class: component--updated

$( '.component' ).bemModify( 'updated' ); // Toggles class: component--updated

$( '.component' ).bemChild( 'image__caption' ).bemModify( 'updated', true ); // Adds class: component__image__caption--updated

$( '.component' ).bemChild( 'image' ).bemChild( 'caption' ).bemModify( 'updated', true ); // Adds class: component__image__caption--updated

$( '.component' ).bemChild( 'image' ).bemChild( 'caption' ).bemModify( 'updated' ); // Toggles class: component__image__caption--updated
```
