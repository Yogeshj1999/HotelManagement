import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  rooms:RoomList ={ 
    roomType:'',
    amenities:'',
    price:0,
    photos:'',
    checkInTime:new Date(),
    checkOutTime:new Date(),
    rating:0
  }

  constructor(private roomsService:RoomsService) { }
  SuccessMessage :string= '' ;
  addRoom(roomsForm:NgForm){
    this.roomsService.addRoom(this.rooms).subscribe((data)=>{
      this.SuccessMessage = 'Room Added';
      roomsForm.resetForm({
        roomType:'',
        amenities:'',
        price:0,
        photos:'',
        checkInTime:new Date(),
        checkOutTime:new Date(),
        rating:0
    });
    });
  }
}
