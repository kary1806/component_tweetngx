import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetNgxkhComponent } from './tweet-ngxkh.component';

describe('TweetNgxkhComponent', () => {
  let component: TweetNgxkhComponent;
  let fixture: ComponentFixture<TweetNgxkhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetNgxkhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetNgxkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
