import { ChangeDetectionStrategy,EventEmitter, Component, Input ,Output} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomPageComponent{

  public p:number;

  constructor(){
    this.p=1;
  }


  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  @Input() config:PageInstance

}

interface PageInstance{
  id?: string;
  itemsPerPage: number;
  currentPage: number;
  totalItems?: number;
}
