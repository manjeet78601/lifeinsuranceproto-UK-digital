import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocateLabComponent } from './locate-lab.component';

describe('LocateLabComponent', () => {
  let component: LocateLabComponent;
  let fixture: ComponentFixture<LocateLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateLabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocateLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
