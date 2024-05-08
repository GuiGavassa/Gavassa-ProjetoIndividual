document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    function highlightNavItem() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const top = section.offsetTop - 50; // Ajuste para compensar a altura da barra de navegação
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
                const id = section.getAttribute('id');
                const navItem = document.querySelector(`nav a[href="#${id}"]`);
                document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
                navItem.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavItem);
    highlightNavItem(); // Chama a função inicialmente para destacar o botão correto ao carregar a página
});