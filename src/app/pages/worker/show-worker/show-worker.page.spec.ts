import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowWorkerPage } from './show-worker.page';

describe('ShowWorkerPage', () => {
  let component: ShowWorkerPage;
  let fixture: ComponentFixture<ShowWorkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWorkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowWorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
