window.onload = () => {
    var mapaGoogle;
    var miPosition;
    var divMapa = document.getElementById("mapa");
    var btnGetPosition = document.getElementById("btnGetPosition");
    var btnBorrarPosicion=document.getElementById("btnBorrarPosicion");
    var coorAnterior;
    
        let configurarMapa = () => {
        mapaGoogle = new google.maps.Map(divMapa, {
            center: { lat: -16, lng: -71 },
            zoom: 8
        });
        listenerMaps();
    }
    btnGetPosition.onclick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((posicion) => {
                let ubicacion = {
                    lat: posicion.coords.latitude,
                    lng: posicion.coords.longitude,
                }
                miPosition = new google.maps.Marker({
                    position: ubicacion,
                    title:"Aqui estamos",
                    map: mapaGoogle
                })
            }, (error) => {
                console.log(error);

            });
        } else {
            alert("no se permitio el acceso a la ubicación")
        };

    }
    btnBorrarPosicion.onclick=()=>{
        miPosition.setMap(null);
    }
    let listenerMaps =()=>{
        mapaGoogle.addListener('click',(coords)=>{
            console.log(coords);
        
            
            let LatLng = {
                lat: coords.latLng.lat(),
                lng:coords.latLng.lng()
            }
            var marcador = new google.maps.Marker(
                {
                    position:LatLng,
                    draggable:true

                }
            );
            marcador.addListener("drag",(coords)=>{
                let miLatLng={
                    latitud:coords.laLng.lat(),
                    longitud:coords.laLng.lng()
                }
                console.log(miLatLng);
                
            })
            marcador.addListener("dblclick",()=>{
                marcador.setMap(null);
            })
            marcador.setMap(mapaGoogle);
            if(coorAnterior){
                var coordenadaPolyline=[
                    coorAnterior,
                    {
                        lat:coords.latLng.lat(),
                        lng:coords.latLng.lng()
                    }
                ]

            }else{
                var coordenadaPolyline=[
                    {
                        lat:coords.latLng.lat(),
                        lng:coords.latLng.lng()
                    },
                    {
                        lat:coords.latLng.lat(),
                        lng:coords.latLng.lng()
                    }
                ]
            }
            let miPolyline=new google.maps.miPolyline({
                path: coordenadaPolyline,
                strokeColor: "#ff0000",
                strokeWeight:1

            });
            miPolyline.setMap(mapaGoogle);
            
            coorAnterior={
                lat:coords.latLng.lat(),
                lng:coords.latLng.lng()
            }
        });
    }
   
    configurarMapa();
}


