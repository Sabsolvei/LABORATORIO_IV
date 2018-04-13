import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDatossComponent } from './mostrar-datoss.component';

describe('MostrarDatossComponent', () => {
  let component: MostrarDatossComponent;
  let fixture: ComponentFixture<MostrarDatossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDatossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDatossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
