/* eslint-disable */
import store from '../store';

import list from './list';

export default {
  changePath (comand) {
    const oldPath = store.getters.getPath
    let newFolder = this.getPath(comand)
        if(list.getFiles(oldPath).includes(newFolder)) {
            const newPath = oldPath + '/' +newFolder
            store.dispatch('setPath', newPath.replace('//', '/'))
        } else {

        }
    },

    getPath (comand){
        return comand.substring(comand.indexOf('cd ') + 3, comand.length)
    }
}
