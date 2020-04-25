import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommandSuccesPage } from './command-succes.page';

describe('CommandSuccesPage', () => {
  let component: CommandSuccesPage;
  let fixture: ComponentFixture<CommandSuccesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandSuccesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandSuccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
