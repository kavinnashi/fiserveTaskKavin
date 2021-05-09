import { Component, OnInit,ChangeDetectionStrategy  } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
  public searchControl:string="";
  public items: any;
  public category:string= 'All';
 
  constructor(private dataService: DataService) {
   
   }

   
  
  categoryList: Array<string> = [];
  ngOnInit(): void {
      //set dynamic category
    this.categoryList = this.dataService.lists.map(list => {
      return list.category;
    });
    this.categoryList = [...new Set(this.categoryList)];
    this.setFilteredItems("",this.category);

   
  }
  ///trigger filter
  inputChange(val){
    
    this.setFilteredItems(val,this.category);
  }
  setFilteredItems(searchTerm,category:string) {
    this.items = this.dataService.filterItems(searchTerm,category);
  }
  }


