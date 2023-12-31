import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

console.log(uuid());

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[]=[
    {
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 10000
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 9000
    }
    ];

    addCharacter(character: Character):void{
       // debugger;
       const newCharacter: Character = {id: uuid(),...character}
        this.characters.push(newCharacter);
        console.log('Main Page');
        console.log(character);
    }

   /* deleteIndex(index:number):void{
      console.log('Main Page');
      console.log(index);
      debugger;
      this.characters.splice(index,1);
    }*/

    deleteCharacterById(id:string){
        this.characters=this.characters.filter(character => character.id !== id);
    }
}
