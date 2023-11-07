export class InventarioModel{
		public id_empresa:number =   0   ; 
		public id_filial:number =   0   ; 
		public codigo:number =   0   ; 
		public descricao:string =   ""   ; 
		public id_responsavel:number =   0   ; 
		public data_inicial:Date =   new Date()  ; 
		public data_final:Date =   new Date()  ; 
		public data_encerra:Date =   new Date()  ; 
		public laudo:string =   ""   ; 
		public user_insert:number =   0   ; 
		public user_update:number =   0   ; 
}