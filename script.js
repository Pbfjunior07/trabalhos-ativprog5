document.addEventListener('DOMContentLoaded', () =>{
    const avatarImg = document.querySelector('main img[alt="Foto do Autor"]');
    const primeiraImagem = 'images/avatar.jpg';
    const segundaImagem = 'images/foto.jpg';

        if (avatarImg) {
        let isFirstImage = true;

        avatarImg.style.cursor = 'pointer'; 
        avatarImg.addEventListener('click', () => {
            if (isFirstImage) {
                avatarImg.src = segundaImagem;
            } else {
                avatarImg.src = primeiraImagem;
            }
            isFirstImage = !isFirstImage;
        });
    }

     const toggleHeaders = document.querySelectorAll('h2.toggle-content');

    toggleHeaders.forEach(header => {
        const contentWrapper = header.nextElementSibling;

        if (contentWrapper && contentWrapper.classList.contains('content-wrapper')) {
            header.style.cursor = 'pointer'; // Indica que o subtítulo é clicável

                     // Evento para DUPLO CLIQUE: Mostra o conteúdo
            header.addEventListener('dblclick', () => {
                contentWrapper.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar
                header.classList.remove('collapsed');     // Remove o estilo de 'colapsado'
            });

            // Evento para CLIQUE SIMPLES: Esconde o conteúdo
            header.addEventListener('click', () => {
                // Adicionamos um pequeno atraso para diferenciar do dblclick.
                // Se o dblclick ocorrer, o click simples é cancelado pelo clearTimeout.
                // Isso evita que um clique simples seja disparado logo antes do duplo clique.
                
                    // Verifica se o conteúdo não está já oculto e se não houve um duplo clique recente
                    if (!contentWrapper.classList.contains('hidden')) {
                        contentWrapper.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder
                        header.classList.add('collapsed');       // Adiciona o estilo de 'colapsado'
                    }
            });
        }
    });
});