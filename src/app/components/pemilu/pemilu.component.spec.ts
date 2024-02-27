import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemiluComponent } from './pemilu.component';

describe('PemiluComponent', () => {
  let component: PemiluComponent;
  let fixture: ComponentFixture<PemiluComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PemiluComponent]
    });
    fixture = TestBed.createComponent(PemiluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
