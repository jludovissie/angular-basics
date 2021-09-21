import { Component } from "@angular/core";

@Component({
  selector: 'app-array' ,
  templateUrl: 'array.component.html'
})

export class ArrayComponent {
  getHeros = [
    {id:1, name: 'Superman'} ,
    {id:2, name: 'Spiderman'},
    {id:3, name: 'Black Panther'}

  ]
}
