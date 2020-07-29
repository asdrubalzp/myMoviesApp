import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingularMoviePage } from './singular-movie.page';

describe('SingularMoviePage', () => {
  let component: SingularMoviePage;
  let fixture: ComponentFixture<SingularMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingularMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingularMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
