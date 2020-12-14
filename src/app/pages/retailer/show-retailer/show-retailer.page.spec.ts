import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowRetailerPage } from './show-retailer.page';

describe('ShowRetailerPage', () => {
  let component: ShowRetailerPage;
  let fixture: ComponentFixture<ShowRetailerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRetailerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowRetailerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
