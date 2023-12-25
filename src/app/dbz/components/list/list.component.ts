import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDBZComponent {

  @Output()
  public characterDeleteIndex: EventEmitter<string> = new EventEmitter();

  @Input()
  public charactersList: Character[]=[
    {
        name: 'Trunks',
        power: 100
    }
    ];

    onDeleteCharacter(id?:string):void{
      console.log("List Component")
      if(!id) return;
      debugger;
      this.characterDeleteIndex.emit(id);

    }
}
