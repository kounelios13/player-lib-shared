import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBtnComponent } from './player-btn.component';

describe('PlayerBtnComponent', () => {
  let component: PlayerBtnComponent;
  let fixture: ComponentFixture<PlayerBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
