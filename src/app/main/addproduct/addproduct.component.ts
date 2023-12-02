import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddproductService } from 'src/app/service/addproduct.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  private _formBuilder: any;

  constructor(private productService: AddproductService,private router:Router) { }

  ngOnInit(): void {
  }
  isLinear = false;

  addProductform = new FormGroup({
    productName: new FormControl(''),
    productStorage: new FormControl(''),
    productPrice: new FormControl(''),
    productImage: new FormControl(''),
    networktype:new FormControl(''),
    displaysize: new FormControl(''),
    rearcamera: new FormControl(''),
    frontcamera: new FormControl(''),
    operatingsystem: new FormControl(''),
    color: new FormControl(''),
    ModelName: new FormControl(''),
    Warranty:new FormControl(''),
    modeOfProduct:new FormControl(''),
    Productsize:new FormControl(''),
    RemoteSupport:new FormControl(''),
    PowerConsumption:new FormControl(''),
    BodyMaterial:new FormControl(''),
    CountryOfOrigin:new FormControl(''),
    Pack:new FormControl(''),
    Pattern:new FormControl(''),
    Type:new FormControl(''),
    ProductMaterial:new FormControl(''),
    Brand:new FormControl(''),
    productSize:new FormControl(''),
    productStatus:new FormControl(''),
    productType:new FormControl(''),
    NumberOfProduct:new FormControl(''),
  })


  controleBack=true
  controleElectric=false
  controleElectronic=false
  controleCloth=false
  selectedValue:any
  getSelectValue(event:any){
    this.selectedValue = event.target.value
    if(this.selectedValue =='Electronic'){
      this.controleBack=false
      this.controleElectric=false
      this.controleElectronic=true
      this.controleCloth=false
    }else if(this.selectedValue =='Electric'){
      this.controleBack=false
      this.controleElectric=true
      this.controleElectronic=false
      this.controleCloth=false
    }else{
      this.controleBack=false
      this.controleElectric=false
      this.controleElectronic=false
      this.controleCloth=true
    }
  }

  productStatus='Active'
  productId: any
  addProduct() {
    this.addProductform.value.productStatus=this.productStatus
    this.addProductform.value.productImage = this.productImgName;
    this.addProductform.value.modeOfProduct = this.selectedValue;
    console.log(this.addProductform.value)
    this.productService.addProduct(this.addProductform.value).subscribe((res) => {
      if (res.error == false) {
        this.addProductform.reset();
        this.productId = res.data._id
        console.log(this.productId)
        this.uploadProductImg()
      }
      else {
        Swal.fire('error', 'Something Went Wrong!', 'error')
      }
    })
  }

  document = { 'image': '' }
  productImgName:any
  getImage(event: any) {
    this.productImgName = event.target.files[0].name
    this.document['image'] = event.target.files[0];
  }
  
  uploadProductImg() {
    const formData = new FormData();
    formData.append("upload_id", this.productId);
    formData.append('file', this.document['image']);
    this.productService.uploadProductImg(formData).subscribe((res) => {
      if (res.error == false) {
        this.router.navigate(['main/viewproduct'])
        Swal.fire('success', "Product Added", 'success')
      } else {
        Swal.fire('error', 'Something Went Wrong!', 'error')
      }
    })
  }

  homePage(){
    this.controleBack=true
    this.controleElectric=false
    this.controleElectronic=false
    this.controleCloth=false
  }

}
