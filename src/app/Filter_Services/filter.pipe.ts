import { Pipe, PipeTransform ,Injectable} from '@angular/core';

@Pipe({
  name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {

    transform(items: any[], filter: any, isAnd: boolean): any {
        if (filter && Array.isArray(items)) {
          let filterKeys = Object.keys(filter);
          return items.filter(item =>
            filterKeys.reduce((memo, keyName) =>
                (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
        } else {
          return items;
        }
      }

    

  //   transform(items: any[], filter: any[]): any[] {
  //     if(filter && Array.isArray(items)){
  //       return items.filter(item=> {
  //         for(let property in filter){
  //           if (filter[property] === null){
  //             continue;
  //           }
  //           if(item[property].toString().toLowerCase().includes(property.toLowerCase())){
  //             return true;
  //           }
  //         }
  //         return false;
  //       });
  //     }else{
  //       return items;
  //     }
  // }

  // transform(items: any, term: any): any {
  //   if (term === undefined) return items;

  //   return items.filter(function(item) {
  //     for(let property in item){
  //       if (item[property] === null){
  //         continue;
  //       }
  //       if(item[property].toString().toLowerCase().includes(term.toLowerCase())){
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
  // }

  

}
