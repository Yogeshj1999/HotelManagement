import { EventEmitter,Component, Input, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import {CommonModule} from '@angular/common';
import {  Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  // imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RoomsListComponent implements OnChanges,OnDestroy{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() rooms:RoomList[]|null = [];
  @Output() selectedRoom  = new EventEmitter<RoomList>();
  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }
  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
