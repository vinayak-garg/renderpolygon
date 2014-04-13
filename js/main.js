triangles = []

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
	//scene.add(sphere);

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

	var triangleGeometry = new THREE.Geometry();
	triangleGeometry.vertices.push(new THREE.Vector3( 0.0,  100.0, 0.0));
	triangleGeometry.vertices.push(new THREE.Vector3(-100.0, -1.0, 0.0));
	triangleGeometry.vertices.push(new THREE.Vector3( 10.0, -10.0, 20.0));
	triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
	var triangleMaterial = new THREE.MeshBasicMaterial({
		color:0xFFFFFF,
		side:THREE.DoubleSide
	});
	var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
	triangleMesh.position.set(-1.5, 0.0, 4.0);
	scene.add(triangleMesh);

	// draw!
	renderer.render(scene, camera);	
}

function polyType(){
	var p=3;
	if($(this).val()=='quad')p=4;
	$('#coords').html('');
	for(var i=1; i<=p; i++){
		$('#coords').append('X'+i+' ');
		$('#coords').append('<input type="text" size="3" id="x'+i+'"> ');
		$('#coords').append('Y'+i+' ');
		$('#coords').append('<input type="text" size="3" id="y'+i+'"> ');
		$('#coords').append('Z'+i+' ');
		$('#coords').append('<input type="text" size="3" id="z'+i+'">');
		$('#coords').append('<br>');
	}
}

function cnvSize(){
	var opt=$(this).val();
	if(opt==1)draw(320,240);
	else if (opt==2)draw(640,480);
	else if (opt==3)draw(800,600);
}

function render(){
	x1=$('#x1').val()
	y1=$('#y1').val()
	z1=$('#z1').val()
	x2=$('#x2').val()
	y2=$('#y2').val()
	z2=$('#z2').val()
	x3=$('#x3').val()
	y3=$('#y3').val()
	z3=$('#z3').val()
	//var tri=
	//console.log($('input:radio[name=poly_type]').val());
	//alert();
}

$(document).ready(function(){
	$('input:radio[name=poly_type]').click(polyType);
	$('input:radio[name=poly_type][value=tri]').click();
	$('input:radio[name=cnv_size]').click(cnvSize);
	$('input:radio[name=cnv_size][value=1]').click();
	$('#render_btn').click(render);
	colorpicker();
	$('#c0').click()
	//draw(320,240);
});