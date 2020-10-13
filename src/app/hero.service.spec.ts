import { TestBed, getTestBed , inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let injector: TestBed;
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService,MessageService],
    });

    injector = getTestBed();
    service = injector.inject(HeroService);
    httpMock = injector.inject(HttpTestingController);
  });
//   it('should be created',() => {
//     expect(service).toBeTruthy();
//   });


it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const dummyHeroesListResponse = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  
  it('getHeroes should return data', () => {
      service.getHeroes().subscribe((res) => {
        expect(res).toEqual(dummyHeroesListResponse);
      });
  
      const req = httpMock.expectOne('api/heroes');
      expect(req.request.method).toBe('GET');
      req.flush(dummyHeroesListResponse);
    });

//   afterEach(() => {
//     httpMock.verify();
//   });  
});