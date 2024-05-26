// BubbleBackground.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BubbleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / document.documentElement.scrollHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, document.documentElement.scrollHeight);
    renderer.setClearColor(0xf8fafc, 1); // Setting the background color to bg-gray-50 (#f8fafc)
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const bubbles = [];
    const blueShades = [
      '#ADD8E6', // LightBlue
      '#B0E0E6', // PowderBlue
      '#AFEEEE', // PaleTurquoise
      '#87CEFA', // LightSkyBlue
      '#87CEEB', // SkyBlue
      '#00BFFF', // DeepSkyBlue
      '#B0C4DE', // LightSteelBlue
      '#E0FFFF', // LightCyan
      '#F0FFFF', // Azure
      '#F0F8FF', // AliceBlue
      '#E6E6FA', // Lavender
      '#CCCCFF', // LightPeriwinkle
    ];

    function getRandomLightBlueColor() {
      return blueShades[Math.floor(Math.random() * blueShades.length)];
    }

    function getRandomSize(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < 50; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: getRandomLightBlueColor(),
        roughness: 0.2,
        metalness: 0.1,
        emissive: getRandomLightBlueColor(),
        emissiveIntensity: 0.5,
      });
      const bubble = new THREE.Mesh(geometry, material);
      const size = getRandomSize(0.2, 0.8); // Random size between 0.2 and 0.8
      bubble.scale.set(size, size, size);
      bubble.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      bubble.castShadow = true;
      bubble.receiveShadow = true;
      scene.add(bubble);
      bubbles.push(bubble);
    }

    // Adding lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    camera.position.z = 5;

    // Function to change colors at intervals
    const changeColors = () => {
      bubbles.forEach(bubble => {
        bubble.material.color.set(getRandomLightBlueColor());
        bubble.material.emissive.set(getRandomLightBlueColor());
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);
      bubbles.forEach(bubble => {
        bubble.position.y += 0.01;
        if (bubble.position.y > 5) bubble.position.y = -5;
      });
      renderer.render(scene, camera);
    };

    animate();

    // Change colors every second 
    const colorChangeInterval = setInterval(changeColors, 3000);

    const handleResize = () => {
      camera.aspect = window.innerWidth / document.documentElement.scrollHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, document.documentElement.scrollHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(colorChangeInterval);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }} />;
};

export default BubbleBackground;
