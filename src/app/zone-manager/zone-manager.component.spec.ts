import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneManagerComponent } from './zone-manager.component';

describe('ZoneManagerComponent', () => {
  let component: ZoneManagerComponent;
  let fixture: ComponentFixture<ZoneManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
