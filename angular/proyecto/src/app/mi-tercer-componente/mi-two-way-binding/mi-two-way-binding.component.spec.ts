import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTwoWayBindingComponent } from './mi-two-way-binding.component';

describe('MiTwoWayBindingComponent', () => {
  let component: MiTwoWayBindingComponent;
  let fixture: ComponentFixture<MiTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
