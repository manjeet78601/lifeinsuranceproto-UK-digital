import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookClinicComponent } from './book-clinic.component';

describe('BookClinicComponent', () => {
  let component: BookClinicComponent;
  let fixture: ComponentFixture<BookClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookClinicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
