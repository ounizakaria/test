import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomcomComponent } from './welcomcom.component';

describe('WelcomcomComponent', () => {
  let component: WelcomcomComponent;
  let fixture: ComponentFixture<WelcomcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
