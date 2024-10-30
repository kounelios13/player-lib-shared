import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeComponent } from './time.component';

describe('TimeComponent', () => {
  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display correct minutes and seconds',()=> {
    component.duration = 3600;
    component.currentProgress = 1200;
    fixture.detectChanges();
    let el = fixture.nativeElement as HTMLElement;
    let curText = el.querySelector('span.current-span')?.textContent;
    expect(curText?.trim()).toEqual(`20:00`);

    let durText = el.querySelector('span.duration-span')?.textContent;
    expect(durText?.trim()).toEqual(`60:00`);
  });
});
