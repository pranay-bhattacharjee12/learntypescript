
interface chai{
    name: string;
    price: number;
}

export default function chai({ name, price}){
    return(
        <article>
            <h2>
                {name}
            </h2>
            <p>{price}</p>
        </article>
    )
}