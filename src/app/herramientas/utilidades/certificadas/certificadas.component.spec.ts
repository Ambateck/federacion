import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadasComponent } from './certificadas.component';

describe('CertificadasComponent', () => {
  let component: CertificadasComponent;
  let fixture: ComponentFixture<CertificadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificadasComponent]
    });
    fixture = TestBed.createComponent(CertificadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
