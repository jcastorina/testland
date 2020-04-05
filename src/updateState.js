import raycast from './tools/raycast';
import jump from './tools/jump';

global.grav = GRAVITY;
var i;

export default function updateState(){
    cubes[0].rotation.x += 0.01;
    cubes[0].rotation.y += 0.01;
    cubes[1].rotation.z -= 0.01;
    cubes[1].rotation.y += 0.01;
    if(lockedMouse){
        if(devMode){
            if(player.jumping === true){
                player.position.y += JUMPFORCE * FRAME;
            }
            if(player.position.y > -4.8){
                grav += GRAVITY * FRAME;
                player.position.y -= grav;
            } else {
                player.position.y = -4.8;
                grav = GRAVITY;
                player.jumping = false;
            }
            /*if(!player.children[0]){
                camera.rotation.y = -me.mouse.curr.x;// * Math.PI;
                camera.rotation.x = -me.mouse.curr.y;// * Math.PI; 
                if(me.keyboard[87]){//w
                    camera.position.z -= DEV_CAM_SPEED * Math.sin(-camera.rotation.y  + Math.PI/2);
                    camera.position.x += DEV_CAM_SPEED * Math.sin(-camera.rotation.y);
                }
                if(me.keyboard[65]){//a
                    camera.position.z += DEV_CAM_SPEED * Math.sin(camera.rotation.y);
                    camera.position.x -= DEV_CAM_SPEED * Math.sin(camera.rotation.y + Math.PI/2);
                }
                if(me.keyboard[83]){//s
                    camera.position.z += DEV_CAM_SPEED * Math.sin(-camera.rotation.y + Math.PI/2);
                    camera.position.x -= DEV_CAM_SPEED * Math.sin(-camera.rotation.y);
                }
                if(me.keyboard[68]){//d
                    camera.position.z -= DEV_CAM_SPEED * Math.sin(camera.rotation.y);
                    camera.position.x += DEV_CAM_SPEED * Math.sin(camera.rotation.y + Math.PI/2);
                }
                if(me.keyboard[69]){//e
                    camera.position.y += DEV_CAM_SPEED;
                }
                if(me.keyboard[81]){//q
                    camera.position.y -= DEV_CAM_SPEED;
                }
            } /*else {
                player.remove(camera);
            }
        } else {*/
            //if(player.children[0]){
                player.rotation.y = -me.mouse.curr.x;// * Math.PI;
                player.rotation.x = -me.mouse.curr.y;// * Math.PI; 
                if(me.keyboard[32]){
                    if(player.jumping === false){
                        player.jumping = true;
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
            } /*else {
                //player.applyMatrix4(camera.matrix);
                //player.position.set(camera.position);
                player.add(camera);
            }*/
        }
        raycast();
       // console.log(intersects);
        //console.log(vmouse);
        if(intersects[0]){
            if(intersects[0].object.name != "grass"){
                intersects[0].object.rotation.y += 0.05;
            }
        }
    }
