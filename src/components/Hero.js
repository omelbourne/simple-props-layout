import heroImg from "../images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src = {heroImg} className="hero--photo" />
            <h1 className="hero--header">Bristol Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—even without leaving home.</p>
        </section>
    )
}