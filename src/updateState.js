import raycast from './tools/raycast';

export default function updateState(){
    cubes[0].rotation.x += 0.01;
    cubes[0].rotation.y += 0.01;
    cubes[1].rotation.z -= 0.01;
    cubes[1].rotation.y += 0.01;
    if(locked_mouse){
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
        raycast();
        console.log(intersects);
        //console.log(vmouse);
        if(intersects[0]){
            intersects[0].object.rotation.y += 0.1;
        }
        
    }
}