import Moviecard from "../components/Moviecard";
import styles from '@/app/styles/common.module.css';


const Movie = async () => {


    await new Promise(resolve => setTimeout(resolve, 2000))

    const url = process.env.NEXT_PUBLIC_RAPID_URL;
    console.log("url", url)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5dc1523a9fmshd73e480ba7ca792p190363jsn3cdfdd323870',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options)
    const { titles } = await res.json()
    // console.log("data", titles)

    return (
        <>
            <section className={`${styles.movieSection}`}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {titles.map((curElem) => {
                            return <Moviecard key={curElem.id} {...curElem} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie