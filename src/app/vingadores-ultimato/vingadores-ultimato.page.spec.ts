import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VingadoresUltimatoPage } from './vingadores-ultimato.page';

describe('VingadoresUltimatoPage', () => {
  let component: VingadoresUltimatoPage;
  let fixture: ComponentFixture<VingadoresUltimatoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VingadoresUltimatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VingadoresUltimatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
