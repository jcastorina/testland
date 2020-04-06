import raycast from './tools/raycast';
import doNext from './art/doNext';

global.launchVec = new THREE.Vector3();
global.grav = GRAVITY;

//global.shot = [];
var i;

export default function updateState(){
    cubes[0].rotation.x += 0.01;
    cubes[0].rotation.y += 0.01;
    cubes[1].rotation.z -= 0.01;
    cubes[1].rotation.y += 0.01;
    for(i in cubes){
        cubes[i].next();
    }
    /*for(i in shot){
        shot[i].position.add(shot[i].launchVec);
        shot[i].duration += DURATION;
        shot[i].position.y -= shot[i].duration * GRAVITY * shot[i].weight;
        if(shot[i].position.y <= shot[i].startingHeight){
            shot[i].position.set(shot[i].startingPos.x,shot[i].startingPos.y,shot[i].startingPos.z);
            if(shot[i].position shot[i].startingPos){
                shot[i].shot = false;
                shot[i].duration = 0;
                shot.pop(i);
            }
        console.log(shot[i]);
        }
    }*/
    if(lockedMouse){
        if(devMode){
            if(player.falling){
                grav += GRAVITY * DURATION;
                player.position.y -= grav;
                if(player.jumping){
                    player.position.y += JUMPFORCE * DURATION;
                }
            }
            if(player.position.y < -4.8){
                player.position.y = -4.8;
                player.jumping = false;
                player.falling = false;
                grav = GRAVITY;
            }
                player.rotation.y = -me.mouse.curr.x;// * Math.PI;
                player.rotation.x = -me.mouse.curr.y;// * Math.PI; 
                if(me.keyboard[32]){//space
                    if((!player.jumping) && (!player.falling)){
                        player.jumping = true;
                        player.falling = true;
                    }
                }
                if(me.keyboard[87]){//w
                    player.position.z -= DEV_CAM_SPEED * Math.sin(-player.rotation.y  + Math.PI/2);
                    player.position.x += DEV_CAM_SPEED * Math.sin(-player.rotation.y);
                }
                if(me.keyboard[65]){//a
                    player.position.z += DEV_CAM_SPEED * Math.sin(player.rotation.y);
                    player.position.x -= DEV_CAM_SPEED * Math.sin(player.rotation.y + Math.PI/2);
                }
                if(me.keyboard[83]){//s
                    player.position.z += DEV_CAM_SPEED * Math.sin(-player.rotation.y + Math.PI/2);
                    player.position.x -= DEV_CAM_SPEED * Math.sin(-player.rotation.y);
                }
                if(me.keyboard[68]){//d
                    player.position.z -= DEV_CAM_SPEED * Math.sin(player.rotation.y);
                    player.position.x += DEV_CAM_SPEED * Math.sin(player.rotation.y + Math.PI/2);
                }
            } 
        }
        raycast();
        if(intersects[0]){
            if(intersects[0].object.name != "grass"){
                intersects[0].object.rotation.y += 0.05;
                if(me.mouse.down){
                    if(!intersects[0].object.shot){
                        launchVec.subVectors(intersects[0].object.position,player.position).normalize();
                        intersects[0].object.shot = true;
                        intersects[0].object.launchVec = launchVec;
                    }
                }
            }
        }
    }
