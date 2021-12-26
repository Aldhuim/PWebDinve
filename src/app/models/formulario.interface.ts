

export interface Formulario{

  id_form : number;
  estado : number;
  estado2: number;

  fecha_actualizacion: string;
  fecha_creacion:string;
  id_usuario:string;

  id_form5b : number;
  nombre_idea: string;

  funcional_division: string;
  funcional_funcion:string;
  funcional_sector: string;
  funcional_grupo:string;

  uf_sector:string;
  uf_entidad:string;
  uf_nombre:string;
  uf_responsable:string;

  ufi_sector:string;
  ufi_entidad:string;
  ufi_nombre:string;
  ufi_responsable:string;

  ufp_sector: string;
  ufp_entidad:string;
  ufp_nombre:string;

  naturaleza_intervencion:string;
  localizacion_geografica:string;

  modalidad_ejecucion:number;
  fuente_financiamiento:number;



  id_resp: object;
  tipo_resp: object;
  costo_resp:object;

  id_ali: object;
  nombre_ali: object;
  contribucion_valor: object;
  id_indi: object;
  nombre_indi: object;
  unidad_medida: object;
  espacio_geografico: object;
  anno: object;
  valor: object;

  id_adjunto: object;
  tipo_adjunto: object;
  nombre:object;
  direccion: object;


}
