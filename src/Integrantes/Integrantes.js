import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import {useEffect} from 'react';

export function Integrantes (){

    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    
    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Jungkook.jpg?alt=media&token=54a65775-aed9-4a0c-a9cf-9fd8b67fd492" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h2>Jeon Jung-kook</h2>
                    <h3>Vocalista principal</h3>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                            Jeon Jung-kook (en hangul, 전정국; en hanja, 田柾國; Busan; 1 de septiembre de 1997), conocido como Jungkook, es un cantante y bailarín surcoreano. En 2013 debutó como integrante del grupo BTS bajo la compañía Big Hit Music.
                            Jungkook debutó como integrante de BTS el 12 de junio de 2013 y desde entonces,[9]​ en su carrera como parte del grupo, ha interpretado tres canciones en solitario: «Begin», «Euphoria» y «My Time». «Begin» formó parte del segundo álbum de estudio de BTS Wings (2016); es una canción pop en la que Jungkook abordó su historia al mudarse a Seúl para convertirse en idol y expresó su gratitud hacia sus compañeros de grupo por cuidar de él durante ese tiempo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInRight wow'>
                    <h2>Kim Namjoon</h2>
                    <h3>Rapero y Lider</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Namjoon.webp?alt=media&token=cc93a68f-afec-4a86-a3b9-053e6cb00abe" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                Kim Nam-joon (en hangul, 김남준; en hanja, 金南俊; Dongjak-gu, Seúl; 12 de septiembre de 1994), más conocido por su nombre artístico RM, es un rapero, compositor y productor surcoreano. Es el líder del grupo BTS. En 2015, lanzó su primer mixtape RM
                                RM tiene muchos logros académicos notables. Alcanzó un 850 en el TOEIC cuando estaba en secundaria, probablemente debido por haber estudiado en Nueva Zelanda. También estuvo en el top 1.3% de la nación en los exámenes de entrada a la universidad en lengua, matemática, idiomas extranjeros y ciencias sociales; además, tiene un CI de 148
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Suga.webp?alt=media&token=d3d5ce8c-4883-4e60-98ca-781a723f0239" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h2>Min Yoon-gi, Suga</h2>
                    <h3>Rapero Principal</h3>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                            Min Yoon-gi (en hangul, 민윤기; Daegu, 9 de marzo de 1993), más conocido por sus nombres artísticos Suga y Agust D, es un rapero, compositor, productor, modelo y bailarín surcoreano
                            En 2010, formaba parte de un grupo underground de rap en su ciudad natal llamado D-Town. Comenzó su notoriedad con el grupo BTS en 2013, bajo la compañía Big Hit Music
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInRight wow'>
                    <h2>Jung Ho-seok, J-hope</h2>
                    <h3>Rapero</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/J-hope.jpg?alt=media&token=faaebdbb-f4a4-44ae-b143-334ec715cc42" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                Jung Ho-seok (en hangul, 정호석; en hanja, 鄭號錫; Gwangju, 18 de febrero de 1994), conocido por su nombre artístico J-Hope es un rapero, compositor, cantante, bailarín y productor surcoreano. En 2013 debutó como miembro del grupo BTS bajo la compañía Big Hit Music
                                J-Hope lanzó su primer mixtape, Hope World, el 2 de marzo de 2018. El 27 de septiembre de 2019 publicó la canción «Chicken Noodle Soup», que contó con la participación de la cantante estadounidense Becky G. El tema ocupó el puesto 81 en la Billboard Hot 100, lo que lo convirtió en el primer integrante de BTS en entrar en la lista como solista
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Jimin.webp?alt=media&token=7c5f8a5f-c8dc-4fb9-b3ad-cd304fcff093" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h2>Park Ji-min</h2>
                    <h3>Voz Principal</h3>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                            Park Ji-min (en hangul, 박지민; en hanja, 朴智旻; Busan, 13 de octubre de 1995), más conocido como Jimin (en hangul, 지민), es un cantante, compositor, bailarín y modelo surcoreano. En 2013 debutó como integrante del grupo BTS bajo la compañía Big Hit Music.
                            Jimin debutó como integrante de BTS el 13 de junio de 2013 y desde entonces, en su carrera como parte del grupo, ha interpretado tres canciones en solitario: «Lie», «Serendipity» y «Filter». «Lie» formó parte del segundo álbum de estudio de BTS Wings (2016); según Cho Jin-young de IZM, el tema es «dramático, impresionante» y transmite «emociones y tonos profundos que ayudan a reflejar el concepto general del disco
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInRight wow'>
                    <h2>Kim Tae Hyung, V</h2>
                    <h3>Voz</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/V.webp?alt=media&token=96be88d4-c1a6-423a-85ab-58eeb35d0248" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                Kim Tae-hyung (en hangul, 김태형; en hanja, 金泰亨; Seo-gu, 30 de diciembre de 1995), más conocido por su nombre artístico V, es un cantante, compositor y actor surcoreano. Es miembro del grupo BTS bajo la compañía Big Hit Music.
                                V debutó como integrante de BTS el 13 de junio de 2013 y desde entonces, en su carrera como parte del grupo, ha interpretado tres canciones en solitario: «Stigma», «Singularity» y «Inner Child». «Stigma» formó parte del segundo álbum de estudio de BTS Wings (2016) y «Singularity» se lanzó como el tema introductorio de Love Yourself: Tear (2018). Un mes después de su publicación, The Guardian lo añadió a su lista de reproducción «Top 50 de canciones para el mes de junio de 2018
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/Jin.jpg?alt=media&token=39ed5fa4-6aca-48fd-ba49-2548a1cad325" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInLeft wow'>
                    <h2>Kim Seok-jin</h2>
                    <h3>Voz</h3>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                            Kim Seok-jin (en hangul, 김석진; Anyang-Gwangcheon, 4 de diciembre de 1992), conocido por su nombre artístico Jin, es un cantante, actor, modelo, presentador, compositor y bailarín surcoreano.
                            Pertenece al grupo BTS, donde ocupa el puesto de vocalista, bailarín y visual desde 2013.​ Kim ha coescrito y lanzado tres canciones en solitario con BTS: «Awake» (2016), «Epiphany» (2018) y «Moon» (2020); todas han entrado en la lista digital Gaon de Corea del Sur. También apareció en la banda sonora del drama Hwarang (2016) junto a su compañero de grupo V. Por otro lado, Kim ha recibido elogios de los críticos por su falsete y su rango emocional como cantante.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    

    
}