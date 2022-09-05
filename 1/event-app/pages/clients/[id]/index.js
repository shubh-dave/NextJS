import { useRouter } from 'next/router'

function ClientsProjectPage() {

    const router = useRouter();

    function onProjectButonClick() {
        router.push('/clients/sd/projecta')
    }

    return (
        <div>
            <h1>Projects of a given Client</h1>
            <button onClick={onProjectButonClick}>Load Project A</button>
        </div>
    )
}

export default ClientsProjectPage;