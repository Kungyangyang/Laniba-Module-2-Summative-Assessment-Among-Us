//Christian C. Laniba - A224
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

scene.background = new THREE.Color(0x000000);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const audioListener = new THREE.AudioListener();
camera.add(audioListener);

  //SOUNDS^^
const footstepsLoader = new THREE.AudioLoader();
let footstepSound = null;

footstepsLoader.load('assets/sounds/walk.mp3', (buffer) => {
    footstepSound = new THREE.Audio(audioListener);
    footstepSound.setBuffer(buffer);
    footstepSound.setLoop(true);
    footstepSound.setVolume(1.5);
});

const ambienceLoader = new THREE.AudioLoader();
let ambienceSound = null;

ambienceLoader.load('assets/sounds/ambience.mp3', (buffer) => {
    ambienceSound = new THREE.Audio(audioListener);
    ambienceSound.setBuffer(buffer);
    ambienceSound.setLoop(true);
    ambienceSound.setVolume(0.25);
    ambienceSound.play();
});


//TEXTURES
const starTexture = new THREE.TextureLoader().load("assets/textures/star.png");
const doorTexture = new THREE.TextureLoader().load("assets/textures/door.png");
const ventTexture = new THREE.TextureLoader().load("assets/textures/sussy_vent.png");
const powerTexture = new THREE.TextureLoader().load("assets/textures/power.png");
const commsTexture = new THREE.TextureLoader().load("assets/textures/comms.png");
const doubleTaskTexture = new THREE.TextureLoader().load("assets/textures/double_task.png");
const trashChuteTexture = new THREE.TextureLoader().load('assets/textures/frame.png');
const trashHoleTexture = new THREE.TextureLoader().load('assets/textures/trash_hole.png');
const emergencyTexture = new THREE.TextureLoader().load('assets/textures/emergency.png');
const emergencyTextTexture = new THREE.TextureLoader().load('assets/textures/emergency_text.png');
const pizzaTexture = new THREE.TextureLoader().load('assets/textures/pizza.png');
const wallEdgeTexture = new THREE.TextureLoader().load("assets/textures/concrete.png");
const afkTexture = new THREE.TextureLoader().load('assets/textures/afk.png');

const floorTexture = new THREE.TextureLoader().load('assets/textures/floor.png');
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(15, 15);

const wallTexture = new THREE.TextureLoader().load('assets/textures/wall.png');
wallTexture.wrapS = THREE.RepeatWrapping;
wallTexture.wrapT = THREE.RepeatWrapping;
wallTexture.repeat.set(4, 1);

const wallFlippedTexture = new THREE.TextureLoader().load('assets/textures/wall.png');
wallFlippedTexture.flipY = false;
wallFlippedTexture.wrapS = THREE.RepeatWrapping;
wallFlippedTexture.wrapT = THREE.RepeatWrapping;
wallFlippedTexture.repeat.set(4, 1);

const windowTexture = new THREE.TextureLoader().load('assets/textures/frame.png');
windowTexture.wrapS = THREE.RepeatWrapping;
windowTexture.wrapT = THREE.RepeatWrapping;
windowTexture.repeat.set(6, 1);

const windowGlassTexture = new THREE.TextureLoader().load('assets/textures/window.png');
windowGlassTexture.wrapS = THREE.RepeatWrapping;
windowGlassTexture.wrapT = THREE.RepeatWrapping;
windowGlassTexture.repeat.set(6, 1);


//MATERIALS
const floorGeometry = new THREE.BoxGeometry(500, 1, 500);
const floorMaterial = new THREE.MeshPhongMaterial({ map: floorTexture });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);
floor.position.x = 0;
floor.position.y = -5;
floor.position.z = 0;
floor.rotation.y = Math.PI / 4;

  //Walls
const topWallGeometry = new THREE.BoxGeometry(200, 1, 30);
const topWallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture});
const topWall = new THREE.Mesh(topWallGeometry, topWallMaterial);
scene.add(topWall);
topWall.position.x = 0;
topWall.position.y = 10;
topWall.position.z = -200;
topWall.rotation.x = Math.PI / 2;

const topRightWallGeometry = new THREE.BoxGeometry(150, 1, 30);
const topRightWallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture});
const topRightWall = new THREE.Mesh(topRightWallGeometry, topRightWallMaterial);
scene.add(topRightWall);
topRightWall.position.x = 152;
topRightWall.position.y = 10;
topRightWall.position.z = -147;
topRightWall.rotation.x = Math.PI / 2;
topRightWall.rotation.z = Math.PI / 4;

const right1WallGeometry = new THREE.BoxGeometry(50, 1, 30);
const right1WallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture});
const right1Wall = new THREE.Mesh(right1WallGeometry, right1WallMaterial);
scene.add(right1Wall);
right1Wall.position.x = 205;
right1Wall.position.y = 10;
right1Wall.position.z = -70;
right1Wall.rotation.x = Math.PI / 2;
right1Wall.rotation.z = Math.PI / 2;

const rightDoorWallGeometry = new THREE.BoxGeometry(50, 8, 30);
const rightDoorWallMaterial = new THREE.MeshPhongMaterial({ map: doorTexture});
const rightDoorWall = new THREE.Mesh(rightDoorWallGeometry, rightDoorWallMaterial);
scene.add(rightDoorWall);
rightDoorWall.position.x = 205;
rightDoorWall.position.y = 10;
rightDoorWall.position.z = -20;
rightDoorWall.rotation.x = Math.PI / 2;
rightDoorWall.rotation.z = Math.PI / 2;

const right2WallGeometry = new THREE.BoxGeometry(50, 1, 30);
const right2WallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture});
const right2Wall = new THREE.Mesh(right2WallGeometry, right2WallMaterial);
scene.add(right2Wall);
right2Wall.position.x = 205;
right2Wall.position.y = 10;
right2Wall.position.z = 30;
right2Wall.rotation.x = Math.PI / 2;
right2Wall.rotation.z = Math.PI / 2;

const bottomRightWallGeometry = new THREE.BoxGeometry(150, 1, 30);
const bottomRightWallMaterial = new THREE.MeshStandardMaterial({ map: wallFlippedTexture});
const bottomRightWall = new THREE.Mesh(bottomRightWallGeometry, bottomRightWallMaterial);
scene.add(bottomRightWall);
bottomRightWall.position.x = 152;
bottomRightWall.position.y = 10;
bottomRightWall.position.z = 108;
bottomRightWall.rotation.x = (Math.PI / 2);
bottomRightWall.rotation.z = -(Math.PI / 4);

const bottomWall1Geometry = new THREE.BoxGeometry(56, 1, 30);
const bottomWall1Material = new THREE.MeshStandardMaterial({ map: wallFlippedTexture});
const bottomWall1 = new THREE.Mesh(bottomWall1Geometry, bottomWall1Material);
scene.add(bottomWall1);
bottomWall1.position.x = 72;
bottomWall1.position.y = 10;
bottomWall1.position.z = 160;
bottomWall1.rotation.x = Math.PI / 2;

const bottomDoorWallGeometry = new THREE.BoxGeometry(55, 8, 30);
const bottomDoorWallMaterial = new THREE.MeshPhongMaterial({ map: doorTexture});
const bottomDoorWall = new THREE.Mesh(bottomDoorWallGeometry, bottomDoorWallMaterial);
scene.add(bottomDoorWall);
bottomDoorWall.position.x = 18;
bottomDoorWall.position.y = 10;
bottomDoorWall.position.z = 160;
bottomDoorWall.rotation.x = Math.PI / 2;

const bottomWall2Geometry = new THREE.BoxGeometry(56, 1, 30);
const bottomWall2Material = new THREE.MeshStandardMaterial({ map: wallFlippedTexture});
const bottomWall2 = new THREE.Mesh(bottomWall2Geometry, bottomWall2Material);
scene.add(bottomWall2);
bottomWall2.position.x = -35;
bottomWall2.position.y = 10;
bottomWall2.position.z = 160;
bottomWall2.rotation.x = Math.PI / 2;

const bottomLeftWallGeometry = new THREE.BoxGeometry(156, 1, 30);
const bottomLeftWallMaterial = new THREE.MeshStandardMaterial({ map: wallFlippedTexture});
const bottomLeftWall = new THREE.Mesh(bottomLeftWallGeometry, bottomLeftWallMaterial);
scene.add(bottomLeftWall);
bottomLeftWall.position.x = -115;
bottomLeftWall.position.y = 10;
bottomLeftWall.position.z = 108;
bottomLeftWall.rotation.x = Math.PI / 2;
bottomLeftWall.rotation.z = Math.PI / 4;

const leftWall1Geometry = new THREE.BoxGeometry(50, 1, 30);
const leftWall1Material = new THREE.MeshStandardMaterial({ map: wallFlippedTexture});
const leftWall1 = new THREE.Mesh(leftWall1Geometry, leftWall1Material);
scene.add(leftWall1);
leftWall1.position.x = -170;
leftWall1.position.y = 10;
leftWall1.position.z = 30;
leftWall1.rotation.x = Math.PI / 2;
leftWall1.rotation.z = Math.PI / 2;

const leftDoorWallGeometry = new THREE.BoxGeometry(50, 8, 30);
const leftDoorWallMaterial = new THREE.MeshPhongMaterial({ map: doorTexture});
const leftDoorWall = new THREE.Mesh(leftDoorWallGeometry, leftDoorWallMaterial);
scene.add(leftDoorWall);
leftDoorWall.position.x = -170;
leftDoorWall.position.y = 10;
leftDoorWall.position.z = -20;
leftDoorWall.rotation.x = Math.PI / 2;
leftDoorWall.rotation.z = Math.PI / 2;

const leftWall2Geometry = new THREE.BoxGeometry(86, 1, 30);
const leftWall2Material = new THREE.MeshStandardMaterial({ map: wallFlippedTexture});
const leftWall2 = new THREE.Mesh(leftWall2Geometry, leftWall2Material);
scene.add(leftWall2);
leftWall2.position.x = -170;
leftWall2.position.y = 10;
leftWall2.position.z = -88;
leftWall2.rotation.x = Math.PI / 2;
leftWall2.rotation.z = Math.PI / 2;

const topLeftWallGeometry = new THREE.BoxGeometry(100, 1, 30);
const topLeftWallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture});
const topLeftWall = new THREE.Mesh(topLeftWallGeometry, topLeftWallMaterial);
scene.add(topLeftWall);
topLeftWall.position.x = -135;
topLeftWall.position.y = 10;
topLeftWall.position.z = -165;
topLeftWall.rotation.x = Math.PI / 2;
topLeftWall.rotation.z = -(Math.PI / 4);
  //End of Walls

  //Wall Edges
const topWallEdgeGeometry = new THREE.BoxGeometry(200, 8, 8);
const topWallEdgeMaterial = new THREE.MeshPhongMaterial({ color: 0x252525 });
const topWallEdge = new THREE.Mesh(topWallEdgeGeometry, topWallEdgeMaterial);
scene.add(topWallEdge);
topWallEdge.position.x = 0;
topWallEdge.position.y = 30;
topWallEdge.position.z = -200;
topWallEdge.rotation.x = Math.PI / 2;

const topRightWallEdgeGeometry = new THREE.BoxGeometry(150, 8, 8);
const topRightWallEdgeMaterial = new THREE.MeshPhongMaterial({ color: 0x252525 });
const topRightWallEdge = new THREE.Mesh(topRightWallEdgeGeometry, topRightWallEdgeMaterial);
scene.add(topRightWallEdge);
topRightWallEdge.position.x = 152;
topRightWallEdge.position.y = 30;
topRightWallEdge.position.z = -147;
topRightWallEdge.rotation.x = Math.PI / 2;
topRightWallEdge.rotation.z = Math.PI / 4;

const rightWallEdgeGeometry = new THREE.BoxGeometry(150, 8, 8);
const rightWallEdgeMaterial = new THREE.MeshPhongMaterial({ color: 0x252525 });
const rightWallEdge = new THREE.Mesh(rightWallEdgeGeometry, rightWallEdgeMaterial);
scene.add(rightWallEdge);
rightWallEdge.position.x = 205;
rightWallEdge.position.y = 30;
rightWallEdge.position.z = -20;
rightWallEdge.rotation.x = Math.PI / 2;
rightWallEdge.rotation.z = Math.PI / 2;

const bottomRightWallEdgeGeometry = new THREE.BoxGeometry(150, 8, 8);
const bottomRightWallEdgeMaterial = new THREE.MeshPhongMaterial({ color: 0x252525 });
const bottomRightWallEdge = new THREE.Mesh(bottomRightWallEdgeGeometry, bottomRightWallEdgeMaterial);
scene.add(bottomRightWallEdge);
bottomRightWallEdge.position.x = 152;
bottomRightWallEdge.position.y = 30; 
bottomRightWallEdge.position.z = 108;
bottomRightWallEdge.rotation.x = Math.PI / 2;
bottomRightWallEdge.rotation.z = -(Math.PI / 4);

const bottomWallEdgeGeometry = new THREE.BoxGeometry(167, 8, 8);
const bottomWallEdgeMaterial = new THREE.MeshPhongMaterial({ color: 0x252525 });
const bottomWallEdge = new THREE.Mesh(bottomWallEdgeGeometry, bottomWallEdgeMaterial);
scene.add(bottomWallEdge);
bottomWallEdge.position.x = 20;
bottomWallEdge.position.y = 30;
bottomWallEdge.position.z = 160;
bottomWallEdge.rotation.x = Math.PI / 2;

const bottomLeftWallEdgeGeometry = new THREE.BoxGeometry(156, 8, 8);
const bottomLeftWallEdgeMaterial = new THREE.MeshPhongMaterial({ color: 0x252525 });
const bottomLeftWallEdge = new THREE.Mesh(bottomLeftWallEdgeGeometry, bottomLeftWallEdgeMaterial);
scene.add(bottomLeftWallEdge);
bottomLeftWallEdge.position.x = -115;
bottomLeftWallEdge.position.y = 30;
bottomLeftWallEdge.position.z = 108;
bottomLeftWallEdge.rotation.x = Math.PI / 2;
bottomLeftWallEdge.rotation.z = Math.PI / 4;

const leftWallEdgeGeometry = new THREE.BoxGeometry(186, 8, 8);
const leftWallEdgeMaterial = new THREE.MeshPhongMaterial({ color: 0x252525 });
const leftWallEdge = new THREE.Mesh(leftWallEdgeGeometry, leftWallEdgeMaterial);
scene.add(leftWallEdge);
leftWallEdge.position.x = -170;
leftWallEdge.position.y = 30;
leftWallEdge.position.z = -37.5;
leftWallEdge.rotation.x = Math.PI / 2;
leftWallEdge.rotation.z = Math.PI / 2;

const topLeftWallEdgeGeometry = new THREE.BoxGeometry(100, 8, 8);
const topLeftWallEdgeMaterial = new THREE.MeshPhongMaterial({ color: 0x252525 });
const topLeftWallEdge = new THREE.Mesh(topLeftWallEdgeGeometry, topLeftWallEdgeMaterial);
scene.add(topLeftWallEdge);
topLeftWallEdge.position.x = -135;
topLeftWallEdge.position.y = 30;
topLeftWallEdge.position.z = -165;
topLeftWallEdge.rotation.x = Math.PI / 2;
topLeftWallEdge.rotation.z = -(Math.PI / 4);


  //Table + Chairs
const bench = new THREE.Shape();
bench.absarc(0, 0, 40, 0, Math.PI / 2.5, false);
const extrudeSettings = {depth: 10, bevelEnabled: false};
    //Mid Table
const midTableGeometry = new THREE.CylinderGeometry(30, 30, 10, 32);
const midTableMaterial = new THREE.MeshPhongMaterial({color: 0x437da2});
const midTable = new THREE.Mesh(midTableGeometry, midTableMaterial);
scene.add(midTable);
midTable.position.x = 0;
midTable.position.y = 0;
midTable.position.z = -15;

const midBenchesGeometry = new THREE.ExtrudeGeometry(bench, extrudeSettings);
const midBenchesMaterial = new THREE.MeshPhongMaterial({ color: 0x437da2 });
const midBenches = new THREE.Mesh(midBenchesGeometry, midBenchesMaterial);
scene.add(midBenches);
midBenches.rotation.x = Math.PI / 2;
midBenches.position.y = 0;
midBenches.position.z = -15;

for (let i = 1; i < 4; i++) {
  const midClone = midBenches.clone();
  midClone.rotation.z = (Math.PI / 2) * i;
  scene.add(midClone);
  midClone.castShadow = true;
  midClone.receiveShadow = true;
}


    //Top Left Table
const topLeftTableGeometry = new THREE.CylinderGeometry(30, 30, 10, 32);
const topLeftTableMaterial = new THREE.MeshPhongMaterial({color: 0x437da2});
const topLeftTable = new THREE.Mesh(topLeftTableGeometry, topLeftTableMaterial);
scene.add(topLeftTable);
topLeftTable.position.x = -90;
topLeftTable.position.y = 0;
topLeftTable.position.z = -105;

const topLeftBenchesGeometry = new THREE.ExtrudeGeometry(bench, extrudeSettings);
const topLeftBenchesMaterial = new THREE.MeshPhongMaterial({ color: 0x437da2 });
const topLeftBenches = new THREE.Mesh(topLeftBenchesGeometry, topLeftBenchesMaterial);
scene.add(topLeftBenches);
topLeftBenches.rotation.x = Math.PI / 2;
topLeftBenches.position.x = -90;
topLeftBenches.position.y = 0;
topLeftBenches.position.z = -105;

for (let i = 1; i < 4; i++) {
  const topLeftClone = topLeftBenches.clone();
  topLeftClone.rotation.z = (Math.PI / 2) * i;
  scene.add(topLeftClone);
  topLeftClone.castShadow = true;
  topLeftClone.receiveShadow = true;
}

    //Bottom Left Table
const botLeftTableGeometry = new THREE.CylinderGeometry(30, 30, 10, 32);
const botLeftTableMaterial = new THREE.MeshPhongMaterial({color: 0x437da2});
const botLeftTable = new THREE.Mesh(botLeftTableGeometry, botLeftTableMaterial);
scene.add(botLeftTable);
botLeftTable.position.x = -90;
botLeftTable.position.y = 0;
botLeftTable.position.z = 55;

const botLeftBenchesGeometry = new THREE.ExtrudeGeometry(bench, extrudeSettings);
const botLeftBenchesMaterial = new THREE.MeshPhongMaterial({ color: 0x437da2 });
const botLeftBenches = new THREE.Mesh(botLeftBenchesGeometry, botLeftBenchesMaterial);
scene.add(botLeftBenches);
botLeftBenches.rotation.x = Math.PI / 2;
botLeftBenches.position.x = -90;
botLeftBenches.position.y = 0;
botLeftBenches.position.z = 55;

for (let i = 1; i < 4; i++) {
  const botLeftClone = botLeftBenches.clone();
  botLeftClone.rotation.z = (Math.PI / 2) * i;
  scene.add(botLeftClone);
  botLeftClone.castShadow = true;
  botLeftClone.receiveShadow = true;
}

    //Top Right Table
const topRightTableGeometry = new THREE.CylinderGeometry(30, 30, 10, 32);
const topRightTableMaterial = new THREE.MeshPhongMaterial({color: 0x437da2});
const topRightTable = new THREE.Mesh(topRightTableGeometry, topRightTableMaterial);
scene.add(topRightTable);
topRightTable.position.x = 90;
topRightTable.position.y = 0;
topRightTable.position.z = -105;

const topRightBenchesGeometry = new THREE.ExtrudeGeometry(bench, extrudeSettings);
const topRightBenchesMaterial = new THREE.MeshPhongMaterial({ color: 0x437da2 });
const topRightBenches = new THREE.Mesh(topRightBenchesGeometry, topRightBenchesMaterial);
scene.add(topRightBenches);
topRightBenches.rotation.x = Math.PI / 2;
topRightBenches.position.x = 90;
topRightBenches.position.y = 0;
topRightBenches.position.z = -105;

for (let i = 1; i < 4; i++) {
  const topRightClone = topRightBenches.clone();
  topRightClone.rotation.z = (Math.PI / 2) * i;
  scene.add(topRightClone);
  topRightClone.castShadow = true;
  topRightClone.receiveShadow = true;
}

    //Bottom Right Table
const botRightTableGeometry = new THREE.CylinderGeometry(30, 30, 10, 32);
const botRightTableMaterial = new THREE.MeshPhongMaterial({color: 0x437da2});
const botRightTable = new THREE.Mesh(botRightTableGeometry, botRightTableMaterial);
scene.add(botRightTable);
botRightTable.position.x = 90;
botRightTable.position.y = 0;
botRightTable.position.z = 55;

const botRightBenchesGeometry = new THREE.ExtrudeGeometry(bench, extrudeSettings);
const botRightBenchesMaterial = new THREE.MeshPhongMaterial({ color: 0x437da2 });
const botRightBenches = new THREE.Mesh(botRightBenchesGeometry, botRightBenchesMaterial);
scene.add(botRightBenches);
botRightBenches.rotation.x = Math.PI / 2;
botRightBenches.position.x = 90;
botRightBenches.position.y = 0;
botRightBenches.position.z = 55;

for (let i = 1; i < 4; i++) {
  const botRightClone = botRightBenches.clone();
  botRightClone.rotation.z = (Math.PI / 2) * i;
  scene.add(botRightClone);
  botRightClone.castShadow = true;
  botRightClone.receiveShadow = true;
}
  //End of Table + Chairs


  //WALL OBJECTS
const ventGeometry = new THREE.BoxGeometry(20, 1, 15);
const ventMaterial = new THREE.MeshPhongMaterial({ map: ventTexture, transparent: true ,side: THREE.DoubleSide});
const vent = new THREE.Mesh(ventGeometry, ventMaterial);
scene.add(vent);
vent.position.x = 170;
vent.position.y = -4;
vent.position.z = 30;

const powerGeometry = new THREE.PlaneGeometry(16, 12);
const powerMaterial = new THREE.MeshStandardMaterial({ map: powerTexture, transparent: true ,side: THREE.DoubleSide});
const power = new THREE.Mesh(powerGeometry, powerMaterial);
scene.add(power);
power.position.x = -134
power.position.y = 11;
power.position.z = -164;
power.rotation.x = 0;
power.rotation.y = Math.PI / 4;
power.rotation.z = 0;

const doubleTaskGeometry = new THREE.BoxGeometry(40, 3, 20);
const doubleTaskMaterial = new THREE.MeshPhongMaterial({ map: doubleTaskTexture});
const doubleTask = new THREE.Mesh(doubleTaskGeometry, doubleTaskMaterial);
scene.add(doubleTask);
doubleTask.position.x = 128;
doubleTask.position.y = 11;
doubleTask.position.z = -170;
doubleTask.rotation.x = Math.PI / 2;
doubleTask.rotation.z = Math.PI / 4;

const commsGeometry = new THREE.PlaneGeometry(16, 12);
const commsMaterial = new THREE.MeshStandardMaterial({ map: commsTexture, transparent: true ,side: THREE.DoubleSide});
const comms = new THREE.Mesh(commsGeometry, commsMaterial);
scene.add(comms);
comms.position.x = 151;
comms.position.y = 11;
comms.position.z = -146;
comms.rotation.x = 0;
comms.rotation.y = -Math.PI / 4;
comms.rotation.z = 0;

const windowsGeometry = new THREE.BoxGeometry(150, 3, 20);
const windowsMaterial = new THREE.MeshPhongMaterial({ map: windowTexture, transparent: true});
const windows = new THREE.Mesh(windowsGeometry, windowsMaterial);
scene.add(windows);
windows.position.x = 0;
windows.position.y = 11;
windows.position.z = -200;
windows.rotation.x = Math.PI / 2;

const windowsGlassGeometry = new THREE.BoxGeometry(150, 2, 20);
const windowsGlassMaterial = new THREE.MeshStandardMaterial({ map: windowGlassTexture});
const windowsGlass = new THREE.Mesh(windowsGlassGeometry, windowsGlassMaterial);
scene.add(windowsGlass);
windowsGlass.position.x = 0;
windowsGlass.position.y = 11;
windowsGlass.position.z = -200;
windowsGlass.rotation.x = Math.PI / 2;

const trashChuteGeometry = new THREE.BoxGeometry(20, 3, 20);
const trashChuteMaterial = new THREE.MeshStandardMaterial({ map: trashChuteTexture, transparent: true});
const trashChute = new THREE.Mesh(trashChuteGeometry, trashChuteMaterial);
scene.add(trashChute);
trashChute.position.x = 178;
trashChute.position.y = 11;
trashChute.position.z = -120;
trashChute.rotation.x = Math.PI / 2;
trashChute.rotation.z = Math.PI / 4;

const trashChuteHoleGeometry = new THREE.BoxGeometry(20, 1.5, 20);
const trashChuteHoleMaterial = new THREE.MeshStandardMaterial({ map: trashHoleTexture});
const trashChuteHole = new THREE.Mesh(trashChuteHoleGeometry, trashChuteHoleMaterial);
scene.add(trashChuteHole);
trashChuteHole.position.x = 178;
trashChuteHole.position.y = 11;
trashChuteHole.position.z = -120;
trashChuteHole.rotation.x = Math.PI / 2;
trashChuteHole.rotation.z = Math.PI / 4;

    //Lever for Trash Chute
const trashLeverBaseGeometry = new THREE.BoxGeometry(8, 2, 5);
const trashLeverBaseMaterial = new THREE.MeshStandardMaterial({color: 0x83afbd});
const trashLeverBase = new THREE.Mesh(trashLeverBaseGeometry, trashLeverBaseMaterial);
scene.add(trashLeverBase);
trashLeverBase.position.x = 193;
trashLeverBase.position.y = 8;
trashLeverBase.position.z = -105;
trashLeverBase.rotation.x = Math.PI / 2;
trashLeverBase.rotation.z = Math.PI / 4;

const trashLeverPoleGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
const trashLeverPoleMaterial = new THREE.MeshPhongMaterial({color: 0x6a8d98});
const trashLeverPole1 = new THREE.Mesh(trashLeverPoleGeometry, trashLeverPoleMaterial);
scene.add(trashLeverPole1);
trashLeverPole1.position.x = 194;
trashLeverPole1.position.y = 9;
trashLeverPole1.position.z = -104;
trashLeverPole1.rotation.x = Math.PI / 2;
trashLeverPole1.rotation.y = -Math.PI / 4;
trashLeverPole1.rotation.z = Math.PI / 4;

const trashLeverPole2 = new THREE.Mesh(trashLeverPoleGeometry, trashLeverPoleMaterial);
scene.add(trashLeverPole2);
trashLeverPole2.position.x = 192;
trashLeverPole2.position.y = 9;
trashLeverPole2.position.z = -106;
trashLeverPole2.rotation.x = Math.PI / 2;
trashLeverPole2.rotation.y = -Math.PI / 4;
trashLeverPole2.rotation.z = Math.PI / 4;

const trashLeverHandleGeometry = new THREE.BoxGeometry(6, 2, 3);
const trashLeverHandleMaterial = new THREE.MeshPhongMaterial({color: 0x6a8d98});
const trashLeverHandle = new THREE.Mesh(trashLeverHandleGeometry, trashLeverHandleMaterial);
scene.add(trashLeverHandle);
trashLeverHandle.position.x = 190.5;
trashLeverHandle.position.y = 12;
trashLeverHandle.position.z = -102;
trashLeverHandle.rotation.x = Math.PI / 2;
trashLeverHandle.rotation.z = Math.PI / 4;


  //TABLE OBJECTS
const emergencyGeometry = new THREE.BoxGeometry(18, 2, 18);
const emergencyMaterial = new THREE.MeshPhongMaterial({map: emergencyTexture});
const emergency = new THREE.Mesh(emergencyGeometry, emergencyMaterial);
scene.add(emergency);
emergency.position.x = 0;
emergency.position.y = 5;
emergency.position.z = -15;

const redButtonGeometry = new THREE.CylinderGeometry(5, 5, 10, 32);
const redButtonMaterial = new THREE.MeshPhongMaterial({color: 0xe31313});
const redButton = new THREE.Mesh(redButtonGeometry, redButtonMaterial);
scene.add(redButton);
redButton.position.x = 0;
redButton.position.y = 5;
redButton.position.z = -15;

const redButtonCoverGeometry = new THREE.BoxGeometry(14, 14, 14);
const redButtonCoverMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: true, opacity: 0.5,});
const redButtonCover = new THREE.Mesh(redButtonCoverGeometry, redButtonCoverMaterial);
scene.add(redButtonCover);
redButtonCover.position.x = 0;
redButtonCover.position.y = 5;
redButtonCover.position.z = -15;

const emergencyText1Geometry = new THREE.PlaneGeometry(30, 6);
const emergencyText1Material = new THREE.MeshStandardMaterial({map: emergencyTextTexture, transparent: true, side: THREE.DoubleSide});
const emergencyText1 = new THREE.Mesh(emergencyText1Geometry, emergencyText1Material);
scene.add(emergencyText1);
emergencyText1.position.x = 0;
emergencyText1.position.y = 5.5;
emergencyText1.position.z = 0;
emergencyText1.rotation.x = -Math.PI / 2;

const emergencyText2Geometry = new THREE.PlaneGeometry(30, 6);
const emergencyText2Material = new THREE.MeshStandardMaterial({map: emergencyTextTexture, transparent: true, side: THREE.DoubleSide});
const emergencyText2 = new THREE.Mesh(emergencyText2Geometry, emergencyText2Material);
scene.add(emergencyText2);
emergencyText2.position.x = 0;
emergencyText2.position.y = 5.5;
emergencyText2.position.z = -30;
emergencyText2.rotation.x = Math.PI / 2;
emergencyText2.rotation.y = Math.PI;

    //Plates
const plateGeometry = new THREE.BoxGeometry(15, 3, 10);
const plateMaterial = new THREE.MeshStandardMaterial({color: 0xc5c5c5});

const botLeftPlate1 = new THREE.Mesh(plateGeometry, plateMaterial);
scene.add(botLeftPlate1);
botLeftPlate1.position.x = -75;
botLeftPlate1.position.y = 5;
botLeftPlate1.position.z = 65;
botLeftPlate1.rotation.y = Math.PI / 4;

const botLeftPlate2 = new THREE.Mesh(plateGeometry, plateMaterial);
scene.add(botLeftPlate2);
botLeftPlate2.position.x = -85;
botLeftPlate2.position.y = 5;
botLeftPlate2.position.z = 45;
botLeftPlate2.rotation.y = -Math.PI / 4;

const botRightPlate1 = new THREE.Mesh(plateGeometry, plateMaterial);
scene.add(botRightPlate1);
botRightPlate1.position.x = 75;
botRightPlate1.position.y = 5;
botRightPlate1.position.z = 45;

const topRightPlate1 = new THREE.Mesh(plateGeometry, plateMaterial);
scene.add(topRightPlate1);
topRightPlate1.position.x = 75;
topRightPlate1.position.y = 5;
topRightPlate1.position.z = -115;
topRightPlate1.rotation.y = Math.PI / 4;

const topRightPlate2 = new THREE.Mesh(plateGeometry, plateMaterial);
scene.add(topRightPlate2);
topRightPlate2.position.x = 95;
topRightPlate2.position.y = 7;
topRightPlate2.position.z = -85;

    //Cups
const cupGeometry = new THREE.CylinderGeometry(3, 2, 6, 32);
const cupMaterial = new THREE.MeshStandardMaterial({color: 0x5f5f5f});

const botLeftCup1 = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(botLeftCup1);
botLeftCup1.position.x = -70;
botLeftCup1.position.y = 8;
botLeftCup1.position.z = 55;

const botRightCup1 = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(botRightCup1);
botRightCup1.position.x = 69;
botRightCup1.position.y = 8;
botRightCup1.position.z = 55;

const topRightCup1 = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(topRightCup1);
topRightCup1.position.x = 110;
topRightCup1.position.y = 8;
topRightCup1.position.z = -99;

const topRightCup21 = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(topRightCup21);
topRightCup21.position.x = 107;
topRightCup21.position.y = 8;
topRightCup21.position.z = -90;

const topRightCup22 = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(topRightCup22);
topRightCup22.position.x = 107;
topRightCup22.position.y = 10;
topRightCup22.position.z = -90;

const topRightCup23 = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(topRightCup23);
topRightCup23.position.x = 107;
topRightCup23.position.y = 12;
topRightCup23.position.z = -90;

const topLeftCup1 = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(topLeftCup1);
topLeftCup1.position.x = -110;
topLeftCup1.position.y = 8;
topLeftCup1.position.z = -105;

const topLeftCup2 = new THREE.Mesh(cupGeometry, cupMaterial);
scene.add(topLeftCup2);
topLeftCup2.position.x = -75;
topLeftCup2.position.y = 8;
topLeftCup2.position.z = -90;
topLeftCup2.rotation.x = Math.PI / 2;
topLeftCup2.rotation.z = Math.PI / 4;

const pizzaGeometry = new THREE.PlaneGeometry(10, 10);
const pizzaMaterial = new THREE.MeshPhongMaterial({map: pizzaTexture, transparent: true, side: THREE.DoubleSide, color: 0x9f9f9f});
const pizza = new THREE.Mesh(pizzaGeometry, pizzaMaterial);
scene.add(pizza);
pizza.position.x = -100;
pizza.position.y = 5.5;
pizza.position.z = -90;
pizza.rotation.x = Math.PI / 2;
pizza.rotation.z = -Math.PI / 4;


  //The BIG Star
const starGeometry = new THREE.PlaneGeometry(200, 200);
const starMaterial = new THREE.MeshBasicMaterial({ map: starTexture, transparent: true });
const star = new THREE.Mesh(starGeometry, starMaterial);
scene.add(star);
star.position.x = 0;
star.position.y = 300;
star.position.z = -600;

const starLight = new THREE.DirectionalLight(0x9f9f9f, 5);
starLight.position.set(0, 300, -600);
scene.add(starLight);


  //STAR PARTICLES
const starCount = 2000;
const starsGeometry = new THREE.BufferGeometry();
const starPositions = [];

for (let i = 0; i < starCount; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = Math.random() * 800 + 100; // keeps stars above the scene
  const z = (Math.random() - 0.5) * 2000;
  starPositions.push(x, y, z);
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));

const starsMaterial = new THREE.PointsMaterial({
  map: new THREE.TextureLoader().load('assets/textures/star.png'),
  size: 5,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});

const starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);


  //Your "Trusty" Crewmates
const backpackShape = new THREE.Shape();
backpackShape.moveTo(0, 0);
backpackShape.lineTo(0, 8);
backpackShape.lineTo(2, 8);
backpackShape.lineTo(2, 0);
backpackShape.lineTo(0, 0);

const backpackSettings = {
  steps: 2, depth: 2, bevelEnabled: true, bevelThickness: 1,
  bevelSize: 1, bevelOffset: 1, bevelSegments: 1,
};

const crewmateBodyGeometry = new THREE.CapsuleGeometry(6, 6, 8, 12);

    //Red
const redCrewmate = new THREE.Group();
scene.add(redCrewmate);

const redCrewmateBodyMaterial = new THREE.MeshStandardMaterial({ color: 0xc31f1e });
const redCrewmateBody = new THREE.Mesh(crewmateBodyGeometry, redCrewmateBodyMaterial);
redCrewmateBody.position.set(0, 8, 0);
redCrewmate.add(redCrewmateBody);

const redCrewmateLeg1 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), redCrewmateBodyMaterial);
redCrewmateLeg1.position.set(0, 2, -2.5);
redCrewmate.add(redCrewmateLeg1);
redCrewmateLeg1.rotation.z = Math.PI / 6;

const redCrewmateLeg2 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), redCrewmateBodyMaterial);
redCrewmateLeg2.position.set(0, 2, 2.5);
redCrewmate.add(redCrewmateLeg2);
redCrewmateLeg2.rotation.z = -Math.PI / 6;

const redCrewmateVisorGeometry = new THREE.CapsuleGeometry(3, 4, 8, 8);
const redCrewmateVisorMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
const redCrewmateVisor = new THREE.Mesh(redCrewmateVisorGeometry, redCrewmateVisorMaterial);
redCrewmateVisor.position.set(-4, 10, 0);
redCrewmateVisor.rotation.set(Math.PI / 2, Math.PI / 4, 0);
redCrewmate.add(redCrewmateVisor);

const redCrewmateBackpackGeometry = new THREE.ExtrudeGeometry(backpackShape, backpackSettings);
const redCrewmateBackpack = new THREE.Mesh(redCrewmateBackpackGeometry, redCrewmateBodyMaterial);
redCrewmateBackpack.position.set(6, 3, 0);
redCrewmateBackpack.rotation.y = Math.PI / 2;
redCrewmate.add(redCrewmateBackpack);
redCrewmate.position.set(190, 0, 30);

const redLight = new THREE.PointLight(0xff0000, 15, 50, 0.5);
redLight.position.set(170, 10, 30);
scene.add(redLight);

    //GREEN
const greenCrewmate = new THREE.Group();
scene.add(greenCrewmate);

const greenCrewmateBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x367435 });
const greenCrewmateBody = new THREE.Mesh(crewmateBodyGeometry, greenCrewmateBodyMaterial);
greenCrewmateBody.position.set(0, 8, 0);
greenCrewmate.add(greenCrewmateBody);

const greenCrewmateLeg1 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), greenCrewmateBodyMaterial);
greenCrewmateLeg1.position.set(0, 2, -2.5);
greenCrewmate.add(greenCrewmateLeg1);

const greenCrewmateLeg2 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), greenCrewmateBodyMaterial);
greenCrewmateLeg2.position.set(0, 2, 2.5);
greenCrewmate.add(greenCrewmateLeg2);

const greenCrewmateVisorGeometry = new THREE.CapsuleGeometry(3, 4, 8, 8);
const greenCrewmateVisorMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
const greenCrewmateVisor = new THREE.Mesh(greenCrewmateVisorGeometry, greenCrewmateVisorMaterial);
greenCrewmateVisor.position.set(-4, 10, 0);
greenCrewmateVisor.rotation.set(Math.PI / 2, Math.PI / 4, 0);
greenCrewmate.add(greenCrewmateVisor);

const greenCrewmateBackpackGeometry = new THREE.ExtrudeGeometry(backpackShape, backpackSettings);
const greenCrewmateBackpack = new THREE.Mesh(greenCrewmateBackpackGeometry, greenCrewmateBodyMaterial);
greenCrewmateBackpack.position.set(6, 3, 0);
greenCrewmateBackpack.rotation.y = Math.PI / 2;
greenCrewmate.add(greenCrewmateBackpack);
greenCrewmate.position.set(-125, 0, -155);
greenCrewmate.rotation.y = -Math.PI / 4;


    //Blue
const blueCrewmate = new THREE.Group();
scene.add(blueCrewmate);

const blueCrewmateBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x1a29ba });
const blueCrewmateBody = new THREE.Mesh(crewmateBodyGeometry, blueCrewmateBodyMaterial);
blueCrewmateBody.position.set(0, 8, 0);
blueCrewmate.add(blueCrewmateBody);

const blueCrewmateLeg1 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), blueCrewmateBodyMaterial);
blueCrewmateLeg1.position.set(0, 2, -2.5);
blueCrewmate.add(blueCrewmateLeg1);

const blueCrewmateLeg2 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), blueCrewmateBodyMaterial);
blueCrewmateLeg2.position.set(0, 2, 2.5);
blueCrewmate.add(blueCrewmateLeg2);

const blueCrewmateVisorGeometry = new THREE.CapsuleGeometry(3, 4, 8, 8);
const blueCrewmateVisorMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
const blueCrewmateVisor = new THREE.Mesh(blueCrewmateVisorGeometry, blueCrewmateVisorMaterial);
blueCrewmateVisor.position.set(-4, 10, 0);
blueCrewmateVisor.rotation.set(Math.PI / 2, Math.PI / 4, 0);
blueCrewmate.add(blueCrewmateVisor);

const blueCrewmateBackpackGeometry = new THREE.ExtrudeGeometry(backpackShape, backpackSettings);
const blueCrewmateBackpack = new THREE.Mesh(blueCrewmateBackpackGeometry, blueCrewmateBodyMaterial);
blueCrewmateBackpack.position.set(6, 3, 0);
blueCrewmateBackpack.rotation.y = Math.PI / 2;
blueCrewmate.add(blueCrewmateBackpack);
blueCrewmate.position.set(-105, 0, -175);
blueCrewmate.rotation.y = Math.PI / 4;

    //Orange
const orangeCrewmate = new THREE.Group();
scene.add(orangeCrewmate);
const orangeCrewmateBodyMaterial = new THREE.MeshStandardMaterial({ color: 0xdf8336 });
const orangeCrewmateBody = new THREE.Mesh(crewmateBodyGeometry, orangeCrewmateBodyMaterial);
orangeCrewmateBody.position.set(0, 8, 0);
orangeCrewmate.add(orangeCrewmateBody);

const orangeCrewmateLeg1 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), orangeCrewmateBodyMaterial);
orangeCrewmateLeg1.position.set(0, 2, -2.5);
orangeCrewmate.add(orangeCrewmateLeg1);

const orangeCrewmateLeg2 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), orangeCrewmateBodyMaterial);
orangeCrewmateLeg2.position.set(0, 2, 2.5);
orangeCrewmate.add(orangeCrewmateLeg2);

const orangeCrewmateVisorGeometry = new THREE.CapsuleGeometry(3, 4, 8, 8);
const orangeCrewmateVisorMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
const orangeCrewmateVisor = new THREE.Mesh(orangeCrewmateVisorGeometry, orangeCrewmateVisorMaterial);
orangeCrewmateVisor.position.set(-4, 10, 0);
orangeCrewmateVisor.rotation.set(Math.PI / 2, Math.PI / 4, 0);
orangeCrewmate.add(orangeCrewmateVisor);

const orangeCrewmateBackpackGeometry = new THREE.ExtrudeGeometry(backpackShape, backpackSettings);
const orangeCrewmateBackpack = new THREE.Mesh(orangeCrewmateBackpackGeometry, orangeCrewmateBodyMaterial);
orangeCrewmateBackpack.position.set(6, 3, 0);
orangeCrewmateBackpack.rotation.y = Math.PI / 2;
orangeCrewmate.add(orangeCrewmateBackpack);
orangeCrewmate.position.set(170, 0, -110);
orangeCrewmate.rotation.y = -Math.PI / 1.5;

    //Purple
const purpleCrewmate = new THREE.Group();
scene.add(purpleCrewmate);
const purpleCrewmateBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x552b99 });
const purpleCrewmateBody = new THREE.Mesh(crewmateBodyGeometry, purpleCrewmateBodyMaterial);
purpleCrewmateBody.position.set(0, 8, 0);
purpleCrewmate.add(purpleCrewmateBody);

const purpleCrewmateLeg1 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), purpleCrewmateBodyMaterial);
purpleCrewmateLeg1.position.set(0, 2, -2.5);
purpleCrewmate.add(purpleCrewmateLeg1);

const purpleCrewmateLeg2 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), purpleCrewmateBodyMaterial);
purpleCrewmateLeg2.position.set(0, 2, 2.5);
purpleCrewmate.add(purpleCrewmateLeg2);

const purpleCrewmateVisorGeometry = new THREE.CapsuleGeometry(3, 4, 8, 8);
const purpleCrewmateVisorMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
const purpleCrewmateVisor = new THREE.Mesh(purpleCrewmateVisorGeometry, purpleCrewmateVisorMaterial);
purpleCrewmateVisor.position.set(-4, 10, 0);
purpleCrewmateVisor.rotation.set(Math.PI / 2, Math.PI / 4, 0);
purpleCrewmate.add(purpleCrewmateVisor);

const purpleCrewmateBackpackGeometry = new THREE.ExtrudeGeometry(backpackShape, backpackSettings);
const purpleCrewmateBackpack = new THREE.Mesh(purpleCrewmateBackpackGeometry, purpleCrewmateBodyMaterial);
purpleCrewmateBackpack.position.set(6, 3, 0);
purpleCrewmateBackpack.rotation.y = Math.PI / 2;
purpleCrewmate.add(purpleCrewmateBackpack);
purpleCrewmate.position.set(85, 0, 135);
purpleCrewmate.rotation.y = -Math.PI / 1.25;


    //Pink
const pinkCrewmate = new THREE.Group();
scene.add(pinkCrewmate);
const pinkCrewmateBodyMaterial = new THREE.MeshStandardMaterial({ color: 0xd46ef0 });
const pinkCrewmateBody = new THREE.Mesh(crewmateBodyGeometry, pinkCrewmateBodyMaterial);
pinkCrewmateBody.position.set(0, 8, 0);
pinkCrewmate.add(pinkCrewmateBody);

const pinkCrewmateLeg1 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), pinkCrewmateBodyMaterial);
pinkCrewmateLeg1.position.set(0, 2, -2.5);
pinkCrewmate.add(pinkCrewmateLeg1);
pinkCrewmateLeg1.rotation.z = Math.PI / 6;

const pinkCrewmateLeg2 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), pinkCrewmateBodyMaterial);
pinkCrewmateLeg2.position.set(0, 2, 2.5);
pinkCrewmate.add(pinkCrewmateLeg2);
pinkCrewmateLeg2.rotation.z = -Math.PI / 6;

const pinkCrewmateVisorGeometry = new THREE.CapsuleGeometry(3, 4, 8, 8);
const pinkCrewmateVisorMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
const pinkCrewmateVisor = new THREE.Mesh(pinkCrewmateVisorGeometry, pinkCrewmateVisorMaterial);
pinkCrewmateVisor.position.set(-4, 10, 0);
pinkCrewmateVisor.rotation.set(Math.PI / 2, Math.PI / 4, 0);
pinkCrewmate.add(pinkCrewmateVisor);

const pinkCrewmateBackpackGeometry = new THREE.ExtrudeGeometry(backpackShape, backpackSettings);
const pinkCrewmateBackpack = new THREE.Mesh(pinkCrewmateBackpackGeometry, pinkCrewmateBodyMaterial);
pinkCrewmateBackpack.position.set(6, 3, 0);
pinkCrewmateBackpack.rotation.y = Math.PI / 2;
pinkCrewmate.add(pinkCrewmateBackpack);
pinkCrewmate.position.set(-100, 0, 0);
pinkCrewmate.rotation.y = -Math.PI / 8;

    //Lime
const limeCrewmate = new THREE.Group();
scene.add(limeCrewmate);
const limeCrewmateBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x7cdc56 });
const limeCrewmateBody = new THREE.Mesh(crewmateBodyGeometry, limeCrewmateBodyMaterial);
limeCrewmateBody.position.set(0, 8, 0);
limeCrewmate.add(limeCrewmateBody);

const limeCrewmateLeg1 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), limeCrewmateBodyMaterial);
limeCrewmateLeg1.position.set(0, 2, -2.5);
limeCrewmate.add(limeCrewmateLeg1);

const limeCrewmateLeg2 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), limeCrewmateBodyMaterial);
limeCrewmateLeg2.position.set(0, 2, 2.5);
limeCrewmate.add(limeCrewmateLeg2);

const limeCrewmateVisorGeometry = new THREE.CapsuleGeometry(3, 4, 8, 8);
const limeCrewmateVisorMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
const limeCrewmateVisor = new THREE.Mesh(limeCrewmateVisorGeometry, limeCrewmateVisorMaterial);
limeCrewmateVisor.position.set(-4, 10, 0);
limeCrewmateVisor.rotation.set(Math.PI / 2, Math.PI / 4, 0);
limeCrewmate.add(limeCrewmateVisor);

const limeCrewmateBackpackGeometry = new THREE.ExtrudeGeometry(backpackShape, backpackSettings);
const limeCrewmateBackpack = new THREE.Mesh(limeCrewmateBackpackGeometry, limeCrewmateBodyMaterial);
limeCrewmateBackpack.position.set(6, 3, 0);
limeCrewmateBackpack.rotation.y = Math.PI / 2;
limeCrewmate.add(limeCrewmateBackpack);
limeCrewmate.position.set(-45, 0, -10);
limeCrewmate.rotation.y = Math.PI / 1;

const afkSignGeometry = new THREE.PlaneGeometry(12, 8);
const afkSignMaterial = new THREE.MeshStandardMaterial({ map: afkTexture, transparent: true, side: THREE.DoubleSide });
const afkSign = new THREE.Mesh(afkSignGeometry, afkSignMaterial);
limeCrewmate.add(afkSign);
afkSign.position.set(0, 22.5, 0);
afkSign.rotation.y = -Math.PI / 2;


    //Brown (ejected, slowly drifting away)
const brownCrewmate = new THREE.Group();
scene.add(brownCrewmate);
const brownCrewmateBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x6f4e37 });
const brownCrewmateBody = new THREE.Mesh(crewmateBodyGeometry, brownCrewmateBodyMaterial);
brownCrewmateBody.position.set(0, 8, 0);
brownCrewmate.add(brownCrewmateBody);

const brownCrewmateLeg1 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), brownCrewmateBodyMaterial);
brownCrewmateLeg1.position.set(0, 2, -2.5);
brownCrewmate.add(brownCrewmateLeg1);
brownCrewmateLeg1.rotation.z = Math.PI / 6;

const brownCrewmateLeg2 = new THREE.Mesh(new THREE.CapsuleGeometry(3.5, 6, 4, 8), brownCrewmateBodyMaterial);
brownCrewmateLeg2.position.set(0, 2, 2.5);
brownCrewmate.add(brownCrewmateLeg2);
brownCrewmateLeg2.rotation.z = -Math.PI / 6;

const brownCrewmateVisorGeometry = new THREE.CapsuleGeometry(3, 4, 8, 8);
const brownCrewmateVisorMaterial = new THREE.MeshPhongMaterial({ color: 0x00fff0 });
const brownCrewmateVisor = new THREE.Mesh(brownCrewmateVisorGeometry, brownCrewmateVisorMaterial);
brownCrewmateVisor.position.set(-4, 10, 0);
brownCrewmateVisor.rotation.set(Math.PI / 2, Math.PI / 4, 0);
brownCrewmate.add(brownCrewmateVisor);

const brownCrewmateBackpackGeometry = new THREE.ExtrudeGeometry(backpackShape, backpackSettings);
const brownCrewmateBackpack = new THREE.Mesh(brownCrewmateBackpackGeometry, brownCrewmateBodyMaterial);
brownCrewmateBackpack.position.set(6, 3, 0);
brownCrewmateBackpack.rotation.y = Math.PI / 2;
brownCrewmate.add(brownCrewmateBackpack);
brownCrewmate.position.set(0, 100, -350);
brownCrewmate.rotation.y = Math.PI / 8;


//SHADOWS
starLight.castShadow = true;
starLight.shadow.mapSize.width = 4096;
starLight.shadow.mapSize.height = 4096;
starLight.shadow.camera.near = 0.5;
starLight.shadow.camera.far = 1000;
starLight.shadow.camera.left = -200;
starLight.shadow.camera.right = 200;
starLight.shadow.camera.top = 200;
starLight.shadow.camera.bottom = -200;

floor.receiveShadow = true;

topWall.castShadow = true;
topRightWall.castShadow = true;
right1Wall.castShadow = true;
rightDoorWall.castShadow = true;
right2Wall.castShadow = true;
bottomRightWall.castShadow = true;
bottomWall1.castShadow = true;
bottomDoorWall.castShadow = true;
bottomWall2.castShadow = true;
bottomLeftWall.castShadow = true;
leftWall1.castShadow = true;
leftDoorWall.castShadow = true;
leftWall2.castShadow = true;
topLeftWall.castShadow = true;

topWall.receiveShadow = true;
topRightWall.receiveShadow = true;
right1Wall.receiveShadow = true;
rightDoorWall.receiveShadow = true;
right2Wall.receiveShadow = true;
bottomRightWall.receiveShadow = true;
bottomWall1.receiveShadow = true;
bottomDoorWall.receiveShadow = true;
bottomWall2.receiveShadow = true;
bottomLeftWall.receiveShadow = true;
leftWall1.receiveShadow = true;
leftDoorWall.receiveShadow = true;
leftWall2.receiveShadow = true;
topLeftWall.receiveShadow = true;

topWallEdge.castShadow = true;
topRightWallEdge.castShadow = true;
rightWallEdge.castShadow = true;
bottomRightWallEdge.castShadow = true;
bottomWallEdge.castShadow = true;
bottomLeftWallEdge.castShadow = true;
leftWallEdge.castShadow = true;
topLeftWallEdge.castShadow = true;

topWallEdge.receiveShadow = true;
topRightWallEdge.receiveShadow = true;
rightWallEdge.receiveShadow = true;
bottomRightWallEdge.receiveShadow = true;
bottomWallEdge.receiveShadow = true;
bottomLeftWallEdge.receiveShadow = true;
leftWallEdge.receiveShadow = true;
topLeftWallEdge.receiveShadow = true;

midTable.castShadow = true;
topLeftTable.castShadow = true;
botLeftTable.castShadow = true;
topRightTable.castShadow = true;
botRightTable.castShadow = true;

midTable.receiveShadow = true;
topLeftTable.receiveShadow = true;
botLeftTable.receiveShadow = true;
topRightTable.receiveShadow = true;
botRightTable.receiveShadow = true;

midBenches.castShadow = true;
topLeftBenches.castShadow = true;
botLeftBenches.castShadow = true;
topRightBenches.castShadow = true;
botRightBenches.castShadow = true;

midBenches.receiveShadow = true;
topLeftBenches.receiveShadow = true;
botLeftBenches.receiveShadow = true;
topRightBenches.receiveShadow = true;
botRightBenches.receiveShadow = true;

redCrewmate.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

greenCrewmate.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

blueCrewmate.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

orangeCrewmate.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

purpleCrewmate.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

pinkCrewmate.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

limeCrewmate.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

botLeftPlate1.castShadow = true;
botLeftPlate2.castShadow = true;
botRightPlate1.castShadow = true;
topRightPlate1.castShadow = true;
topRightPlate2.castShadow = true;

botLeftPlate1.receiveShadow = true;
botLeftPlate2.receiveShadow = true;
botRightPlate1.receiveShadow = true;
topRightPlate1.receiveShadow = true;
topRightPlate2.receiveShadow = true;

botLeftCup1.castShadow = true;
botRightCup1.castShadow = true;
topRightCup1.castShadow = true;
topRightCup21.castShadow = true;
topRightCup22.castShadow = true;
topRightCup23.castShadow = true;
topLeftCup1.castShadow = true;
topLeftCup2.castShadow = true;

botLeftCup1.receiveShadow = true;
botRightCup1.receiveShadow = true;
topRightCup1.receiveShadow = true;
topRightCup21.receiveShadow = true;
topRightCup22.receiveShadow = true;
topRightCup23.receiveShadow = true;
topLeftCup1.receiveShadow = true;
topLeftCup2.receiveShadow = true;
//END OF SHADOWS


//CAMERA CONTROLS
let isMouseLocked = false;

const yawObject = new THREE.Object3D();
scene.add(yawObject);

camera.position.set(0, 0, 0);
yawObject.add(camera);
yawObject.position.set(70, 10, 0);

let yaw = 0;

//Left Click TOGGLE
window.addEventListener("click", () => {
  if (!isMouseLocked) {
    document.body.requestPointerLock();
  } else {
    document.exitPointerLock();
  }
});

document.addEventListener("pointerlockchange", () => {
  isMouseLocked = document.pointerLockElement === document.body;
});

document.addEventListener("mousemove", (event) => {
  if (isMouseLocked) {
    const movementX = event.movementX || 0;
    yaw -= movementX * 0.002;
    yawObject.rotation.y = yaw;
  }
});

//WASD MOVEMENT CONTROL
const moveSpeed = 1.5;
const movement = { forward: false, backward: false, left: false, right: false };
let isMoving = false;

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyW": movement.forward = true; break;
    case "KeyS": movement.backward = true; break;
    case "KeyA": movement.left = true; break;
    case "KeyD": movement.right = true; break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "KeyW": movement.forward = false; break;
    case "KeyS": movement.backward = false; break;
    case "KeyA": movement.left = false; break;
    case "KeyD": movement.right = false; break;
  }
});


//HITBOX SYSTEM
const hitboxes = [];
const hitboxVisualizers = [];

function createHitbox(position, size, rotation = { x: 0, y: 0, z: 0 }, name = '') {
  const hitbox = {
    position: position.clone(),
    size: size.clone(),
    rotation: { ...rotation },
    name: name
  };
  
  hitboxes.push(hitbox);
  
  //Visualizers for the hitboxes
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0000, 
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const visualizer = new THREE.Mesh(geometry, material);
  visualizer.position.copy(position);
  visualizer.rotation.set(rotation.x, rotation.y, rotation.z);
  scene.add(visualizer);
  hitboxVisualizers.push(visualizer);
  
  return hitbox;
}

function checkCollisionAndSlide(playerPosition, intendedPosition, playerRadius = 5) {
    let adjustedPosition = intendedPosition.clone();
    
    for (const hitbox of hitboxes) {
        const localPlayerPos = adjustedPosition.clone().sub(hitbox.position);
        
        const matrix = new THREE.Matrix4().makeRotationFromEuler(
            new THREE.Euler(hitbox.rotation.x, hitbox.rotation.y, hitbox.rotation.z)
        );
        localPlayerPos.applyMatrix4(matrix.clone().invert());
        
        const halfSize = hitbox.size.clone().multiplyScalar(0.5);
        const closestPoint = new THREE.Vector3(
            Math.max(-halfSize.x, Math.min(halfSize.x, localPlayerPos.x)),
            Math.max(-halfSize.y, Math.min(halfSize.y, localPlayerPos.y)),
            Math.max(-halfSize.z, Math.min(halfSize.z, localPlayerPos.z))
        );
        
        const distance = localPlayerPos.distanceTo(closestPoint);
        
        if (distance < playerRadius) {
            const collisionNormal = localPlayerPos.clone().sub(closestPoint).normalize();
            
            collisionNormal.applyMatrix4(matrix);
            
            const penetrationDepth = playerRadius - distance;
            adjustedPosition.add(collisionNormal.multiplyScalar(penetrationDepth));
            
            const movementDelta = intendedPosition.clone().sub(playerPosition);
            
            const testPosX = new THREE.Vector3(intendedPosition.x, playerPosition.y, playerPosition.z);
            if (!checkSingleCollision(testPosX, playerRadius)) {
                adjustedPosition.x = testPosX.x;
            }
            
            const testPosZ = new THREE.Vector3(playerPosition.x, playerPosition.y, intendedPosition.z);
            if (!checkSingleCollision(testPosZ, playerRadius)) {
                adjustedPosition.z = testPosZ.z;
            }
        }
    }
    
    return adjustedPosition;
}

function checkSingleCollision(position, playerRadius) {
    for (const hitbox of hitboxes) {
        const localPlayerPos = position.clone().sub(hitbox.position);
        const matrix = new THREE.Matrix4().makeRotationFromEuler(
            new THREE.Euler(hitbox.rotation.x, hitbox.rotation.y, hitbox.rotation.z)
        );
        localPlayerPos.applyMatrix4(matrix.clone().invert());
        
        const halfSize = hitbox.size.clone().multiplyScalar(0.5);
        const closestPoint = new THREE.Vector3(
            Math.max(-halfSize.x, Math.min(halfSize.x, localPlayerPos.x)),
            Math.max(-halfSize.y, Math.min(halfSize.y, localPlayerPos.y)),
            Math.max(-halfSize.z, Math.min(halfSize.z, localPlayerPos.z))
        );
        
        const distance = localPlayerPos.distanceTo(closestPoint);
        if (distance < playerRadius) {
            return true;
        }
    }
    return false;
  }


// <----- HITBOX CHECK/TOGGLE ----->
let showHitboxes = false;
function toggleHitboxVisibility() {
  showHitboxes = !showHitboxes;
  hitboxVisualizers.forEach(visualizer => {
    visualizer.visible = showHitboxes;
  });
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyH') {
    toggleHitboxVisibility();
  }
});


  //WALLS
createHitbox(
  new THREE.Vector3(0, 10, -200),
  new THREE.Vector3(200, 4, 30),
  { x: Math.PI / 2, y: 0, z: 0 },
  'Top Wall'
);

createHitbox(
  new THREE.Vector3(152, 10, -147),
  new THREE.Vector3(150, 4, 30),
  { x: Math.PI / 2, y: 0, z: Math.PI / 4 },
  'Top Right Wall'
);

createHitbox(
  new THREE.Vector3(205, 10, -70),
  new THREE.Vector3(50, 4, 30),
  { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
  'Right Wall 1'
);

createHitbox(
  new THREE.Vector3(205, 10, -20),
  new THREE.Vector3(50, 8, 30),
  { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
  'Right Door Wall'
);

createHitbox(
  new THREE.Vector3(205, 10, 30),
  new THREE.Vector3(50, 4, 30),
  { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
  'Right Wall 2'
);

createHitbox(
  new THREE.Vector3(152, 10, 108),
  new THREE.Vector3(150, 4, 30),
  { x: Math.PI / 2, y: 0, z: -Math.PI / 4 },
  'Bottom Right Wall'
);

createHitbox(
  new THREE.Vector3(72, 10, 160),
  new THREE.Vector3(54, 4, 30),
  { x: Math.PI / 2, y: 0, z: 0 },
  'Bottom Wall 1'
);

createHitbox(
  new THREE.Vector3(18, 10, 160),
  new THREE.Vector3(55, 8, 30),
  { x: Math.PI / 2, y: 0, z: 0 },
  'Bottom Door Wall'
);

createHitbox(
  new THREE.Vector3(-35, 10, 160),
  new THREE.Vector3(54, 4, 30),
  { x: Math.PI / 2, y: 0, z: 0 },
  'Bottom Wall 2'
);

createHitbox(
  new THREE.Vector3(-115, 10, 108),
  new THREE.Vector3(156, 4, 30),
  { x: Math.PI / 2, y: 0, z: Math.PI / 4 },
  'Bottom Left Wall'
);

createHitbox(
  new THREE.Vector3(-170, 10, 30),
  new THREE.Vector3(50, 4, 30),
  { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
  'Left Wall 1'
);

createHitbox(
  new THREE.Vector3(-170, 10, -20),
  new THREE.Vector3(50, 8, 30),
  { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
  'Left Door Wall'
);

createHitbox(
  new THREE.Vector3(-170, 10, -88),
  new THREE.Vector3(86, 4, 30),
  { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
  'Left Wall 2'
);

createHitbox(
  new THREE.Vector3(-135, 10, -165),
  new THREE.Vector3(100, 4, 30),
  { x: Math.PI / 2, y: 0, z: -Math.PI / 4 },
  'Top Left Wall'
);

  //TABLES
createHitbox(
  new THREE.Vector3(0, 0, -15),
  new THREE.Vector3(50, 20, 50),
  { x: 0, y: 0, z: 0 },
  'Middle Table'
);

createHitbox(
  new THREE.Vector3(-90, 0, -105),
  new THREE.Vector3(50, 20, 50),
  { x: 0, y: 0, z: 0 },
  'Top Left Table'
);

createHitbox(
  new THREE.Vector3(-90, 0, 55),
  new THREE.Vector3(50, 20, 50),
  { x: 0, y: 0, z: 0 },
  'Bottom Left Table'
);

createHitbox(
  new THREE.Vector3(90, 0, -105),
  new THREE.Vector3(50, 20, 50),
  { x: 0, y: 0, z: 0 },
  'Top Right Table'
);

createHitbox(
  new THREE.Vector3(90, 0, 55),
  new THREE.Vector3(50, 20, 50),
  { x: 0, y: 0, z: 0 },
  'Bottom Right Table'
);


hitboxVisualizers.forEach(visualizer => {
    visualizer.visible = showHitboxes;
});


//COLLISION DETECTION VARIABLES
const playerRadius = 5;
let lastValidPosition = yawObject.position.clone();


function animate(time) {
  const previousPosition = yawObject.position.clone();
    
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(direction, new THREE.Vector3(0, 1, 0)).normalize();

    const intendedPosition = yawObject.position.clone();

    isMoving = movement.forward || movement.backward || movement.left || movement.right;

    if (movement.forward) intendedPosition.addScaledVector(direction, moveSpeed);
    if (movement.backward) intendedPosition.addScaledVector(direction, -moveSpeed);
    if (movement.left) intendedPosition.addScaledVector(right, -moveSpeed);
    if (movement.right) intendedPosition.addScaledVector(right, moveSpeed);

    yawObject.position.copy(checkCollisionAndSlide(previousPosition, intendedPosition, playerRadius));
    lastValidPosition.copy(yawObject.position);

    // CONTROL FOOTSTEP SOUND
    if (footstepSound) {
        if (isMoving && !footstepSound.isPlaying) {
            footstepSound.play();
        } else if (!isMoving && footstepSound.isPlaying) {
            footstepSound.pause();
        }
    }

  renderer.render(scene, camera);
  
  const positions = starsGeometry.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] -= 0.5;

    if (positions[i] < -1000) {
      positions[i] = 1000;
      positions[i + 1] = Math.random() * 800 + 100;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
    }
  }
  starsGeometry.attributes.position.needsUpdate = true;

  brownCrewmate.position.x -= 0.15;
  brownCrewmate.position.z -= 0.05;
  brownCrewmate.rotation.z += 0.1;

  renderer.setAnimationLoop(animate);
}

renderer.setAnimationLoop(animate);