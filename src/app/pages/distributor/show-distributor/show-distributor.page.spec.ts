import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowDistributorPage } from './show-distributor.page';

describe('ShowDistributorPage', () => {
  let component: ShowDistributorPage;
  let fixture: ComponentFixture<ShowDistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDistributorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
