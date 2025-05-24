import { AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, RoomsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit {
  title = 'hotelinventoryapp';
  role="admin";
  @ViewChild('user', {read:ViewContainerRef}) vcf!: ViewContainerRef;
  ngAfterViewInit() {
    const componentRef  = this.vcf.createComponent(RoomsComponent);
  }
  constructor(@Inject(localStorageToken) private localStorage:Storage,
              private router:Router
) {}
  ngOnInit(){
    this.router.events.subscribe((events)=>{
      console.log(events);

      this.router.events.pipe(
        filter((event)=>event instanceof NavigationStart)
      ).subscribe((event)=>{
          console.log("Navigation Started",event);
      });

      this.router.events.pipe(
        filter((event)=>event instanceof NavigationEnd)
      ).subscribe((event)=>{
          console.log("Navigation Ended");
      });
    });

    this.localStorage.setItem('My Hostel','YOgesh Hotel');
  }

}
