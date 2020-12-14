import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowOrderPage } from './show-order.page';

describe('ShowOrderPage', () => {
  let component: ShowOrderPage;
  let fixture: ComponentFixture<ShowOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
