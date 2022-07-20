import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcPanelComponent } from './ac-panel.component';

describe('AcPanelComponent', () => {
  let component: AcPanelComponent;
  let fixture: ComponentFixture<AcPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
