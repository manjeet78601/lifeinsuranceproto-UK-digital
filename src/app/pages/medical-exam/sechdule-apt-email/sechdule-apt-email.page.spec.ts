import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SechduleAptEmailPage } from './sechdule-apt-email.page';

describe('SechduleAptEmailPage', () => {
  let component: SechduleAptEmailPage;
  let fixture: ComponentFixture<SechduleAptEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SechduleAptEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SechduleAptEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
