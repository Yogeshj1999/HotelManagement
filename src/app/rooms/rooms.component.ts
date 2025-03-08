import { AfterViewInit, Component,OnChanges,OnInit, ViewChild } from '@angular/core';
import { Room,RoomList } from './rooms';
import {CommonModule} from '@angular/common';
import { RoomsListComponent } from "./room-list/room-list.component";
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { catchError, map, Observable, of, Subject } from 'rxjs';
@Component({
  selector: 'app-rooms',
  // imports: [CommonModule, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,AfterViewInit{
  hotelName = "New Hotels"; 

  hid:boolean = true;
  numberofrooms = 30;
  selectedRoom!:RoomList;
  rooms : Room = {
    avaiableRooms:10,
    bookedRooms:5,
    TotalRooms:20

  }
  ngAfterViewInit(): void {
  this.header.title = 'from header Hotels';
  }

  error$ =new Subject<string>();
  getError = this.error$.asObservable();
  
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err)=>{
      console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );
  roomsCount = this.roomsService.getRooms$.pipe(
    map((room)=>room.length)
  );
  constructor(private roomsService:RoomsService) { }

  stream = new Observable<string>((observer)=>{
    observer.next('hello');
    observer.next('world');
    observer.complete();
  });

  @ViewChild(HeaderComponent) header!: HeaderComponent;
  roomList:RoomList[]=[]
  ngOnInit():void{
    
    this.roomsService.getPhotos().subscribe((data)=>{
      console.log(data);
    });

    this.stream.subscribe((data)=>{
      next: (value:string)=>console.log(value);
      complete: ()=>console.log('completed');
      error: (err:any)=>console.log(err);  //to handle error
    });

    // this.roomsService.getRooms().subscribe((data)=>{
    //   this.roomList = data;
    // });
    // this.roomsService.getRooms$.subscribe((data)=>{
    //   this.roomList = data;
    // }); //this is a shared replay
 
  }
  toggle(){
    this.hid = !this.hid;
  }
  // ngOnChanges(){
  //   console.log('changes');
  // }

  selectRoom(room:RoomList){
     this.selectedRoom = room;
     console.log(this.selectedRoom);
  }
  addRoom(){
    const room:RoomList = {
      // roomNumber:"4",
      roomNumber:"",
      roomType:'private suite ',
      amenities:'wifi ac',
      price:500,
      photos:'',
      checkInTime:new Date('11-Nov-2024'),
      checkOutTime:new Date('11-Dec-2024'),
      rating:4.33232
    };
    // this.roomList = [...this.roomList,room];
    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList = data;
    });
  }
  editRoom(){
    const room:RoomList = {
      roomNumber:"2",
      roomType:'private summer suite ',
      amenities:'wifi ac',
      price:500,
      photos:'',
      checkInTime:new Date('11-Nov-2024'),
      checkOutTime:new Date('11-Dec-2024'),
      rating:4.33232
    };
    this.roomsService.editRoom(room).subscribe((data)=>{
      this.roomList = data;
    });
  }

  deleteRoom(){
    this.roomsService.delete('3').subscribe((data)=>{
      this.roomList = data;
    });
  }
}
