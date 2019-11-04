import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {DealsService} from '../../deals.service';

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.css']
})
export class DealsListComponent implements OnInit {
  modalRef: BsModalRef;
  deal: Deal = new Deal();
  deals: any;
  editDeal: any;
  errorMsg: ErrorMsg = new ErrorMsg();
  // tslint:disable-next-line:object-literal-key-quotes
  id = {'id': ''};
  constructor(private modalService: BsModalService, private dealsService: DealsService) { }

  ngOnInit() {
    this.getDeals();
  }

  getDeals() {
    this.dealsService.get().subscribe(res => {
      this.deals = res;
      console.log(this.deals);
    }, error => {
      console.log(error);
    });
  }

  onSave() {
    this.errorMsg.content = '';
    // tslint:disable-next-line:no-unused-expression
    !this.deal.content ? this.errorMsg.content = 'Prosze podac tresc' : '';
    if (!this.deal.content) {
      return;
    }

    this.dealsService.post(this.deal).subscribe(res => {
      this.getDeals();
      this.modalRef.hide();
      this.deal.content = '';
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
  onUpdate() {
    this.dealsService.update(this.editDeal).subscribe(res => {
      this.getDeals();
      this.modalRef.hide();
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
  deleteDeal() {
    this.dealsService.delete(this.id).subscribe(res => {
      this.getDeals();
      this.modalRef.hide();
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
  openModalDelete(template: TemplateRef<any>, id) {
    this.id.id = id;
    this.modalRef = this.modalService.show(template);
  }
  openModalAdd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalEdit(template: TemplateRef<any>, deal) {
    this.modalRef = this.modalService.show(template);
    this.editDeal = deal;
  }
}

class Deal {
  content: string;
}

class ErrorMsg {
  content: string;
}
