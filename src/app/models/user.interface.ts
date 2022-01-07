
export interface User{
  user: string;
  password: string
}

export interface UnidadProductora{
  id: number;
  nombre: string;
  departamento: string;
  provincia: string;
  distrito: string;
}

export interface UserRespose{
  usuario: Usuario;
  token: string;
  msg: string;
}

export interface TokenResponse{
  token: string;
  msg: string;
}

export interface Usuario{
  id: number;
  user: string;
  password: string;
  rol: number;
  activo: string;
  dni: string;
  nombre: string;
  apellido: string;
  cargo: string;
  unidad_productora: UnidadProductora[];
  fecha_creacion: string;
  fecha_actualizacion: string;
}

export interface UsuarioGeneral{
  id: number;
  user: string;
  password: string;
  rol: number;
  activo: string;
  dni: string;
  nombre: string;
  apellido: string;
  cargo: string;
  unidad_productora: number;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

export interface CrearUser{
  id_usuario:number;
  id_unidad:number;
  nombre_up:string;
  user:string;
  password:string;
  dni:string;
  nombre:string;
  apellido:string;
  cargo:string;
  rol:string
}
