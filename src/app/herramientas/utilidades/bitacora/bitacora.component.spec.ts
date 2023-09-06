import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraComponent } from './bitacora.component';

describe('BitacoraComponent', () => {
  let component: BitacoraComponent;
  let fixture: ComponentFixture<BitacoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitacoraComponent]
    });
    fixture = TestBed.createComponent(BitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
