/* eslint-disable */
import store from '../store';
const fs = require('fs')

import list from './list';

export default {
  changePath (comand) {
    const oldPath = store.getters.getPath
    let newFolder = this.getPath(comand)
        if(newFolder !== '..'){
            if(list.getFiles(oldPath).includes(newFolder)) {
                console.log(list.getFiles(oldPath));
                const newPath = oldPath + '/' +newFolder
                if(fs.lstatSync(newPath).isDirectory() ){
                    store.dispatch('setPath', newPath.replace('//', '/'))
                    return "";
                }else{
                    return `${newFolder} is not a directory`
                }
            } else {

            }
        }else{
            let temp = oldPath.split("/");
            console.log(temp);
            if(temp.length == 2){
                store.dispatch('setPath', '/');
                return "";
            }else{
                temp.pop();
                store.dispatch('setPath', temp.join("/").replace('//','/'));
                return "";
            }
        }
    },

    getPath (comand){
        return comand.substring(comand.indexOf('cd ') + 3, comand.length)
    }
}
