document.addEventListener( 'click', function ( e ) {
  var editor = squire_editors[0];
  var id = e.target.id,
      value;
  console.info(id);
  if ( id && editor && editor[ id ] ) {
    if ( e.target.className === 'prompt' ) {
      value = prompt( 'Value:' );
    }
    editor[ id ]( value );
  }
}, false );

$(document).ready(function(){
  window.squire_editors = [];
  setTimeout(initEditors, 1000);

});

var initEditors = function(){
    $("iframe").each(function(index, iframe){
    console.info(iframe);
    console.info("making editor");
    window.iframe = iframe;
    window.idoc = iframe.contentDocument;
    var editor = new Squire(iframe.contentDocument);
    squire_editors.push(editor);
    window.editor = editor;
    window.source = $("#source");
    window.before = $("#before");
    window.after = $("#after");
    window.clone = $("#clone");
    // _.each
    editor.addEventListener("pathChange", function(newPath){
      console.info('path changed');
      console.info(newPath);
    });
    editor.addEventListener("focus", function(){
      console.info('focus');
    });
    var citation = '<cite contenteditable="false" style="cursor: pointer" data-bib-key="20366120" data-bib-text="a" class="squire-citation ltx_cite"><a href="#20366120" class="au-cite-link">(Jenkins 2009)</a></cite>'
    editor.setHTML("is <span contentEditable='false'>non</span> edit or " + citation + " something else")
  
  });
}



