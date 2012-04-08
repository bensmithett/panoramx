WIDTH = 400
HEIGHT = 300

# Camera
VIEW_ANGLE = 45
ASPECT = WIDTH/HEIGHT
NEAR = 1
FAR = 10000

# DOM
$container = $("#container")

# Sphere
radius = 50
segments = 16
rings = 16

renderer = new THREE.WebGLRenderer()
camera = new THREE.PerspectiveCamera VIEW_ANGLE, ASPECT, NEAR, FAR
scene = new THREE.Scene()

# Set initial camera position (starts at 0,0,0)
camera.position.z = 300
renderer.setSize WIDTH, HEIGHT
$container.append renderer.domElement

# Define sphere & material
geometry = new THREE.SphereGeometry radius, segments, rings
sphereMaterial = new THREE.MeshBasicMaterial
  color: 0xff0000

# Create sphere
sphere = new THREE.Mesh geometry, sphereMaterial

scene.add camera
scene.add sphere
renderer.render scene, camera
