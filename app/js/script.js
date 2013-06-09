
function init() {
  $.get( "results", function( info ) {
    $( "div.results" ).html( JST['app/templates/results.handlebars']( info ) );
  });
  $( "div.content" ).on( "click", "div.result", showDetail );
}

function showDetail( e ) {
  var id = $( this ).data( "id" );
  loadDetail( id );
  $( "div.detail" ).show();
}

function loadDetail( id ) {
  if ( id.data ) {
    id = id.data.id;
  }
  $.get( "detail/" + id, function( info ) {
    $( "div.detail" ).html( JST['app/templates/detail.handlebars']( info ) );
    $( "div.detail a.prev" ).on( "click", { id: parseInt( id ) - 1 }, loadDetail );
    $( "div.detail a.next" ).on( "click", { id: parseInt( id ) + 1 }, loadDetail );
    $( "div.detail div.artist a" ).on( "click", loadBio );
  });
}

function loadBio( artistId ) {
  // some stuff here, definitely needs a template
}

init();
