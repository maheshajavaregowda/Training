import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title: any;
  login = 'Login';
  @Output() onclik = new EventEmitter();
  onButton() {
    if (this.login === 'Login') {
      this.onclik.emit('User Succefullay logged in');
      this.login = 'Logout';
    } else {
      this.onclik.emit('User not logged in');
      this.login = 'Login';
    }
  }
}
