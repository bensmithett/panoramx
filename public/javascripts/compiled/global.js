(function() {
  var $container, ASPECT, FAR, HEIGHT, NEAR, VIEW_ANGLE, WIDTH, camera, geometry, radius, renderer, rings, scene, segments, sphere, sphereMaterial;

  WIDTH = 400;

  HEIGHT = 300;

  VIEW_ANGLE = 45;

  ASPECT = WIDTH / HEIGHT;

  NEAR = 1;

  FAR = 10000;

  $container = $("#container");

  radius = 50;

  segments = 16;

  rings = 16;

  renderer = new THREE.WebGLRenderer();

  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

  scene = new THREE.Scene();

  camera.position.z = 300;

  renderer.setSize(WIDTH, HEIGHT);

  $container.append(renderer.domElement);

  geometry = new THREE.SphereGeometry(radius, segments, rings);

  sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000
  });

  sphere = new THREE.Mesh(geometry, sphereMaterial);

  scene.add(camera);

  scene.add(sphere);

  renderer.render(scene, camera);

}).call(this);
