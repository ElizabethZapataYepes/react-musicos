export function Carousel(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/bts3.jpg?alt=media&token=37c28faf-716a-47d4-a807-06f414b9e86f" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/bts1.jpg?alt=media&token=7a3ce4d6-b185-4d50-a6b2-96bb4d43a5e8" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/proyectoma-5e2f6.appspot.com/o/bts2.jpg?alt=media&token=cfbe31dd-466c-4ab8-bc98-8d4f322e4643" class="d-block w-100" className="w-100" height="800" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </>
    )
}