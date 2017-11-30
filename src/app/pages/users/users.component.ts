import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, group, keyframes } from '@angular/animations';

import { UsersRepository } from '../../repository/users.repository';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  //Animacion,efecto transicion del listado de usuarios
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {
  private userList: Array<User> = new Array<User>();

  constructor(
    private userRep: UsersRepository
  ) { }

  ngOnInit() {
    this.getListUsers();
  }

  private getListUsers() {
    this.userRep.listUsers().subscribe(
      (response) => {
        this.userList = response;
      },
      (error) => {
        console.log("error getListUsers", error);
      }
    )
  }

  private logAnimate($event) {
    console.log("logAnimate")
  }

}
