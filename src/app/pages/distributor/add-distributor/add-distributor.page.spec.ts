import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDistributorPage } from './add-distributor.page';

describe('AddDistributorPage', () => {
  let component: AddDistributorPage;
  let fixture: ComponentFixture<AddDistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDistributorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
