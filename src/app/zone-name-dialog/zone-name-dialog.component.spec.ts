import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneNameDialogComponent } from './zone-name-dialog.component';

describe('ZoneNameDialogComponent', () => {
  let component: ZoneNameDialogComponent;
  let fixture: ComponentFixture<ZoneNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneNameDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
