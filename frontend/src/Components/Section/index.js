export function ImageIndex() {
    return (
        <img 
            class="rounded mx-auto d-block" 
            src={ require(`./images/image-index.jpg`).default }
            width="300px" 
            alt="Imagem principal"  
        />
    )
}