import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(public fireservice:AngularFirestore) { }
  create_newEmployee(Record){
    return this.fireservice.collection('Employee').add(Record)
  }
  get_allEmployee(){
    return this.fireservice.collection('Employee').snapshotChanges();
  }
  
}
