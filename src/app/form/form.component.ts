import { MyServiceService } from '../my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  showForm = true;

  job_title: string;
  job_salary: number;
  job_desc: string;

  constructor(public myservice: MyServiceService) { }
  createRecord() {
    this.showForm = false;

    let record = {};
    record['title'] = this.job_title;
    record['salary'] = this.job_salary;
    record['desc'] = this.job_desc;

    this.myservice.create_newEmployee(record).then(res => {
      this.job_title = "";
      this.job_salary = undefined;
      this.job_desc = "";
      // console.log(res);
    }).catch(error=>{
      console.log(error);
    })
  }
  ngOnInit(): void {
  }
}
