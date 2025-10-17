import { Injectable } from '@angular/core';
import { Ebook } from './ebook';

@Injectable({
  providedIn: 'root'
})
export class EbookService {
  private ebooks : Ebook[] = [
    {id : 1, title : 'Atomic Habits', author : 'James Clear', price : 30},
    {id : 2, title : 'The slight edge', author : 'Jeff Olsen', price : 25}
  ];

  getEbooks(){
    return [...this.ebooks];
  }

  //addEbook
  
}
