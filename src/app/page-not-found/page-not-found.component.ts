import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private seoService: SeoService) {
    this.seoService.createCannonicalTag();
  }
  ngOnInit() {
    this.seoService.setDocumentTitle('404');
  }
}
