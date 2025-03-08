import { AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';


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
  constructor(@Inject(localStorageToken) private localStorage:Storage) {}
  ngOnInit(){
    this.localStorage.setItem('My Hostel','YOgesh Hotel');
  }

}
