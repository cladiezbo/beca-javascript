import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpTextoSuperiorComponent } from './cmp-texto-superior.component';

describe('CmpTextoSuperiorComponent', () => {
  let component: CmpTextoSuperiorComponent;
  let fixture: ComponentFixture<CmpTextoSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpTextoSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpTextoSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
