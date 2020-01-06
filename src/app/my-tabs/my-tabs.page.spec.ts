import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyTabsPage } from './my-tabs.page';

describe('MyTabsPage', () => {
  let component: MyTabsPage;
  let fixture: ComponentFixture<MyTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
