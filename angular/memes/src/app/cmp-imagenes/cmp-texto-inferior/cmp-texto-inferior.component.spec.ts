import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpTextoInferiorComponent } from './cmp-texto-inferior.component';

describe('CmpTextoInferiorComponent', () => {
  let component: CmpTextoInferiorComponent;
  let fixture: ComponentFixture<CmpTextoInferiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpTextoInferiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpTextoInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
