import './Home.css'

import {SubMenu} from '../SubMenu/SubMenu.js'
import { Footer } from '../Footer/Footer.js'

export function Home (){

    let descripcionBanda="BTS (en hangul, 방탄소년단; romanización revisada del coreano, Bangtan Sonyeondan) es un grupo surcoreano formado en Seúl en 2010, que debutó el 13 de junio de 2013 bajo la compañía Big Hit Entertainment.2​Está compuesto por siete integrantes: Jin, Suga, J-Hope, RM, Jimin, V y Jungkook, quienes son los que coescriben y coproducen la mayor parte de su material discográfico. A pesar de haber sido creado con un estilo principalmente hip hop, ha llegado a incorporar una gran variedad de géneros en su repertorio musical.Tras su debut con el álbum sencillo 2 Cool 4 Skool en 2013, BTS publicó los EPs O!RUL8,2? (2013) y Skool Luv Affair (2014), así como su primer álbum de estudio, Dark & Wild (2014). A partir de 2015 comenzó a establecer su reputación como un grupo socialmente consciente con sus lanzamientos de la serie The Most Beautiful Moment in Life: Part 1 (2015), Part 2 (2016) y Young Forever (2016)."
    
    return(
        <>

            <div className="banner">

            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">BTS</h1>
                        <p className="text-center">{descripcionBanda}</p>
                    </div>
                </div>
            </div>
            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
    

    
}