function main() {
	const canvas = document.querySelector('canvas');

	const fov = 50;
	const aspect = canvas.clientWidth / canvas.clientHeight;
	const near = 0.1;
	const far = 2000;

	const camera = new THREE.perspectiveCamera(fov, aspect, near, far);

	const renderer = new THREE.WebGLRenderer({ canvas });

	const width = canvas.clientWidth;
	const height = canvas.clientHeight;

	renderer.setSize(width, height);

	const scene = new THREE.Scene();
	const loader = new THREE.TextureLoader();
	loader.load('media/ocean.jpg'),
		() => {
			scene.background = texture;
		};

	function render() {
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);
}

main();
