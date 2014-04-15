var selectedColorIndex = 0;
var colors = [
	'ffffff', 'ff0000', '00ff00', '0000ff', 'ffff00', 'ff00ff',	'00ffff', '660000',	
	'cccccc', 'cc0000', '00cc00', '0000cc',	'cccc00', 'cc00cc', '00cccc', '00cc00',
	'999999', '990000',	'009900', '000099', '999900', '990099', '009999', '009999',
	'000000', '660000', '006600', '000066', '666600', '660066',	'006666', '660066'
];

function colorpicker(){
	var e=$('#colorpicker');
	for(var i=0; i<32; i++){
		e.append('<div id="c'+i+'" class="cell">&nbsp;</div>');
		$('#c'+i).css({'background-color': '#'+colors[i]});
		$('#c'+i).click({index:i}, colorpick);
	}
}

function colorpick(event){
	for(var i=0; i<32; i++){
		$('#c'+i).removeClass('selected');
	}
	selectedColorIndex=event.data.index;
	$('#c'+selectedColorIndex).addClass('selected');
}