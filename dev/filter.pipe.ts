/**
 * Created by Hernan Y.Ke on 2016/2/22.
 */
import {Pipe, PipeTransform} from 'angular2/core';
import {listItem} from './itemtype';

@Pipe({
    name:'mf'
})


export class FPipe implements PipeTransform{
    transform(value:listItem[],args:string[]):any{
        if(value.length===0){
            return value;
        }
        let res=[];
        for(let item of value){
            if(item.name.match('^.*'+args[0]+'.*$')){
                res.push(item);
            }
        }
        return res;
    }
}