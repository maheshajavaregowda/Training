import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  users:any;
  user:any;
constructor(private myService: MyServiceService,
   private activateroute:ActivatedRoute){
 this.activateroute.paramMap.subscribe(res=>{
  const id = res.get('id')
  this.getUser(id)
 })
}
getUser(id:string | null){
  this.myService.getUser(id).subscribe((res:any)=>{
    this.users = res;
  })
}
}
