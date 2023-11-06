import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class SeoService {

  constructor(@Inject(DOCUMENT) private doc: Document, private title: Title, private meta: Meta) { }

  setDocumentTitle(title: string) {
    this.title.setTitle(title);
  }
  getDocumentTitle(): string {
    return this.title.getTitle();
  }

  addMetaTag(tag: MetaDefinition) {
    this.meta.addTag(tag)
  }

  updateMetaTag(tag: MetaDefinition) {
    this.meta.updateTag(tag);
  }

  createCannonicalTag() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }
}
