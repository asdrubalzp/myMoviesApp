import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchmoviesPage } from './searchmovies.page';

describe('SearchmoviesPage', () => {
  let component: SearchmoviesPage;
  let fixture: ComponentFixture<SearchmoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmoviesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchmoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
