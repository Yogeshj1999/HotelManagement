import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsListComponent } from './room-list.component';

describe('RoomListComponent', () => {
  let component: RoomsListComponent;
  let fixture: ComponentFixture<RoomsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
