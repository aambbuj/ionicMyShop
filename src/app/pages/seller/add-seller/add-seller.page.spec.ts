import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSellerPage } from './add-seller.page';

describe('AddSellerPage', () => {
  let component: AddSellerPage;
  let fixture: ComponentFixture<AddSellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
