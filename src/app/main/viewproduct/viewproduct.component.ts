import { Component, OnInit } from '@angular/core';
import { ViewproductService } from 'src/app/service/viewproduct.service';
import { FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  data: any;

  apiUrl=environment.host+'/static/'

  isLinear = false;
  constructor(private viewProductService:ViewproductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  updateForm = new FormGroup({
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
    productType:new FormControl(''),
    NumberOfProduct:new FormControl(''),
  })

  productArr:any
  getProduct(){
    
    this.viewProductService.getProduct().subscribe((res)=>{
      if(res.error==false){
      this.productArr=res.data;
      }
      else{
        Swal.fire('error','Please login again!', 'error')
      }
    })
  }

  productId:any
  deleteProduct(id:any){
    this.productId=id;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.viewProductService.deleteProduct(this.productId).subscribe((res)=>{
          if(res.error==false){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getProduct();
          }
          else{
            Swal.fire('error','Something Went Wrong!', 'error')
          }
        })
      }
    })    
  }


  controleBack=true
  controleElectric=false
  controleElectronic=false
  controleCloth=false
  selectedValue:any
  updateId:any
  getData(data:any,id:any){
    if(data.modeOfProduct=="Electronic"){
      this.controleBack=false
      this.controleElectric=false
      this.controleElectronic=true
      this.controleCloth=false
      this.updateId=id    
      this.updateForm.patchValue(data)
      console.log(data)
    }else if(data.modeOfProduct=="Electric"){
      this.controleBack=false
      this.controleElectric=true
      this.controleElectronic=false
      this.controleCloth=false
      this.updateId=id    
      this.updateForm.patchValue(data)
    }else{
      this.controleBack=false
      this.controleElectric=false
      this.controleElectronic=false
      this.controleCloth=true
      this.updateId=id    
      this.updateForm.patchValue(data)
    }
  }
  updateproduct(){
    this.viewProductService.updateProduct(this.updateId,this.updateForm.value).subscribe((res)=>{
      if(res.error==false){
        this.updateProductImg()     
      }
      else{
        Swal.fire('error','Something Went Wrong!', 'error')
      }
    })
  }

  document = { 'image': '' }
  getImage(event: any) {
    console.log(event)
    this.updateForm.value.productImage = event.target.files[0].name
    this.document['image'] = event.target.files[0];
  }
  
  updateProductImg() {
    const formData = new FormData();
    formData.append("upload_id", this.updateId);
    formData.append('file', this.document['image']);
    this.viewProductService.updateProductImg(formData).subscribe((res) => {
      if (res.error == false) {
        this.controleBack=true
        this.controleElectric=false
        this.controleElectronic=false
        this.controleCloth=false
        Swal.fire('success',"Updated", 'success')
        this.getProduct();  
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
