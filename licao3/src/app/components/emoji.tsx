type Props = {
    rate:number;
}


export const Emoji = ({rate}:Props) => {
    const maxRating = 5;
    if (rate > maxRating) rate = maxRating;
    if (rate < 0) rate = 0;
  

    let rateInt = Math.floor(rate);

    const feliz = '😁' ;
    const neutro = '😶';

    const resultado = feliz.repeat(rateInt) + neutro.repeat(maxRating-rateInt);
    return (
        <div className="text-6xl">{rate.toFixed(1)} {resultado}</div>
    )
}