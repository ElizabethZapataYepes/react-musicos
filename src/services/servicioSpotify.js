import { servicioTOKEN } from "./servicioTOKEN.js"

export async function servicioSpotify(){
    const URI="https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX/top-tracks?market=US"

    const TOKEN= await servicioTOKEN()

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    

    return datos
}