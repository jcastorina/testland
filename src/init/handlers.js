export default () => {
    function onWindowResize() {
        var width = window.innerWidth;
        var height = Math.floor(width*9/16);
        var offset = (window.innerHeight - height) /2;
        renderer.domElement.parentNode.style.paddingTop = ''+offset+'px';
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize( width, height );
    }

    function onDocumentMouseMove(event) {
        if(locked_mouse){ 
            console.log(event.movementX);
            vmouse.x = (event.clientX / window.innerWidth) * 2 - 1; 
            vmouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            me.mouse.curr.x += event.movementX/200;
            me.mouse.curr.y += event.movementY/200;
        }
    }

    function onDocumentMouseDown(event){
        if(event.button === 0){
            me.mouse.past.x = me.mouse.curr.x;
            me.mouse.past.y = me.mouse.curr.y;
            me.mouse.down = true;
        }
        if(event.button === 2){
            me.mouse.past.x = me.mouse.curr.x;
            me.mouse.past.y = me.mouse.curr.y;
            me.mouse.rc = true;
        }
    }

    function onDocumentMouseUp(event){
        if(event.button === 0){
            me.mouse.down = false;
        }
        if(event.button === 0){
            me.mouse.rc = false;
        }
    }

    function onDocumentKeyDown(event){
        if(event.which === 27){
            document.exitPointerLock();
            locked_mouse = false;
            console.log(locked_mouse);
        }
        console.log(event);
        me.keyboard[event.which] = true;
    }

    function onDocumentKeyUp(event){
        me.keyboard[event.which] = false;
    }
    window.addEventListener( 'resize', onWindowResize, false );
    window.addEventListener( 'load', onWindowResize, false );
    window.addEventListener( 'mousemove', onDocumentMouseMove, false );
    window.addEventListener( 'keydown', onDocumentKeyDown, false );
    window.addEventListener( 'keyup', onDocumentKeyUp, false );
    window.addEventListener( 'mousedown', onDocumentMouseDown, false );
    window.addEventListener( 'mouseup', onDocumentMouseUp, false );
    onWindowResize();
}