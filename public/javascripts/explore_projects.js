$('#explore_quick a').click(function(e){
  e.preventDefault()
  $('a.selected').removeClass('selected')
  $(this).addClass('selected')
  var id = /^menu_(\w+)$/.exec($(this).attr('id'))
  id = id[1]
  $('#explore_results .results').hide()
  $('#explore_'+id).show()
})
$('#explore_categories a').click(function(e){
  e.preventDefault()
  $('a.selected').removeClass('selected')
  $(this).addClass('selected')
  var category = $(this).html()
  $('#explore_results .results').hide()
  $('#explore_all .project_box').show()
  $('#explore_all .project_category').each(function(){
    if($(this).html() != category)
      $(this).parent().parent().hide()
  })
  $('#explore_all').show()
})
if($('#explore_projects .selected').length == 0){
  $('#menu_recommended').addClass('selected')
}
$('#explore_projects .selected').click()

$(".sliderbar").noUiSlider("init", { scale: [0.0, 10.0], startMin: 2, startMax: 8, tracker:

  function(){
    var lowVal = Math.round($(".sliderbar").noUiSlider("getValue")[0]); // Without options, 'getValue' returns an array.
    $("#lowValue").text(
      lowVal
    );
    var highVal = Math.round($(".sliderbar").noUiSlider("getValue", {point: "upper"}));
    $("#highValue").text(
      highVal
    );
    for (var i = 0; i < lowVal; i++)
      $("." + i).hide();
    for (var x = lowVal; x <= highVal; x++)
      $("." + x).show();
    for(var j = highVal+1; j <= 10; j++)
      $("." + j).hide();
  }

});