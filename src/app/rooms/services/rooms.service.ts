import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
// import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList:RoomList[] =[];
//    [{
//     roomNumber:1,
//     roomType:'Deluxe Room',
//     amenities:'wifi ac',
//     price:500,
//     photos:'',
//     checkInTime:new Date('11-Nov-2024'),
//     checkOutTime:new Date('11-Dec-2024'),
//     rating:3.3
//   },
//   {
//     roomNumber:2,
//     roomType:'superDeluxe Room',
//     amenities:'wifi ac',
//     price:1000,
//     photos:'',
//     checkInTime:new Date('11-Nov-2024'),
//     checkOutTime:new Date('11-Dec-2024'),
//     rating:5
//   },
//   {
//     roomNumber:3,
//     roomType:'private suite ',
//     amenities:'wifi ac',
//     price:2000,
//     photos:'',
//     checkInTime:new Date('11-Nov-2024'),
//     checkOutTime:new Date('11-Dec-2024'),
//     rating:4.33232
//   }
// ];

  // constructor(@Inject(APP_SERVICE_CONFIG) private appConfig:AppConfig, private http:HttpClient ) { 
  //   console.log(appConfig.apiEndpoint);
  // }
  constructor( private http:HttpClient ) { 
  }

  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );
  getRooms(){
    // return this.roomList;
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room:RoomList){
    return this.http.post<RoomList[]>('/api/rooms',room)
  }

  editRoom(room:RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}}`,room);
  }

  delete(id:string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
      reportProgress:true,
      }
    );
    return this.http.request(request);
  }
}

