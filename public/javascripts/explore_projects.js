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

$("#sliderbar-rate").noUiSlider("init", { scale: [0.0, 10.0], startMin: 2, startMax: 8, tracker:

  function(){
    var lowVal = Math.round($("#sliderbar-rate").noUiSlider("getValue")[0]); // Without options, 'getValue' returns an array.
    $("#lowValue").text(
      lowVal
    );
    var highVal = Math.round($("#sliderbar-rate").noUiSlider("getValue", {point: "upper"}));
    $("#highValue").text(
      highVal
    );
    for (var i = 0; i < lowVal; i++)
      $(".r" + i).hide();
    for (var x = lowVal; x <= highVal; x++)
      $(".r" + x).show();
    for(var j = highVal+1; j <= 10; j++)
      $(".r" + j).hide();
  }

});


$("#sliderbar-inv").noUiSlider("init", { scale: [0.0, 4.0], startMin: 2, startMax: 4, tracker:

  function(){
    var lowVal = Math.round($("#sliderbar-inv").noUiSlider("getValue")[0]); // Without options, 'getValue' returns an array.
    $("#lowGrade").text(
      lowVal
    );
    var highVal = Math.round($("#sliderbar-inv").noUiSlider("getValue", {point: "upper"}));
    $("#highGrade").text(
      highVal
    );
    for (var i = 0; i < lowVal; i++)
      $(".i" + i).hide();
    for (var x = lowVal; x <= highVal; x++)
      $(".i" + x).show();
    for(var j = highVal+1; j <= 10; j++)
      $(".i" + j).hide();
  }

});