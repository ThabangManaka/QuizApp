import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathsComponent } from './maths.component';

describe('MathsComponent', () => {
  let component: MathsComponent;
  let fixture: ComponentFixture<MathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
