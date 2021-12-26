export type Roles = 'admin' | 'Usuario';

export interface User{
    username: string;
    password: string;
}

export interface UserResponse {
    message: string;
    token: string;
    userId: number;
    role: Roles;
<<<<<<< Updated upstream
}
=======
}

export interface Usuarios{
  id: number;
  user: string;
  password: string;
  rol : number;
  activo : string;
  dni: string;
  nombre: string;
  apellido: string;
  cargo: string;
  id_unidadproductora: number;
  fecha_creacion: string;
  fecha_actualizacion: string;
}
>>>>>>> Stashed changes
