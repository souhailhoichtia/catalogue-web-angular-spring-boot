import { CatalogueService } from "./../services/catalogue.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
  constructor(private catserv: CatalogueService, private router: Router) {}

  ngOnInit() {}
  onSaveProduct(data: any) {
    this.catserv.addRessource(this.catserv.host + "/produits", data).subscribe(
      res => {
        //console.log(res);
        this.router.navigateByUrl("/products");
      },
      err => {
        console.log(err);
      }
    );
  }
}
