import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {InfoService} from '../../info.service';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  modalRef: BsModalRef;
  contact: Contact = new Contact();
  contacts: any;
  errorMsg: ErrorMsg = new ErrorMsg();
  // tslint:disable-next-line:object-literal-key-quotes
  id = {'id': ''};

  constructor(private modalService: BsModalService, private contactService: ContactService) { }

  ngOnInit() {
  }

  getContacts() {
    this.contactService.get().subscribe(res => {
      this.contacts = res;
      console.log(this.contacts);
    }, error => {
      console.log(error);
    });
  }

  deleteInfo() {
    this.contactService.delete(this.id).subscribe(res => {
      this.getContacts();
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

}

class Contact {
  name: string;
  email: string;
  content: string;
}
class ErrorMsg {
  content: string;
}
