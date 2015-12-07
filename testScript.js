$( document ).ready( function() {

  $('h1').text('super cheeky');

  $upcoming = $( "div:contains('Upcoming traversals')");
  $myList = $( "<ol><li>Test</li><li>these</li><li>levels</li><li>of cheekiness</li></ol>");
  $($myList).appendTo($upcoming);

  $('.sad').removeClass('sad').addClass('happy');

  // change popup link
  $( '#annoying-popup a' ).attr("href", "http://www.cashcats.biz");

  // grab current top
  var currentTop = parseInt( $( '#annoying-popup' ).css('top') );
  // make it 30px lower
  $( '#annoying-popup' ).css('top', currentTop + 30 + 'px' );
  // align right
  $( '#annoying-popup' ).css('right', 0 );


  // traverse from div class=suggested-topics and ul
  var $topicList = $( '.suggested-topics ul' );
  var $emptyTopic = $topicList.find('li').filter( function(index, el) {
      return this.innerHTML === ('...');
  } );
  $emptyTopic.text('New Text');


  var textInput = $('input').first();
  var placeholder = textInput.attr('placeholder');
  textInput.replaceWith('<textarea placeholder="' + placeholder + '">');

})