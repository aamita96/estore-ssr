import { Component } from '@angular/core';
import { Product } from '../models/products';
import { StoreService } from '../services/store.service';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;
  constructor(private storeService: StoreService, private ac: ActivatedRoute, private seoService: SeoService) {
    this.seoService.createCannonicalTag();
  }

  ngOnInit() {
    const productId = this.ac.snapshot.params['id'];
    this.storeService.getProductById(productId).subscribe(product => {
      this.product = product;
      this.seoService.setDocumentTitle(product.title)
      this.seoService.updateMetaTag({ name: "description", content: product.description });
      this.seoService.updateMetaTag({ property: 'og:title', content: product.description });
    })
  }
}
