import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuDirComponent } from './stu-dir.component';

describe('StuDirComponent', () => {
  let component: StuDirComponent;
  let fixture: ComponentFixture<StuDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
