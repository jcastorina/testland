import controls from './controls.js';
import initRenderer from './initRenderer';

export default () => {
    
    global.renderer = initRenderer();
    me.mouse.curr.x = 0;
    me.mouse.curr.y = 0;
    camera.position.y = 3;
    renderer.domElement.onclick = () => {
        renderer.domElement.requestPointerLock();
        if(newLockedMouse){
            vmouseOffset.x = (event.clientX / window.innerWidth) * 2 - 1;
            vmouseOffset.y = - (event.clientY / window.innerHeight) * 2 + 1;
            newLockedMouse = false;
        }
        lockedMouse = true;
    }
    renderer.sortObjects = false;
    renderer.autoClear = false;
    controls();
}