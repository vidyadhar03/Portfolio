// BubbleBackground.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BubbleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xf8fafc, 1); // Setting the background color to bg-gray-50 (#f8fafc)
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const bubbles = [];

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    for (let i = 0; i < 50; i++) {
      const material = new THREE.MeshBasicMaterial({ color: getRandomColor() });
      const bubble = new THREE.Mesh(geometry, material);
      bubble.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      scene.add(bubble);
      bubbles.push(bubble);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      bubbles.forEach(bubble => {
        bubble.position.y += 0.01;
        if (bubble.position.y > 5) bubble.position.y = -5;
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default BubbleBackground;
