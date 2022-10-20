export function Musicos(){

    //UN ARREGLO DE OBJETOS ES FORMATO COMUN AL CONSUMIR UN API
    let musicos=[
        {
            nombre:"Jeon Jung-kook",
            rol:"Vocalista principal",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/jungkook2.jpg?alt=media&token=e23ab270-3ccb-4f0a-8769-74afc40f5dbc",
        },
        {
            nombre:"Kim Namjoon",
            rol:"Rapero y Lider",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Namjoon2.jpg?alt=media&token=e4696706-64db-4357-b7ab-c7d8b6181da8",
        },
        {
            nombre:"Min Yoon-gi, Suga",
            rol:"Rapero Principal",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Suga2.jpg?alt=media&token=2062a4ae-f467-4a84-82b1-1828bbeba55b",
        },
        {
            nombre:"Jung Ho-seok, J-hope",
            rol:"Rapero",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/J-hope%202.jpg?alt=media&token=8c4f7f48-5eb9-4cf2-9a1d-3e40ec8d25d0",
        },
        {
            nombre:"Park Ji-min",
            rol:"Voz Principal",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Jimin2.webp?alt=media&token=3ac62064-7a07-4d20-8f98-934b3fb3bc18",
        },
        {
            nombre:"Kim Tae Hyung, V",
            rol:"Voz",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/v2.jpg?alt=media&token=2aad4152-3781-4b6a-8d0c-5d0dcdd3e259",
        },
        {
            nombre:"Kim Seok-jin",
            rol:"Voz",
            url:"https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Jin2.gif?alt=media&token=71fb819f-a5bc-4aa5-9d07-190ba7225991",
        },
    ]

    let conciertosMemorables=[
        {
            fecha:"",
            país:"",
            descripción:"",
            foto:"",
        },
        {
            fecha:"",
            país:"",
            descripción:"",
            foto:"",
        },
        {
            fecha:"",
            país:"",
            descripción:"",
            foto:"",
        },
        {
            fecha:"",
            país:"",
            descripción:"",
            foto:"",
        },
        {
            fecha:"",
            país:"",
            descripción:"",
            foto:"",
        }
    ]

    //MAPEANDO UN ARREGLO PARA HACER RENDER
    return(
        <div className="row row-cols-1 row-cols-md-4 g-3">
            {
            musicos.map(function(musico){
                    return(
                        <>
                        <div className="col">
                            <div className="card h-100 mt-3">
                            <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"/>
                            <h1 className="text-center">{musico.nombre}</h1>
                            <h2 className="text-center">{musico.rol}</h2>
                            </div>

                        </div>
                        </>
                    )
                })
            }
            {
            conciertosMemorables.map(function(conciertoMemorable){
                    return(
                        <>
                        <div className="col">
                            <div className="card h-100 mt-3">
                            <img src={conciertoMemorable.foto} className="img-fluid w-100 h-100" alt="foto"/>
                            <h3 className="text-center">{conciertoMemorable.fecha}</h3>
                            <h2 className="text-center">{conciertoMemorable.país}</h2>
                            <h3 className="text-center">{conciertoMemorable.descripción}</h3>
                            </div>

                        </div>
                        </>
                    )
                })
            }
        </div>
    )

}