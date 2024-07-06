import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousel } from '../../models/carousel/carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }


  getCarousel(){
    return this.http.get<any>('/assets/archivosConfi/carousel.json')
    .toPromise()
    .then(res=><Carousel[]>res.data)
    .then(data =>{return data;});
  }
}
