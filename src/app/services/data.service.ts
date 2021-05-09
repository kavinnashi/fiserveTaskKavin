import { Injectable } from '@angular/core';
import { List } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  categoryList: Array<string> = [];
  categorizedArray: Array<List>=[];
  lists: Array<List>=[
    {
      category: 'Human Resource',
      label: ' Hello  instructables'
    },
    {
      category: 'Financial',
      label: 'Terminal instructables'
    },
    {
      category: 'Financial',
      label: 'Financial instructables'
    },
    {
      category: 'Site Manager',
      label: 'Site Manager instructables'
    },
    {
      category: 'Marketing',
      label: 'Marketing instructables'
    },
    {
      category: 'Human Resource',
      label: 'Human Resource instructables'
    },
    {
      category: 'Site Manager',
      label: 'Site Manager instructables'
    },
    {
      category: 'Financial',
      label: ' Financial  instructables'
    }
  ];

  constructor() { }
  //checking longsize data for pergormance
  getdata(){
    this.categoryList=[];
    for (let i = 0; i < 500; i++) {
      this.lists.push({
        category: 'Site Manager',
        label: 'Terminal instructables'
      });
    }
    return this.lists;
  }
  ngOnInit() {
   
   //set dynamic category
    this.categoryList = this.lists.map(list => {
      return list.category;
    });
    console.log(this.categoryList);
    this.categoryList = [...new Set(this.categoryList)];
  }
  //filter based on both search term and category type together
  filterItems(searchTerm,categoryTerm) {
    if(categoryTerm=="All"){
      categoryTerm="";
    }
    this.categorizedArray=this.lists.filter((item,category, index) => {
      const find = item.category.indexOf(categoryTerm) 
      return find === -1 ? false : true;
    });
    if(searchTerm!="")
    return this.categorizedArray.filter((item,category, index) => {
      const find = item.label.toLowerCase().indexOf(searchTerm) 
      return find === -1 ? false : true;
    });
    else
    return  this.categorizedArray;
  }
}
