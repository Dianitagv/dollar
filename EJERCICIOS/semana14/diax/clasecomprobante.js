class Comprobante{
    Comprobante_id=0;
    Comprobante_fecha= new Date();
    Comprobante_total=0;
    comprobante_detalle=[];

    constructor(comp_id,comp_fecha){
        this.Comprobante_id=comp_id;
        this.Comprobante_fecha=comp_fecha;
    }
    añadirDetalles(objProducto){
        //objDetalle es un objeto porque puede contener varios campos id
        this.comprobante_detalle.push(objDetalle)
    }
    mostarfechaComprobante(){
        console.log(this.Comprobante_fecha);
        
    }
    calcularSubTotal(cantidad,prec_unit){
        return cantidad*prec_unit
    }
}