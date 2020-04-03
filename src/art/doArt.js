import loadGLTF from './loadGLTF';
import loadSkybox from './loadSkybox';
import makeCubes from './makeCubes';
import favicon from './favicon';

export default () => {
    loadGLTF();
    loadSkybox(THREE,scene,camera);
    global.cubes = makeCubes();
    favicon();
}