export default function Home() {

  const fullTime = new Intl.DateTimeFormat('pt-BR', {timeStyle: 'short', hour12: false}).format();

  const hour = new Date().getHours();
  let greeting = '';

  if (hour >= 0 && hour < 12) {
    greeting = 'Bom dia';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Boa tarde';
  } else if (hour >= 18 && hour <= 23) {
    greeting = 'Boa noite';
  }


  // Se for preferivel, podemos fazer a condicional diretamente no body
  // ficaria:{hour >= 0 && hour < 12 && "Bom dia"}
  // Devendo ser aplicado para cada condição.



  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
     <div className="text-9xl">{fullTime}</div>
     <div className="text-5xl">{greeting}</div>
    </div>
  )
}
