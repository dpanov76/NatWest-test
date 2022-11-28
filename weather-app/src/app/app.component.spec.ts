import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DropdownComponent } from './weather/shared/components/dropdown/dropdown.component';
import { ItemsComponent } from './weather/shared/components/list/items/items.component';
import { ItemComponent } from './weather/shared/components/list/item/item.component';
import { Store, StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DropdownComponent,
        ItemsComponent,
        ItemComponent
      ],
      imports: [StoreModule.forRoot({})]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('weather-app');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('weather-app app is running!');
  });
});
