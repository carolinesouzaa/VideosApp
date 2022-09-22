import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AEraDeUltronPage } from './a-era-de-ultron.page';

describe('AEraDeUltronPage', () => {
  let component: AEraDeUltronPage;
  let fixture: ComponentFixture<AEraDeUltronPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AEraDeUltronPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AEraDeUltronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
