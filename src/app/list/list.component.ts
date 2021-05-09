import { Component, OnInit , Input,ChangeDetectionStrategy} from '@angular/core';
import { List } from '../model/model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  
  constructor() { }
  @Input() lists:Array<List>=[];
  ngOnInit(): void {
  }

}
