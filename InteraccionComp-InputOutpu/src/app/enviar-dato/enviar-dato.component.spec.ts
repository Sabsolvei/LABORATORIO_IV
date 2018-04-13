import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarDatoComponent } from './enviar-dato.component';

describe('EnviarDatoComponent', () => {
  let component: EnviarDatoComponent;
  let fixture: ComponentFixture<EnviarDatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarDatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
