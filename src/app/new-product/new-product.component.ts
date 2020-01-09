import { CatalogueService } from "./../services/catalogue.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
  constructor(private catserv: CatalogueService) {}

  ngOnInit() {}
  onSaveProduct(data: any) {
    this.catserv.addRessource(this.catserv.host + "/produits", data).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
