
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

//camara

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);

camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 5;

camera.rotation.set(0, 0, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//pimaride

lado=40;              
h=50;
color=0xFF0000;

    [v1, v2, v3, v4, v5] = [[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado],[lado/2,h,lado/2]];
    var vertices = [v1,v2,v3,v4,v5,v1,v4,v3,v5,v2];
    geom = Geometry(vertices);

    material=[]; //material de las piramides
    material.push(new THREE.ParticleBasicMaterial(color)); //0(naranja) ,1(morado) o 2(verde)

    //figuras para las piramides 
    fig=[];
    fig.push(new THREE.Line(geom,material[0]));

//luz

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

//Cuadricula

const size = 150;
const divisions = 150;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//añadir a escena

scene.add(Cara1)


function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();