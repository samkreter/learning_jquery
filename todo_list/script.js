$(document).ready(function(){
  $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<span><input class='check'type='checkbox' unchecked>"+toAdd+"</span><br>");
        $('input').val("");
        $('.check').click(function(){
            $(this).parent().remove();    
        });
  });    
});


