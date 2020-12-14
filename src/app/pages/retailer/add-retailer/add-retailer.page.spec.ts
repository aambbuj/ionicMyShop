import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRetailerPage } from './add-retailer.page';

describe('AddRetailerPage', () => {
  let component: AddRetailerPage;
  let fixture: ComponentFixture<AddRetailerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRetailerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRetailerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
