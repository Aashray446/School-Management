import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFinanceComponent } from './admin-finance.component';

describe('AdminFinanceComponent', () => {
  let component: AdminFinanceComponent;
  let fixture: ComponentFixture<AdminFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
