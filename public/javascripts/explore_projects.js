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

var minRate = 2;
var maxRate = 8;
var minInv = 0;
var maxInv = 2;

$("#sliderbar-rate").noUiSlider("init", { scale: [0.0, 10.0], startMin: minRate, startMax: maxRate, tracker:

  function(){
    var lowVal = Math.round($("#sliderbar-rate").noUiSlider("getValue")[0]); // Without options, 'getValue' returns an array.
    $("#sliderbar-rate div.noUi_lowerHandle div").text(
      lowVal
    );
    var highVal = Math.round($("#sliderbar-rate").noUiSlider("getValue", {point: "upper"}));
    $("#sliderbar-rate div.noUi_upperHandle div").text(
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


$("#sliderbar-inv").noUiSlider("init", { scale: [0.0, 4.0], startMin: minInv, startMax: maxInv, tracker:

  function(){
    var lowVal = Math.round($("#sliderbar-inv").noUiSlider("getValue")[0]); // Without options, 'getValue' returns an array.
    $("#sliderbar-inv div.noUi_lowerHandle div").text(
      investmenttypes[lowVal]
    );
    var highVal = Math.round($("#sliderbar-inv").noUiSlider("getValue", {point: "upper"}));
    $("#sliderbar-inv div.noUi_upperHandle div").text(
      investmenttypes[highVal]
    );
    for (var i = 0; i < lowVal; i++)
      $(".i" + i).hide();
    for (var x = lowVal; x <= highVal; x++)
      $(".i" + x).show();
    for(var j = highVal+1; j <= 10; j++)
      $(".i" + j).hide();
  }

});

/*****Show the initial Values of sliders******/

//Show the Minimum Rate Label
$("#sliderbar-rate div.noUi_lowerHandle div").text(
  minRate
);
//Show the Maximum Rate Label
$("#sliderbar-rate div.noUi_upperHandle div").text(
  maxRate
);

//Show the Minimum Investment Label
$("#sliderbar-inv div.noUi_lowerHandle div").text(
  investmenttypes[minInv]
);
//Show the Maximum Investment Label
$("#sliderbar-inv div.noUi_upperHandle div").text(
  investmenttypes[maxInv]
);