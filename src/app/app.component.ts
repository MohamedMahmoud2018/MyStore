import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyStore';
  dataToCart:any
  ngOnInit(){
    console.log(this.dataToCart)
  }
}



