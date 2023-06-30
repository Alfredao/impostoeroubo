async function getData() {
    const res = await fetch('https://acsp.com.br/impostometro/contador.php')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {

    const { Valor } = await getData();

    const formattedValor = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(Valor);

    return (
        <main className="flex min-h-screen flex-col items-center pt-36">
            <code className={"pb-20"}>IMPOSTO É ROUBO</code>
            <code>{formattedValor}</code>
        </main>
    );
}
