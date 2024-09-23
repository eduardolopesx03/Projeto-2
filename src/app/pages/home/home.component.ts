import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';


OrderDetailsService
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;

  
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
}
