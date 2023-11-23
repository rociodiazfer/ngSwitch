import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
constructor() {
}
ngOnInit(){

}
user=this.randomUser()
numbers =[1,2,3,4,5,6,7,8,9];
days = Days;
day=this.randomDays()

randomUser():string {
  const id = Math.floor(Math.random()*3);
  return Users[id]
}
randomDays():string{
  const id = Math.floor(Math.random()*7)
  return Days[id]
}
}
export enum Users{
  Ramesh,
  Tom,
  Tony
}
export enum Days{
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}
