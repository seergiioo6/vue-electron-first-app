/* eslint-disable */
 const fs = require('fs')
import store from '../store';

import list from './list';

export default {
    changePath(comand) {
        let newFolder = this.getPath(comand);
        if(list.getFiles().includes(newFolder)) {
            const oldPath = store.getPath()
            const newPath = oldPath + '/' +newFolder
            store.dispatch('SET_PATH', newPath)
        } else {

        }
    },

    getPath(comand){
        return comand.substring(comand.indexOf('cd ') + 5, text.length);
    }
}