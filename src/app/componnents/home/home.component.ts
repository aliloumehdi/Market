import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { DealsServicesService } from 'src/services/deals-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  cardsForHandset = [];
  cardsForWeb = [];

  isHandset: boolean = false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,private dealsService:DealsServicesService) {}
  ngOnInit() {
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
      this.loadCards();
      this.getDeals();

    });

  }
  getDeals(){
    this.dealsService.getDeals().subscribe(r=>{
      this.cardsForHandset = r.mobile;
      this.cardsForWeb = r.web;
      this.loadCards(); 

    },err=>{
      console.error(err);
      
    })
  }
  loadCards(){
    this.cards = this.isHandset ? this.cardsForHandset : this.cardsForWeb;
  }
  getImage(name){
    return "url(http://localhost:3000/images/"+name+".jpg)";
// this.dealsService.getImage(name).subscribe(r=>{ 
//   return "url('"r;
// })
  }
}
