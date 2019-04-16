import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpImagenesComponent } from './cmp-imagenes.component';

describe('CmpImagenesComponent', () => {
  let component: CmpImagenesComponent;
  let fixture: ComponentFixture<CmpImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
