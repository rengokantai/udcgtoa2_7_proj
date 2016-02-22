/**
 * Created by Hernan Y.Ke on 2016/2/21.
 */
import {Injectable} from 'angular2/core';
import {listItem} from '../itemtype';
import {newlist} from './mocklist';

@Injectable()
export class ItemService{
    getItems(){
        return newlist;
    }
    insertItem(item:listItem){
        newlist.push(item);
    }

    deleteItem(item:listItem){
        newlist.splice(newlist.indexOf(item),1)
    }
}