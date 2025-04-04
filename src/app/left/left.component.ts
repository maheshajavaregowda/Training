
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left',
  standalone: false,
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss',
})
export class LeftComponent {
color=true;
flag= true;
constructor(private router:Router){}
links= [{
  name:'product 1',
  id:1
},{
  name:'product 2',
  id:2
},{
  name:'product 3',
  id:3
},{
  name:'product 4',
  id:4
}];

onClick(id:number) {
 this.router.navigateByUrl(`user/${id}`)
}

}
