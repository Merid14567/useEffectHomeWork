import {useEffect, useState} from 'react'
import {data} from './data.js'

export default function Etudiant() {
    const [groupes, setGroupes] = useState([])
    const [selectedGr, setSelectedGr] = useState('')
    const [etudiants, setEtudiants] = useState([])

    useEffect(() => {
        setGroupes(Object.keys(data))
    }, [])

    useEffect(() => {
        if(!selectedGr) return;
        setEtudiants(data[selectedGr])
    },[selectedGr])
    return(
        <>
            <select value={selectedGr} onChange={(e) => setSelectedGr(e.target.value)}>
                <option value="" hidden disabled>Select a group</option>
                {groupes.map((item, i) => {
                    return <option key={i} value={item}>{item}</option>
                })}
            </select>
            {etudiants.length > 0  && etudiants.map((item, i) => {
                return (<div key={i}>
                            <h2>{item.id}</h2>
                            <h2>{item.nom}</h2>
                            <h2>{item.note}</h2>
                        </div>);
            })}
        </>
        );
}