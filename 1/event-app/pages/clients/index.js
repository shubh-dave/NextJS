import Link from 'next/link'

export default function ClientPage() {

    const clients = [
        { id: "sd", name: "shubh" },
        { id: "kd", name: "KD" }
    ]



    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map((client) => (<li key={clients.id}><Link
                    href={{
                        pathname: '/clients/[id]',
                        query: { id: client.id },
                    }}>{client.name}</Link></li>))}
            </ul>
        </div>
    )
}