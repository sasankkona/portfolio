/* script.js */

// Load EmailJS SDK
const emailjsScript = document.createElement('script');
emailjsScript.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js';
emailjsScript.onload = () => {
  emailjs.init('IYHkWGjmA1Q6MoBCR'); // Replace with your EmailJS user ID
};
document.head.appendChild(emailjsScript);

// Form validation and email sending for contact form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const successMessage = document.getElementById('success-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    // Reset error messages
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    messageError.classList.add('hidden');
    successMessage.classList.add('hidden');

    // Validate name
    if (nameInput.value.trim() === '') {
      nameError.classList.remove('hidden');
      valid = false;
    }

    // Validate email
    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      valid = false;
    }

    // Validate message
    if (messageInput.value.trim() === '') {
      messageError.classList.remove('hidden');
      valid = false;
    }

    if (valid) {
      // Send email using EmailJS
      emailjs.send('service_akeh6a9', 'template_4uknb6c', {
        from_name: nameInput.value.trim(),
        from_email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      })
      .then(() => {
        successMessage.classList.remove('hidden');
        form.reset();
      }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
    }
  });
});

// Three.js 3D model integration - spinning cube with orbit controls
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero-3d');
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Resize handler
  function onWindowResize() {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }
  window.addEventListener('resize', onWindowResize);

  // Cube geometry and material
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // OrbitControls for interaction
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Auto rotate cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update();
    renderer.render(scene, camera);
  }

  animate();
});
