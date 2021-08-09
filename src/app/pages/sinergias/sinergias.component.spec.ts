import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinergiasComponent } from './sinergias.component';

describe('SinergiasComponent', () => {
  let component: SinergiasComponent;
  let fixture: ComponentFixture<SinergiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinergiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinergiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
