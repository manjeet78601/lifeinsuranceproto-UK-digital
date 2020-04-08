import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacialScanComponent } from './facial-scan.component';

describe('FacialScanComponent', () => {
  let component: FacialScanComponent;
  let fixture: ComponentFixture<FacialScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialScanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacialScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
