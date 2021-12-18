
import { Component, OnInit } from '@angular/core';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { AuthService } from '../auth/auth.service';

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

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  modulo: string;
  level: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAdmin:any = null;

  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      modulo: node.modulo,
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

  constructor(private auth: AuthService) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  //NavBarEstado
  opened =true;


  //Exit
  onLogout():void{

  }

}
