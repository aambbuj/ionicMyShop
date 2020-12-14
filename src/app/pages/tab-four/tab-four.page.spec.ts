import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabFourPage } from './tab-four.page';

describe('TabFourPage', () => {
  let component: TabFourPage;
  let fixture: ComponentFixture<TabFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
