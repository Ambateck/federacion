import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraviadosComponent } from './extraviados.component';

describe('ExtraviadosComponent', () => {
  let component: ExtraviadosComponent;
  let fixture: ComponentFixture<ExtraviadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraviadosComponent]
    });
    fixture = TestBed.createComponent(ExtraviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
