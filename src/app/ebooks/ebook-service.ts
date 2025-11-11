import { Injectable } from '@angular/core';
import { Ebook } from './ebook';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EbookService {
  private ebooks : Ebook[] = [
    {id : 1, title : 'Atomic Habits', author : 'James Clear', price : 30},
    {id : 2, title : 'The slight edge', author : 'Jeff Olsen', price : 25}
  ];
  ebooksUpdated = new Subject<Ebook[]>();

  getEbooks(){
    return [...this.ebooks];
  }

  getEbookById(id : number) : Ebook | undefined{
    return this.ebooks.find(ebook=>ebook.id === id);
  }

  getLastId(): number{
    return this.ebooks[this.ebooks.length - 1].id
  }

  addEbook(ebook : Ebook) : void{
    this.ebooks = [...this.ebooks, ebook];
  }

  editEbook(ebook : Ebook) : void{
    this.ebooks = this.ebooks.map(e => e.id === ebook.id?ebook:e);
  }

  deleteEbook(id : number){
    this.ebooks = this.ebooks.filter(ebook => ebook.id !== id);
    console.log(this.ebooks);
    this.ebooksUpdated.next([...this.ebooks]);
  }
  
}
