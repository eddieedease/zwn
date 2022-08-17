import { Component, OnInit } from '@angular/core';

import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

@Component({
  selector: 'app-underconstruction',
  templateUrl: './underconstruction.component.html',
  styleUrls: ['./underconstruction.component.css']
})
export class UnderconstructionComponent implements OnInit {

  router;
  showInlogField = false;
  pwdField = '';
  wrongPwd = false;

  constructor(private thisrouter: Router,) {
    this.router = thisrouter;
  }

  ngOnInit(): void {
  }


  showInlog(){
    this.showInlogField = !this.showInlogField;
  }

  checkPwd(){
    if (this.pwdField === 'goudvis'){
      this.wrongPwd = false;
      this.router.navigate(['site']);
    } else {
      this.wrongPwd = true;
    }
  }
}
