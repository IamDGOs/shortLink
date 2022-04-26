import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../componets/menu';
import LinkItem from '../../componets/linkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

export default function Home(){
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function handleShortLink(){

        // para usar o 'await' (fazer funcao esperar resposta), temos que transformar a funcao em 'async' (assincrona)

        try{
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data);
            setShowModal(true);

            saveLink('@shortLink', response.data);

            setLink('');

        }catch{
            alert("Ops... Parece que algo deu errado!");
            setLink('');
        }
    }

    return(
        <div className="container-home">
            <div className="logo">
                <img src="./logo.png" alt="Rodrigo Link logotipo"/>
                <h1>RodrigoLink</h1>
                <span>Cole seu link que deseja encurtar</span>
            </div>
            <div className="area-input">
                <div>
                    <FiLink size={24} color="#fff" />
                    <input placeholder='Cole seu link aqui...' value={link} onChange={ (e) => setLink(e.target.value) } />
                </div>
                <button onClick={handleShortLink}>Encurtar Link</button>
            </div>
            <Menu/>
            { showModal && (
                <LinkItem closeModal={ () => setShowModal(false)} content={data} />
            ) }
        </div>
    )
}