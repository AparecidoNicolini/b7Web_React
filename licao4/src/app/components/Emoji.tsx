type Props = {
 rate:number;
}

export default function Emoji({rate}:Props) {

    const maxRating = 5;
    if (rate > maxRating) rate = maxRating;
    if (rate < 0) rate = 0;

    let rateInt = Math.floor(rate);

    let resultado = '';

    let emoji1 = ' 😭';
    let emoji2 = ' 😨';
    let emoji3 = ' 😶';
    let emoji4 = ' 🥰';
    let emoji5 = ' 🥹';

    if(rateInt == 1) {
        resultado =  'Precisamos melhorar' + emoji1;
    } else if (rateInt == 2) {
        resultado = 'Estamos quase... Força...' +emoji2.repeat(rateInt);
    } else if (rateInt == 3) {
        resultado = 'Só mais um pouquinho...' +emoji3.repeat(rateInt);
    }else if (rateInt == 4) {
        resultado = 'Você consegue... Vamos...  ' +emoji4.repeat(rateInt);
    }else if (rateInt == 5) {
        resultado = 'Você conseguiu... Eu sábia que você conseguiria ' +emoji5.repeat(rateInt);
    }

    return(
        <div className="text-6xl">{resultado}</div>
    )
}
