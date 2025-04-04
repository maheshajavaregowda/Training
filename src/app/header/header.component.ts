import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {
  @Input() title: any;
  @Input() count: number= 0;
  counter:number= 0;
  login: any;
  @Output() onclik = new EventEmitter();
  @ContentChild('p',{static:true}) counterValue!:ElementRef;
  @ViewChild('div',{static:true}) div!:ElementRef;

  ngOnChanges(changes: SimpleChanges){
   console.log(changes)
   if(changes['count']?.currentValue % 2 === 0 ){
    this.counter = changes['count'].currentValue;
    console.log(this.counter)
   }
   console.log('ngOnChanges')
  }

  ngOnInit(): void {
    this.login = 'Login';
    console.log('ngOnInit called')
  }

  ngDoCheck(): void {
    console.log('docheck')
  }

  ngAfterContentInit(): void {
    console.log("conent init called");
    console.log("counter Value",this.counterValue)
  }
   ngAfterContentChecked(): void {
    console.log("conent checked called")
    if(this.count===1){
      this.counterValue.nativeElement.innerHTML="234567890987654"
    } else if(this.count===5){
      this.counterValue.nativeElement.innerHTML="123"
    } else {
      this.counterValue.nativeElement.innerHTML= this.count
    }
   }

   ngAfterViewInit(): void {
     
    console.log("view init called")
    console.log("View Value",this.div)
   }
   ngAfterViewChecked(): void {
     console.log("view checked called")
     console.log("View Value",this.div)
   }
 ngOnDestroy(): void {
   console.log("Destroy called")
 }

  onButton() {
    if (this.login === 'Login') {
      // this.onclik.emit('User Succefullay logged in');
      this.login = 'Logout';
    } else {
      // this.onclik.emit('User not logged in');
      this.login = 'Login';
    }
  }
}
