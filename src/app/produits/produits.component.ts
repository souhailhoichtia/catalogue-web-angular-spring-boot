import { CatalogueService } from './../services/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: any;
  constructor(private catalogueService: CatalogueService) {}

  ngOnInit() {}
  onGetProducts() {
    this.catalogueService.getProducts().subscribe(
      data => {
        this.produits = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
