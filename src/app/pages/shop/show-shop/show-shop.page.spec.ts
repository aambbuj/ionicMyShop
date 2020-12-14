import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowShopPage } from './show-shop.page';

describe('ShowShopPage', () => {
  let component: ShowShopPage;
  let fixture: ComponentFixture<ShowShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
