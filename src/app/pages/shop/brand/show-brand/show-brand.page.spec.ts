import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowBrandPage } from './show-brand.page';

describe('ShowBrandPage', () => {
  let component: ShowBrandPage;
  let fixture: ComponentFixture<ShowBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
