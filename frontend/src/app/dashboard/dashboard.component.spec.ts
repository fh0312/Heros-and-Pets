import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixt: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents(); 

    fixt = TestBed.createComponent(DashboardComponent);
    component = fixt.componentInstance;
    fixt.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
