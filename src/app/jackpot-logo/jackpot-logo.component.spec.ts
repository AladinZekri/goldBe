import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotLogoComponent } from './jackpot-logo.component';

describe('JackpotLogoComponent', () => {
  let component: JackpotLogoComponent;
  let fixture: ComponentFixture<JackpotLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JackpotLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
