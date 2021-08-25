import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const raycaster = new THREE.Raycaster();

const Geometries = ({ locale }) => {
  const ref = useRef();
  const mouse = new THREE.Vector2();

  function cylinderLathe(R, r, h, phiStart, phiLength) {
    let halfH = h * 0.5;

    let points = [
      new THREE.Vector2(r, -halfH),
      new THREE.Vector2(R, -halfH),
      new THREE.Vector2(R, halfH),
      new THREE.Vector2(r, halfH),
      new THREE.Vector2(r, -halfH),
    ];
    return new THREE.LatheBufferGeometry(points, 72, phiStart, phiLength);
  }

  useEffect(() => {
    const container = document.querySelector(".scene");
    var scene = new THREE.Scene();
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
      container.clientWidth / -90,
      container.clientWidth / 90,
      container.clientHeight / 90,
      container.clientHeight / -90,
      1,
      1000
    );

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    ref.current.appendChild(renderer.domElement);
    // const controls = new OrbitControls(camera, renderer.domElement);

    //   -------------geomtery
    const sphereGeoBig = new THREE.SphereBufferGeometry(2.3, 64, 64);
    const sphereGeoSmall = new THREE.SphereBufferGeometry(0.8, 64, 64);
    const sphereGeoMedium = new THREE.SphereBufferGeometry(1, 64, 64);
    const solidCylinder = new THREE.CylinderBufferGeometry(2.5, 2.5, 0.4, 32);
    const hollowCylinder1 = cylinderLathe(2.2, 1.4, 0.2);
    const hollowCylinder2 = cylinderLathe(5, 3.5, 0.4);
    const hollowCylinder3 = cylinderLathe(6, 4.5, 0.5, 0.6, 4);
    const hollowCylinder4 = cylinderLathe(3, 2, 0.5, -1, 3.5);

    //   -------------texture
    const texture0 = new THREE.TextureLoader().load(
      "/assets/images/group40.svg"
    );
    const texture1 = new THREE.TextureLoader().load(
      "/assets/images/group10.svg"
    );
    const texture2 = new THREE.TextureLoader().load(
      "/assets/images/group17.svg"
    );
    const texture3 = new THREE.TextureLoader().load(
      "/assets/images/group13.svg"
    );
    const texture4 = new THREE.TextureLoader().load(
      "/assets/images/group20.svg"
    );
    //   -------------material
    const material0 = new THREE.MeshStandardMaterial({ map: texture0 });
    const material1 = new THREE.MeshPhongMaterial({ map: texture1 });
    const material2 = new THREE.MeshStandardMaterial({ map: texture2 });
    const material3 = new THREE.MeshPhongMaterial({ map: texture3 });
    const material4 = new THREE.MeshStandardMaterial({ map: texture4 });
    const material5 = new THREE.MeshStandardMaterial({
      color: 0x404e40,
      flatShading: true,
    });
    const material6 = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      flatShading: true,
    });
    //   --------------mesh
    const sphere0 = new THREE.Mesh(sphereGeoBig, material0);
    const sphere1 = new THREE.Mesh(sphereGeoBig, material1);
    const sphere2 = new THREE.Mesh(sphereGeoSmall, material2);
    const sphere3 = new THREE.Mesh(sphereGeoSmall, material3);
    const sphere4 = new THREE.Mesh(sphereGeoMedium, material4);
    const sphere5 = new THREE.Mesh(sphereGeoBig, material3);
    const cylinder1 = new THREE.Mesh(hollowCylinder1, material5);
    const cylinder2 = new THREE.Mesh(hollowCylinder2, material5);
    const cylinder3 = new THREE.Mesh(hollowCylinder3, material5);
    const cylinder4 = new THREE.Mesh(hollowCylinder4, material5);
    const cylinder5 = new THREE.Mesh(solidCylinder, material6);
    //   --------------light
    const light = new THREE.PointLight(0xffffff, 1.2, 100);
    const ambient = new THREE.AmbientLight(0xffffff, 0.2);
    //   --------------position
    camera.position.set(
      -(2.2 * window.innerWidth) / 200 + 9,
      -(1.1 * window.innerHeight) / 100 + 9,
      20
    );
    light.position.set(6, 1, 10);
    sphere0.position.set(3, 0, 0);
    sphere1.position.set(-1.5, 7.3, 1.5);
    sphere2.position.set(6.5, 1.5, 2);
    sphere3.position.set(7.5, -1.5, 0);
    sphere4.position.set(0.2, -2.2, 6);
    sphere5.position.set(6.7, 9.7, -1);
    cylinder1.position.set(0.2, -2.2, 6);
    cylinder2.position.set(5, 3.5, -5);
    cylinder3.position.set(3, 7.8, -8);
    cylinder4.position.set(4, -4, -8);
    cylinder5.position.set(8.5, -3.5, -4);
    //   --------------rotation
    sphere0.rotation.set(0.2, 0, 0.3);
    sphere1.rotation.set(0.3, 0, 0);
    sphere3.rotation.set(1.2, 0, 0.2);
    sphere4.rotation.set(0.8, 0, 0);
    sphere5.rotation.set(-0.8, -0.5, 3.2);
    cylinder1.rotation.set(0.6, -0.3, -0.4);
    cylinder2.rotation.set(0.1, 0.7, 0.8);
    cylinder3.rotation.set(0, 0.7, -1.3);
    cylinder4.rotation.set(2, 0, 0);
    cylinder5.rotation.set(0.5, 0, -0.5);
    // ---------------scale

    const movableObjects = [
      sphere0.uuid,
      sphere1.uuid,
      sphere2.uuid,
      sphere3.uuid,
      sphere4.uuid,
    ];

    //   --------------add to scene
    scene.add(light);
    scene.add(ambient);
    scene.add(sphere0);
    scene.add(sphere1);
    scene.add(sphere2);
    scene.add(sphere3);
    scene.add(sphere4);
    scene.add(cylinder1);
    scene.add(cylinder2);
    scene.add(cylinder3);
    scene.add(cylinder4);
    scene.add(cylinder5);
    scene.add(sphere5);
    // ----------------1st render positioning and scale
    // if (window.innerWidth < 576) {
    //   scene.scale.set(0.8, 0.8, 0.8);
    // }
    // if (window.innerWidth > 576) {
    //   scene.scale.set(0.9, 0.9, 0.9);
    // }
    // if (window.innerWidth > 768) {
    //   scene.scale.set(1, 1, 1);
    //   camera.position.set(
    //     -(2.2 * window.innerWidth) / 200 + 9,
    //     -(1.1 * window.innerHeight) / 100 + 9,
    //     20
    //   );
    // }
    // if (window.innerWidth > 1919) {
    //   scene.scale.set(1.2, 1.2, 1.2);
    //   camera.position.set(
    //     -(2.2 * window.innerWidth) / 200 + 10,
    //     -(1.1 * window.innerHeight) / 100 + 10,
    //     20
    //   );
    // }

    var hoveredObjects = {};

    var animate = function () {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      var hoveredObjectUuids = intersects.map(el => el.object.uuid);

      for (let i = 0; i < intersects.length; i++) {
        var hoveredObj = intersects[i].object;

        if (hoveredObjects[hoveredObj.uuid]) {
          continue; // this object was hovered and still hovered
        }

        if (movableObjects.indexOf(intersects[i].object.uuid) != -1) {
          intersects[i].object.position.y += 0.2;
        }

        // collect hovered object
        hoveredObjects[hoveredObj.uuid] = hoveredObj;
      }
      for (let uuid of Object.keys(hoveredObjects)) {
        let idx = hoveredObjectUuids.indexOf(uuid);
        if (idx === -1) {
          // object with given uuid was unhovered
          let unhoveredObj = hoveredObjects[uuid];
          delete hoveredObjects[uuid];
          if (movableObjects.indexOf(unhoveredObj.uuid) != -1) {
            unhoveredObj.position.y -= 0.2;
          }
        }
      }

      // controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    //   -------------scroll
    const onScroll = () => {
      if (sphere1 && sphere3) {
        sphere0.rotation.y -= 0.1;
      }
    };

    function onMouseMove(event) {
      if (locale === "fa") {
        mouse.x = -(event.clientX / container.clientWidth) * 2 + 1;
      } else {
        mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
      }
      mouse.y =
        -((event.clientY + window.scrollY) / container.clientHeight) * 2 + 1;

    }

    const onWindowResize = () => {
      // camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // if (window.innerWidth < 576) {
      //   scene.scale.set(0.8, 0.8, 0.8);
      // }
      // if (window.innerWidth > 576) {
      //   scene.scale.set(0.9, 0.9, 0.9);
      // }
      // if (window.innerWidth > 768) {
      //   scene.scale.set(1, 1, 1);
      //   camera.position.set(
      //     -(2.2 * 768) / 200 + 9,
      //     -(1.1 * window.innerHeight) / 100 + 9,
      //     20
      //   );
      // }
      // if (window.innerWidth > 1919) {
      //   scene.scale.set(1.2, 1.2, 1.2);
      //   camera.position.set(
      //     -(2.2 * 1920) / 200 + 10,
      //     -(1.1 * window.innerHeight) / 100 + 10,
      //     20
      //   );
      // }

      // renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove, true);
    window.addEventListener("resize", onWindowResize);

    return () => {
      ref.current.removeChild(renderer.domElement);
    };
  }, [locale]);

  return (
    <div
      className={`scene ${locale === "fa" ? "reverseLeft" : ""}`}
      ref={ref}></div>
  );
};

export default Geometries;
