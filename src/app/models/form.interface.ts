export interface AllForms{
  id: number;
  estado: number;
  estado2:number;
  fecha_creacion: string;
  fecha_actualizacion: string;
  formulario5A: formulario5A;
  formulario5B: formulario5B;
}

export interface formulario5A{
  id: number;
  nombre_idea: string;
  funcional_division: string;
  funcional_funcion: string;
  funcional_sector: string;
  funcional_grupo: string;
  tipologia_proyecto: string;
  uf_sector: string;
  uf_entidad: string;
  uf_nombre: string;
  uf_responsable: string;
  ufi_sector: string;
  ufi_entidad: string;
  ufi_nombre: string;
  ufi_responsable: string;
  ufp_sector: string;
  ufp_entidad: string;
  ufp_nombre: string;
  naturaleza_intervencion: string;
  localizacion_geografica: string;
  costo_aproximado_estudio_preinversion:number;
  ejecucion_tentativa: number;
  fuente_financiamiento: number;
  listaResponsabilidadFuncionalDescripcionAgregada:listaResponsabilidadFuncionalDescripcionAgregada;
  listaAdjunto: listaAdjunto;
  listaALineamientoBrechaServiciosPublicosBrechaIdentificada: listaALineamientoBrechaServiciosPublicosBrechaIdentificada;
}

export interface listaResponsabilidadFuncionalDescripcionAgregada{
  id: number;
  proyectoDeInversion: string;
  programaDeInversion: string;
}

export interface listaAdjunto{
  id: number;
  tipo: string;
  nombre: string;
  direccion: string;
  fecha_creacion: string;
  fecha_actualizacion:string
}

export interface listaALineamientoBrechaServiciosPublicosBrechaIdentificada{
  id: number;
  nombre: string;
  contribucion_valor: string;
  listaIndicarBrecha: listaIndicarBrecha;
}

export interface listaIndicarBrecha{
  id: number;
  nombre_indi: string;
  unidad_medida:number;
  espacio_geografico:string;
  anno: string;
  valor: string;
}

export interface formulario5B{
  id: number;
  nombre_idea: string;
  funcional_division: string;
  funcional_funcion: string;
  funcional_sector: string;
  funcional_grupo: string;
  uf_sector: string;
  uf_entidad:string;
  uf_nombre: string;
  uf_responsable: string;
  ufi_sector: string;
  ufi_entidad: string;
  ufi_nombre: string;
  ufi_responsable:string;
  ufp_sector: string;
  ufp_entidad: string;
  ufp_nombre: string;
  naturaleza_intervencion: string;
  localizacion_geografica: string;
  modalidad_ejecucion:number;
  fuente_financiamiento: number;
  listaAlineamientoBrechaServiciosPublicosBrechaIdentificada:listaAlineamientoBrechaServiciosPublicosBrechaIdentificada;
  listaResponsabilidadFuncionalDescripcionIOARR:listaResponsabilidadFuncionalDescripcionIOARR;
  listaAdjunto:listaAdjunto;
}

export interface listaAlineamientoBrechaServiciosPublicosBrechaIdentificada{
  id: number;
  nombre: string;
  contribucion_valor: number;
  listaIndicarBrecha: listaIndicarBrecha;
}

export interface listaResponsabilidadFuncionalDescripcionIOARR{
  id: number;
  tipo: string;
  costo:number;
}
