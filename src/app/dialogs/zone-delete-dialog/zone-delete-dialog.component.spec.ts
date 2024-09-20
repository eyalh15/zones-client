import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDeleteDialogComponent } from './zone-delete-dialog.component';

describe('ZoneDeleteDialogComponent', () => {
  let component: ZoneDeleteDialogComponent;
  let fixture: ComponentFixture<ZoneDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneDeleteDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
