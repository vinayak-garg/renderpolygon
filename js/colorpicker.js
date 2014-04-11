var selectedColorIndex = 0;
var colors = [
	'000000', '333333', '666666', '999999', 'cccccc', 'ffffff',
	'330000', '660000',	'990000', 'cc0000', 'ff0000', '00ffff',
	'003300', '006600', '009900', '00cc00', '00ff00', '00cccc',
	'000033', '000066', '000099', '0000cc', '0000ff', '009999',
	'333300', '666600', '999900', 'cccc00', 'ffff00', '006666',
	'330033', '660066', '990099', 'cc00cc', 'ff00ff', '003333'
];

function colorpicker(){
	var e=$('#colorpicker');
	for(var i=0; i<36; i++){
		e.append('<div id="c'+i+'" class="cell">&nbsp;</div>');
		$('#c'+i).css({'background-color': '#'+colors[i]});
		$('#c'+i).click({index:i}, colorpick);
	}
}

function colorpick(event){
	for(var i=0; i<36; i++){
		$('#c'+i).removeClass('selected');
	}
	selectedColorIndex=event.data.index;
	$('#c'+selectedColorIndex).addClass('selected');
}