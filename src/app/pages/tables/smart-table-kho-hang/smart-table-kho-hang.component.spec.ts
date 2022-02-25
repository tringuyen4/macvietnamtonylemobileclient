import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTableKhoHangComponent } from './smart-table-kho-hang.component';

describe('SmartTableKhoHangComponent', () => {
  let component: SmartTableKhoHangComponent;
  let fixture: ComponentFixture<SmartTableKhoHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTableKhoHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableKhoHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
