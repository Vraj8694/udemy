import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-project';
  lodedFeature:string='recipe';
  onNavigate(feature:string){
    this.lodedFeature = feature;
  }
}
