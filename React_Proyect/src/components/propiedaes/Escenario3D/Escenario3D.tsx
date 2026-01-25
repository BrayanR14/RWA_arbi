import { useEffect, useRef } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Escenario3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const mount = mountRef.current;
  if (!mount) return;

  if (mount.childElementCount > 0) return;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f172a);

  const camera = new THREE.PerspectiveCamera(
    75,
    mount.clientWidth / mount.clientHeight,
    0.1,
    1000
  );
  camera.position.set(5, 5, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  mount.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 7);
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);

  const grid = new THREE.GridHelper(20, 20);
  scene.add(grid);

  const exporter = new GLTFLoader();
  exporter.load('/models/house/scene.gltf', (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    model.position.set(0, 0, 0);
    scene.add(model);
  });

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x38bdf8 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  let animationId: number;

  const animate = () => {
    animationId = requestAnimationFrame(animate);
    cube.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  const handleResize = () => {
    camera.aspect = mount.clientWidth / mount.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
  };
  window.addEventListener("resize", handleResize);

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", handleResize);
    renderer.dispose();
    mount.innerHTML = "";
  };
}, []);


  return <div ref={mountRef} style={{ width: "100%", height: "600px" }} />;
};

export default Escenario3D;
