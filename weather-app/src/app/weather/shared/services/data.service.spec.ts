import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  afterEach(() => {
    httpMock.verify(); //Check there is no pending requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data from the API via GET', ()=>{
    const dummyData = {
      "cod": "200",
      "message": 0,
      "cnt": 40,
      "list": [
        {
          "dt": 1669561200,
          "main": {
            "temp": 286.02,
            "feels_like": 285.82,
            "temp_min": 285.16,
            "temp_max": 286.02,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 1008,
            "humidity": 94,
            "temp_kf": 0.86
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 75
          },
          "wind": {
            "speed": 1.71,
            "deg": 210,
            "gust": 4.75
          },
          "visibility": 10000,
          "pop": 0.02,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2022-11-27 15:00:00"
        }
      ],
      "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
          "lat": 51.5085,
          "lon": -0.1257
        },
        "country": "GB",
        "population": 1000000,
        "timezone": 0,
        "sunrise": 1669534679,
        "sunset": 1669564714
      }
    }
    service.getData('', {lat: 1, lon: 2}).subscribe(data => {
      expect(data).toEqual(dummyData);
    });

     let request = httpMock.expectOne('?appid=fe3695759da76e0c9dcaf566634a08ed&lat=1&lon=2');
     expect(request.request.method).toBe('GET');

     request.flush(dummyData);
  });
});
