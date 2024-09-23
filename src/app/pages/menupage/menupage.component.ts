import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-menupage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  
  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if(this.getMenuId){
      this.menuData = this.service.foodDetails.filter((value)=>{
        return value.id== this.getMenuId;

      
      })

    }
  }

}
