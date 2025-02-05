import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalSearchComponent } from './hospital-search.component';

describe('HospitalSearchComponent', () => {
  let component: HospitalSearchComponent;
  let fixture: ComponentFixture<HospitalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalSearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // You can add more test cases based on your component's functionality
});
