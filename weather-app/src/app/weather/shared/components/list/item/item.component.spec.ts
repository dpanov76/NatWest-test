import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    component.item = {
      dt_txt:'2022-11-28 18:00:00',
      main:{
        temp: 1
      },
      wind: {
        speed: 100
      },
      weather:[
        {
          main: 'cloudy',
          description: 'very cloudy',
          icon: '10c'
        }
      ]
    };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.date').textContent).toBe('Nov 28, 2022');
  });
});
