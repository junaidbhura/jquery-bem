/**
 * jQuery BEM.
 * https://github.com/junaidbhura/jquery-bem
 *
 * Version: 1.0.0
 */

( function ( $ ) {

	$.fn.bem = function( root ) {
		this.data( 'bem', root );
		return this;
    };

	$.fn.bemChild = function( childPath ) {
		var bemPath = this.data( 'bem' ) + '__' + childPath;
		return this.find( bemPath ).bem( bemPath );
	};

	$.fn.bemModify = function( modifier, set ) {
		this.toggleClass( this.data( 'bem' ).substr( 1 ) + '--' + modifier, set );
		return this;
	};

} ( jQuery ) );
