import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowSellerPage } from './show-seller.page';

describe('ShowSellerPage', () => {
  let component: ShowSellerPage;
  let fixture: ComponentFixture<ShowSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
