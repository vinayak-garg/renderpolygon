function draw(WIDTH,HEIGHT){
	// set the scene size
	//var WIDTH = 800,
	  //  HEIGHT = 600;

	// set some camera attributes
	var VIEW_ANGLE = 45,
	    ASPECT = WIDTH / HEIGHT,
	    NEAR = 0.1,
	    FAR = 10000;

	// get the DOM element to attach to
	// - assume we've got jQuery to hand
	var $container = $('#rp_canvas');
	$container.html('');

	// create a WebGL renderer, camera
	// and a scene
	var renderer = new THREE.WebGLRenderer();
	var camera = new THREE.PerspectiveCamera(  VIEW_ANGLE,
	                                ASPECT,
	                                NEAR,
	                                FAR  );
	var scene = new THREE.Scene();

	// the camera starts at 0,0,0 so pull it back
	camera.position.z = 300;

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);

	// attach the render-supplied DOM element
	$container.append(renderer.domElement);

	// create the sphere's material
	var sphereMaterial = new THREE.MeshLambertMaterial(
	{
	    color: 0xCC0000
	});

	// set up the sphere vars
	var radius = 50, segments = 16, rings = 16;

	// create a new mesh with sphere geometry -
	// we will cover the sphereMaterial next!
	var sphere = new THREE.Mesh(
	   new THREE.SphereGeometry(radius, segments, rings),
	   sphereMaterial);

	// add the sphere to the scene
	scene.add(sphere);

	// and the camera
	scene.add(camera);

	// create a point light
	var pointLight = new THREE.PointLight( 0xFFFFFF );

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);

	// draw!
	renderer.render(scene, camera);	
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
	var opt=$(this).val();
	if(opt==1)draw(320,240);
	else if (opt==2)draw(640,480);
	else if (opt==3)draw(800,600);
}

$(document).ready(function(){
	$('input:radio[name=poly_type]').click(polyType);
	$('input:radio[name=poly_type][value=tri]').click();
	$('input:radio[name=cnv_size]').click(cnvSize);
	$('input:radio[name=cnv_size][value=1]').click();
	colorpicker();
	$('#c0').click()
	//draw(320,240);
});