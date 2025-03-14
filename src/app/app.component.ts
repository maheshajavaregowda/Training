import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
 title = 'User not logged in'
 onChnages(title:string){
  this.title=title
 }
}
