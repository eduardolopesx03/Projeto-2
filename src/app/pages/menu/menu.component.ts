import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
}
