import controls from './controls.js';
import initRenderer from './initRenderer';

export default () => {
    
    global.renderer = initRenderer();
    me.mouse.curr.x = 0;
    me.mouse.curr.y = 0;
    camera.position.y = 3;
    renderer.domElement.onclick = () => {
    renderer.domElement.requestPointerLock();
    lockedMouse = true;
    }
    renderer.sortObjects = false;
    renderer.autoClear = false;
    controls();
}