import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){

    return [
      {
        id:1,
        title:"todo1",
        description:"Walking"
      },
      {
        id:2,
        title:"todo2",
        description:"Running"
      },
    ];
  }

}
