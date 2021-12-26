
import { Component, OnInit } from '@angular/core';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { AuthService } from '../auth/auth.service';
<<<<<<< Updated upstream

interface MenuNode {
  modulo: string;
  name: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    modulo: 'modulofip',
    name: 'crear fip',
    children: [
     {name: 'proyecto de inversión',
     modulo: 'moduloPI',
     children: [{modulo: 'FA',name: 'Formato N° 05-A'}],
     },
     {name: 'IOARR',
     modulo: 'moduloIOAAR',
     children: [{modulo: 'FB',name: 'Formato N° 05-B'}],
     }
    ],
  },
  {
    modulo: 'modulousuario',
    name: 'mantenimiento usuarios',
    children: [
      {
        modulo: 'VerU',
        name: 'Ver Usuarios',
      },
      {
        modulo: 'CrearU',
        name: 'Crear Usuarios',
      },
      {
        modulo: 'ModU',
        name: 'Modificar Usuarios',
      },
      {
        modulo: 'EliU',
        name: 'Eliminar Usuarios',
      }
    ],
  },
  {
    modulo: 'moduloinscripciones',
    name: 'inscripciones',
    children: [
      {
        modulo: 'VerIns',
        name: 'Ver Inscripciones',
      },
      {
        modulo: 'InsEnv',
        name: 'Inscripciones Enviadas',
      }
    ],
  },
  {
    modulo: 'moduloconfig',
    name: 'Configuraciones',
    children: [
      {
        modulo: 'CamPass',
        name: 'Datos'
      }
    ]
  }
];
=======
import data from 'src/assets/data/menu.json';
import dataadmin from 'src/assets/data/menu_admin.json';
import { MenuNode } from 'src/app/models/menu.interface';



const TREE_DATA: MenuNode[] = data;

const TREE_DATA_ADMIN: MenuNode[] = dataadmin;
>>>>>>> Stashed changes

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
<<<<<<< Updated upstream
=======
  permissions: string;
>>>>>>> Stashed changes
  modulo: string;
  level: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
  isAdmin:any = null;

  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      modulo: node.modulo,
<<<<<<< Updated upstream
=======
      permissions: node.permissions,
>>>>>>> Stashed changes
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private auth: AuthService) {
<<<<<<< Updated upstream
    this.dataSource.data = TREE_DATA;
=======

    this.Role();

    console.log("Rol: ",this.isAdmin)

    //if(this.isAdmin == 'admin'){
      this.dataSource.data = TREE_DATA_ADMIN;
    // }
    // else{
    //   this.dataSource.data = TREE_DATA;
    // }

>>>>>>> Stashed changes
  }

  ngOnInit(): void {

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  //NavBarEstado
  opened =true;


  //Exit
  onLogout():void{
<<<<<<< Updated upstream

=======
    this.auth.logout();
  }

  Role(): void {
    this.auth.isAdmin.subscribe(response => this.isAdmin = response);
>>>>>>> Stashed changes
  }

}
