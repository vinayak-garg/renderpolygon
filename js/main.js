var triangles = [];
var WIDTH, HEIGHT;
var tcolors = [];

function draw(){
	var $container = $('#rp_canvas');
	$container.html('');

	// create a WebGL renderer, camera
	// and a scene
	var renderer = new THREE.WebGLRenderer();
	var camera = new THREE.OrthographicCamera(WIDTH/-2, WIDTH/2, HEIGHT/2, HEIGHT/-2 , NEAR, FAR);
	var scene = new THREE.Scene();

	// the camera starts at 0,0,0 so pull it back
	camera.position.z = 300;

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);

	// attach the render-supplied DOM element
	$container.append(renderer.domElement);

	// and the camera
	scene.add(camera);

	for (var i=0; i<triangles.length; i++){
		var triangleGeometry = new THREE.Geometry();
		triangleGeometry.vertices.push(new THREE.Vector3(triangles[i][0], triangles[i][1], triangles[i][2]));
		triangleGeometry.vertices.push(new THREE.Vector3(triangles[i][3], triangles[i][4], triangles[i][5]));
		triangleGeometry.vertices.push(new THREE.Vector3(triangles[i][6], triangles[i][7], triangles[i][8]));
		triangleGeometry.faces.push(new THREE.Face3(0, 1, 2));
		var triangleMaterial = new THREE.MeshBasicMaterial({
			color:parseInt(colors[tcolors[i]], 16),
			side:THREE.DoubleSide
		});
		var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
		triangleMesh.position.set(-1.5, 0.0, 4.0);
		scene.add(triangleMesh);
	}
	
	// draw!
	renderer.render(scene, camera);	
}

function updateTable(){
	$('#object_table').html('');
	for (var i=0; i<triangles.length; i++){
		s='<tr><td>';
		if($('input:radio[name=poly_type]').val()=='tri'){
			s+='Triangle';
		}else{
			s+='Quadrilateral';
		}
		s+='</td><td>'+'<div class="cell" style="background:#'+colors[tcolors[i]]+'">&nbsp;</div></td>';
		s+='<td>('+triangles[i][0]+', '+triangles[i][1]+', '+triangles[i][2]+'), ';
		s+='('+triangles[i][3]+', '+triangles[i][4]+', '+triangles[i][5]+'), ';
		s+='('+triangles[i][6]+', '+triangles[i][7]+', '+triangles[i][8]+')</td>';
		s+='<td><a href="#"><img src="/img/edit.png" id="icon"></a> <a href="#"><img src="/img/delete.png" id="icon"></a></td></tr>';
		$('#object_table').append(s);
	}
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
	if(opt==1){WIDTH=320;HEIGHT=240;}
	else if (opt==2){WIDTH=640;HEIGHT=480;}
	else if (opt==3){WIDTH=800;HEIGHT=600;}
	draw();
}

function render(){
	x1=$('#x1').val();
	y1=$('#y1').val();
	z1=$('#z1').val();
	x2=$('#x2').val();
	y2=$('#y2').val();
	z2=$('#z2').val();
	x3=$('#x3').val();
	y3=$('#y3').val();
	z3=$('#z3').val();
	triangles.push([x1, y1, z1, x2, y2, z2, x3, y3, z3]);
	tcolors.push(selectedColorIndex);
	updateTable();
	draw();
	return false;
}

$(document).ready(function(){
	$('input:radio[name=poly_type]').click(polyType);
	$('input:radio[name=poly_type][value=tri]').click();
	$('input:radio[name=cnv_size]').click(cnvSize);
	$('input:radio[name=cnv_size][value=1]').click();
	$('#render_btn').click(render);
	colorpicker();
	$('#c0').click()
});