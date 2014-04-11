function draw(){

	// set the scene size
	var WIDTH = 400,
	  HEIGHT = 300;

	// set some camera attributes
	var VIEW_ANGLE = 45,
	  ASPECT = WIDTH / HEIGHT,
	  NEAR = 0.1,
	  FAR = 10000;

	// get the DOM element to attach to
	// - assume we've got jQuery to hand
	var $container = $('#container');

	// create a WebGL renderer, camera
	// and a scene
	var renderer = new THREE.WebGLRenderer();
	var camera =
	  new THREE.PerspectiveCamera(
	    VIEW_ANGLE,
	    ASPECT,
	    NEAR,
	    FAR);

	var scene = new THREE.Scene();

	// add the camera to the scene
	scene.add(camera);

	// the camera starts at 0,0,0
	// so pull it back
	camera.position.z = 300;

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);

	// attach the render-supplied DOM element
	$container.append(renderer.domElement);
}

function polyType(){
	var p=3;
	if($(this).val()=='quad')p=4;
	$('#coords').html('');
	for(var i=1; i<=p; i++){
		$('#coords').append('X'+i+' ');
		$('#coords').append('<input type="text" size="3"> ');
		$('#coords').append('Y'+i+' ');
		$('#coords').append('<input type="text" size="3"> ');
		$('#coords').append('Z'+i+' ');
		$('#coords').append('<input type="text" size="3">');
		$('#coords').append('<br>');
	}
}

function cnvSize(){
	$('');
}

$(document).ready(function(){
	$('input:radio[name=poly_type]').click(polyType);
	$('input:radio[name=poly_type][value=tri]').click();
	$('input:radio[name=cnv_size]').click(cnvSize);
	$('input:radio[name=cnv_size][value=1]').click();
});