import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNonfoundComponent } from './page-nonfound.component';

describe('PageNonfoundComponent', () => {
  let component: PageNonfoundComponent;
  let fixture: ComponentFixture<PageNonfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageNonfoundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNonfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
