import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Product } from '../models/products';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products: Product[] | undefined;
  constructor(private storeService: StoreService, private seoService: SeoService) {
    this.seoService.createCannonicalTag();
  }

  ngOnInit() {
    this.seoService.setDocumentTitle('All Products');
    this.seoService.addMetaTag({ name: "description", content: 'List of all products' });
    this.seoService.addMetaTag({ property: 'og:title', content: 'facebook-title for fb crawlers to list tech gadgets.' });
    this.storeService.getAllProducts().subscribe(results => {
      this.products = results;
    })
  }
}
