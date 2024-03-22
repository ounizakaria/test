import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,ReactiveFormsModule,} from '@angular/forms';
import {EnventserviceService} from '../service/enventservice.service';
import {ServiceTor} from '../Models/Events';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {
 showadd!:boolean;
 showupdate!:boolean;
 Servicemodelobj:ServiceTor=new ServiceTor;
 formValue!:FormGroup
 allservice:any
  constructor(private ev:EnventserviceService , private formBuilder:FormBuilder ){



  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Name:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      category:['',Validators.required],
      location:['',Validators.required],
      duration:['',Validators.required],
      document:['',Validators.required],
      contact:['',Validators.required]





    })
 this.getdata()
  }



  addServicetori(){
    this.Servicemodelobj.Name=this.Servicemodelobj.Name;
    this.Servicemodelobj.price=this.Servicemodelobj.price;
    this.Servicemodelobj.duration=this.Servicemodelobj.duration;
    this.Servicemodelobj.category=this.Servicemodelobj.category;
    this.Servicemodelobj.location=this.Servicemodelobj.location;
    this.Servicemodelobj.document=this.Servicemodelobj.document;
    this.Servicemodelobj.contact=this.Servicemodelobj.contact;

    this.ev.createToristiqueSer(this.Servicemodelobj).subscribe(res=>{
      console.log(res)
      this.formValue.reset()
      this.getdata()
      alert("added sucessfully")
},
(err:HttpErrorResponse)=>{
   alert("something went wrong");
  })
}
getdata(){
  this.ev.getToristiqueServ()
  .subscribe(res=>{this.allservice=res});
 }

 deleteser(data:any){
  if(confirm('Are you sure to delete ?'))
  this.ev.deleteEvent(data._id).subscribe(res=>{
    alert('deleted sucessfully')
    this.getdata()
  })
 }

  add(){
    this.showadd=true
    this.showupdate=false}
  edit(data:any){
    this.showadd=false
    this.showupdate=true
    this.formValue.controls['Name'].setValue(data.name)
    this.formValue.controls['price'].setValue(data.price)
    this.formValue.controls['description'].setValue(data.description)
    this.formValue.controls['duration'].setValue(data.duration)
    this.formValue.controls['category'].setValue(data.category)
    this.formValue.controls['location'].setValue(data.location)
    this.formValue.controls['document'].setValue(data.document)
    this.formValue.controls['contact'].setValue(data.contact)
  }

  update(data:any){
    this.Servicemodelobj.Name=this.Servicemodelobj.Name;
    this.Servicemodelobj.price=this.Servicemodelobj.price;
    this.Servicemodelobj.description=this.Servicemodelobj.description
    this.Servicemodelobj.duration=this.Servicemodelobj.duration;
    this.Servicemodelobj.category=this.Servicemodelobj.category;
    this.Servicemodelobj.location=this.Servicemodelobj.location;
    this.Servicemodelobj.document=this.Servicemodelobj.document;
    this.Servicemodelobj.contact=this.Servicemodelobj.contact;
    this.ev.updateEvent(this.Servicemodelobj,data._id).subscribe(res=>{

      alert("update is sucessfully ")
    },
    err=>{
      alert("something went wrong")
    }

    )
  }





}
