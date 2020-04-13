import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookLabComponent } from './book-lab.component';

describe('BookLabComponent', () => {
  let component: BookLabComponent;
  let fixture: ComponentFixture<BookLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
