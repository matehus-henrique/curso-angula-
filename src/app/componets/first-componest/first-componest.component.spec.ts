import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponestComponent } from './first-componest.component';

describe('FirstComponestComponent', () => {
  let component: FirstComponestComponent;
  let fixture: ComponentFixture<FirstComponestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
