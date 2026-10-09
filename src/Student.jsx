import {useState, useEffect} from 'react'

export default function Student() {

    const [nom, setNom] = useState('')

    useEffect(() => {
        setNom("Ilyass")
    }, [])

    useEffect(() => {
        console.log("le nom a changé")
    }, [nom])

    function changename() {
        setNom("Khalid")
    }
    return(
        <>
            <h2>Welcome {nom}</h2>
            <button onClick={changename}>Click me</button>
        </>
    )
}