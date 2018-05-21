import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopocadastroComponent } from './topocadastro.component';

describe('TopocadastroComponent', () => {
  let component: TopocadastroComponent;
  let fixture: ComponentFixture<TopocadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopocadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
