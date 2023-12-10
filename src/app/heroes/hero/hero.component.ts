import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string="Pedro";
  public edad: number=45;


  get capitalizedName(){
    return this.nombre.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return    `${this.nombre}- ${this.edad}`;
  }

  changeName(name:string):void{
    this.nombre=name;
  }

  changeAge(age:number):void{
    this.edad=age;
  }
}
