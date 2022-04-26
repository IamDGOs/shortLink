// buscar links salvos

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


// salvar um link no localstorage

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    // se já tiver um link salvo com algum ID eu nao vou deixar duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id );

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE NA SUA LISTA!')
        return;
    }

    // Adicionar novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('LINK SALVO COM SUCESSO!');
}

// deletar links
export function deleteLink(links, id){

    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@shortLink', JSON.stringify(myLinks));

    return myLinks;
}