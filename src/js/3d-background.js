/**
 * 3D Background Elements
 * Creates an interactive 3D background with particle system
 */

document.addEventListener("DOMContentLoaded", () => {
  // Create a container for the 3D canvas
  const container = document.createElement("div");
  container.className = "background-3d"; // Changed from '3d-background' to 'background-3d'
  document.body.appendChild(container);

  // Initialize Three.js
  let scene, camera, renderer, particles;
  let mouseX = 0,
    mouseY = 0;

  // Responsive settings
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  // Initialize the 3D scene
  init();

  function init() {
    // Create scene
    scene = new THREE.Scene();

    // Create camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.z = 1000;

    // Create particle system
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    const colorPrimary = new THREE.Color(0x5045e4); // Primary accent color
    const colorSecondary = new THREE.Color(0x00c2ff); // Secondary accent color

    // Create particles
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      vertices.push(x, y, z);

      // Interpolate between primary and secondary colors
      const mixedColor = new THREE.Color().lerpColors(
        colorPrimary,
        colorSecondary,
        Math.random()
      );

      colors.push(mixedColor.r, mixedColor.g, mixedColor.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    // Create material
    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });

    // Create particle system
    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // Add event listeners
    document.addEventListener("mousemove", onDocumentMouseMove);
    window.addEventListener("resize", onWindowResize);

    // Start animation loop
    animate();
  }

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.05;
    mouseY = (event.clientY - windowHalfY) * 0.05;
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    // Rotate particles based on mouse position
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.001;

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
});
