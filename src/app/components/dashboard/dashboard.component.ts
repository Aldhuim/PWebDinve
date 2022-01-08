import { Component, OnDestroy, OnInit } from '@angular/core';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import data from 'src/assets/data/menu.json';
import dataadmin from 'src/assets/data/menu_admin.json';
import { MenuNode } from 'src/app/models/menu.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertSnackBarComponent } from './Modals/alert-snack-bar/alert-snack-bar.component';


const TREE_DATA: MenuNode[] = data;

const TREE_DATA_ADMIN: MenuNode[] = dataadmin;

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  permissions: string;
  modulo: string;
  level: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit , OnDestroy{

  isRol:any = null;
  isLogged = false;
  isUsername = null;
  isIdUser = null;

  private subscription : Subscription = new Subscription();

  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      modulo: node.modulo,
      permissions: node.permissions,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private auth: AuthService,private sb: MatSnackBar) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  opened =true;

  ngOnInit(): void {
    this.subscription.add(
      this.auth.isLogged.subscribe((res)=>(this.isLogged = res)));
      this.auth.Roles.subscribe((res)=>(this.isRol = res));

        if(this.isRol == 1 || this.isRol == 2){
          this.dataSource.data = TREE_DATA_ADMIN;
        }
        else{
          this.dataSource.data = TREE_DATA;
        }
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  onLogout(){
      this.auth.logout();
  }

  Rol(){
    const res = localStorage.getItem('Token');

  }

  openSnackBar() {
    this.sb.openFromComponent(AlertSnackBarComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 10000,
    });
  }

}
