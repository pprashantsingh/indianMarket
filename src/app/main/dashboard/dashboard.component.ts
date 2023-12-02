import { Component, OnInit } from '@angular/core';
import { ViewproductService } from 'src/app/service/viewproduct.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private viewProductService:ViewproductService) { }

  ngOnInit(): void {
    this.getProduct();
    // this.currentItemsToShow = this.items.slice(0,this.defaultRecords);
  }

  totalProduct:any
  avilableProduct:any
  getProduct(){
    this.viewProductService.getProduct().subscribe((res)=>{
      this.totalProduct=res.totalProduct
      this.avilableProduct=res.avilableProduct;
    })
  }

  // defaultRecords: any = 2;
  // items = [{name:"vikrant"},{name:"Vishal"},{name:"Prashant"},{name:"Goldi"},{name:"HHH"},{name:"fgd"},{name:"vikrfdgant"}]

  // currentItemsToShow
  // onPageChange($event) {
  //   this.currentItemsToShow =  this.items.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  // }
}
