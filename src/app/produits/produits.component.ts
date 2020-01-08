import { CatalogueService } from "./../services/catalogue.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-produits",
  templateUrl: "./produits.component.html",
  styleUrls: ["./produits.component.css"]
})
export class ProduitsComponent implements OnInit {
  produits: any;
  size = 5;
  currentPage = 0;
  totalPages: number = 0;
  pages: Array<number>;
  searchedDesignation: string = "";
  constructor(private catalogueService: CatalogueService) {}

  ngOnInit() {}
  onGetProducts() {
    this.catalogueService.getProducts(this.size, this.currentPage).subscribe(
      data => {
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  onPageProduct(i: number) {
    this.currentPage = i;
    this.onChercher({ keyword: this.searchedDesignation });
  }
  onChercher(value: any) {
    this.searchedDesignation = value.keyword;
    console.log(value);
    this.catalogueService
      .getProductByDesignation(
        this.size,
        this.currentPage,
        this.searchedDesignation
      )
      .subscribe(
        data => {
          this.totalPages = data["page"].totalPages;
          this.pages = new Array<number>(this.totalPages);
          this.produits = data;
        },
        error => {
          console.log(error);
        }
      );
  }
}
