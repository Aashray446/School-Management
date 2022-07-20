import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceMakerComponent } from './invoice-maker.component';

describe('InvoiceMakerComponent', () => {
  let component: InvoiceMakerComponent;
  let fixture: ComponentFixture<InvoiceMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
