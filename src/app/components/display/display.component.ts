import { KeyValue } from '@angular/common';
import { Component, ChangeDetectorRef, NgZone, ApplicationRef } from '@angular/core';
import { AssignDocService } from 'src/app/services/assign-doc.service';
import { GetInfoService } from 'src/app/services/get-info.service';
import { NameOnlyPipe } from 'src/NameOnlyPipe';
import { Router } from '@angular/router';
import { DeleteService } from 'src/app/services/delete.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  data: any;
  doc$: any;
  
  constructor(private getinfo: GetInfoService, private assign: AssignDocService, private router: Router, private del:DeleteService) { }

  unsorted(a: KeyValue<string, string>, b: KeyValue<string, string>): number { return 0; }

  SelectedDoc: string = '';


  confirmDoctor(selectedDoctor: string, pid: string) {
    console.log(selectedDoctor);


    this.assign.AssignDoctor(selectedDoctor, pid).subscribe(
      (response) => {
        console.log(response);
        this.getInfo();
      }
    )
  }
  getInfo() {
    this.getinfo.getInfo('patient').subscribe((response) => {
      this.data = response;
      console.log(this.data);
    })

    this.doc$ = this.getinfo.getInfo('doctor');
  }
  delete(id:string){
      
    this.del.DeleteRecord(id).pipe(take(1)).subscribe((res)=>{
      console.log(res);
      this.getInfo();
      
    });

    
    
    
  
  }

  ngOnInit(){
    this.getInfo();
  }

}



