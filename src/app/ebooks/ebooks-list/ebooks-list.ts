import { Component, inject, OnInit } from '@angular/core';
import { Ebook } from '../ebook';
import { EbookService } from '../ebook-service';

@Component({
  selector: 'app-ebooks-list',
  standalone : false,
  templateUrl: './ebooks-list.html',
  styleUrl: './ebooks-list.css'
})
export class EbooksList implements OnInit {
  ebooks : Ebook[] = [];
  //private ebookServc = inject(EbookService);

  constructor(private ebookSrvc : EbookService){
  }

  deleteEbook(id : number){
    this.ebookSrvc.deleteEbook(id);
  }

  ngOnInit(): void {
    this.ebooks = this.ebookSrvc.getEbooks();
    this.ebookSrvc.ebooksUpdated.subscribe(
      (ebooks) => this.ebooks = ebooks
    )
  }

}
