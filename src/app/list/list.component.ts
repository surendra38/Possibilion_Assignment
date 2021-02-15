import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  showList:boolean=true;
  employee:any;
  
  constructor(public myservice: MyServiceService) { }
  showData(){
    this.showList=false;
  }
  
  ngOnInit(): void {
    this.myservice.get_allEmployee().subscribe(data=>{
      this.employee=data.map(e=>{
        return{
          id:e.payload.doc.id,
          title:e.payload.doc.data()['title'],
          salary:e.payload.doc.data()['salary'],
          desc:e.payload.doc.data()['desc']
        };
      })
      // console.log(this.employee);
    })
  }
}
