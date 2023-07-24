import styles from '@/app/styles/common.module.css';
import Image from 'next/image';

const page = async ({ params }) => {

    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5dc1523a9fmshd73e480ba7ca792p190363jsn3cdfdd323870',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const result = await res.json();
    const main_data = result[0].details

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.movie_title}>
                    Netflix \ <span>{main_data.title}</span>
                </h2>
                <div className={styles.card_section}>
                    <div >
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                    </div>
                    <div>
                        <h2>{main_data.title}</h2>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page