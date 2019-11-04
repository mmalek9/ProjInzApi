import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {InfoService} from '../../info.service';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.css']
})
export class InfoTextComponent implements OnInit {
  modalRef: BsModalRef;
  info: Info = new Info();
  informations: any;
  editInfo: any;
  errorMsg: ErrorMsg = new ErrorMsg();
  // tslint:disable-next-line:object-literal-key-quotes
  id =  {'id': ''};
  constructor(private modalService: BsModalService, private infoService: InfoService) { }

  ngOnInit() {
    this.getInformations();
  }

  getInformations() {
    this.infoService.get().subscribe(res => {
      this.informations = res;
      console.log(this.informations);
    }, error => {
      console.log(error);
    });
  }

  onSave() {
    this.errorMsg.content  = '';
    // tslint:disable-next-line:no-unused-expression
    !this.info.content ? this.errorMsg.content = 'Prosze podac tresc' : '';
    if (!this.info.content) {
      return;
    }

    this.infoService.post(this.info).subscribe(res => {
      this.getInformations();
      this.modalRef.hide();
      this.info.content = '';
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

 onUpdate() {
   this.infoService.update(this.editInfo).subscribe(res => {
    this.getInformations();
    this.modalRef.hide();
    console.log(res);
   }, error => {
     console.log(error);
   });
 }

  deleteInfo() {
    this.infoService.delete(this.id).subscribe(res => {
      this.getInformations();
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

  openModalEdit(template: TemplateRef<any>, info) {
    this.modalRef = this.modalService.show(template);
    this.editInfo = info;
  }
}

class Info {
  content: string;
}

class ErrorMsg {
  content: string;
}
