import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  myForm: FormGroup;
  productName: string;
  data: object;
  loading: boolean;
  constructor(fb:FormBuilder, private http: HttpClient) { 
    this.myForm = fb.group({
      'test1': ['123', Validators.compose([Validators.required, testValidator])],
      'productName': ['', Validators.required]
    });
    this.myForm.controls['test1'].valueChanges.subscribe((value:string) => {
      console.log(value)
    })
    this.myForm.valueChanges.subscribe((form:any) => {
      console.log(form)
    })
  }
  addNote(
    title:HTMLInputElement,
    content:HTMLTextAreaElement
  ): void{

    console.log(title.value,content.value)
  }

  ngOnInit() {
  }
  onSubmit(form: any):void{
    console.log(form)
  }
  makeRequest():void{
    this.loading = true;
    this.http.get('http://localhost:8088/demo/api/note').subscribe((res) => {
      this.data = res;
      this.loading = false;
    })
  }
  
}
function testValidator(control: FormControl):{[s:string]:boolean}{
  if(!control.value.match(/^123/)){
    return {invalidTest: true};
  }
}
