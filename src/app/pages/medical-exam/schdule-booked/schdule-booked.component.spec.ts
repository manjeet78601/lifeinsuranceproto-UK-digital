import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchduleBookedComponent } from './schdule-booked.component';

describe('SchduleBookedComponent', () => {
  let component: SchduleBookedComponent;
  let fixture: ComponentFixture<SchduleBookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchduleBookedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchduleBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
