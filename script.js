const contentContainer = document.getElementById('content');
const navLinks = document.querySelectorAll('#navbar a');

const defaultContent = `
    <h1 class="content-title">Content</h1>
`;

function renderContent(type, src, label) {
    if (!src) {
        contentContainer.innerHTML = defaultContent;
        return;
    }

    if (type === 'link') {
        window.location.href = src;
        return;
    }
    
    if (type === 'img') {
        contentContainer.innerHTML = `
            <h1 class="content-title">${label}</h1>
            <img src="${src}" alt="${label}" class="content-media" />
        `;
        return;
    }

    if (type === 'pdf') {
        contentContainer.innerHTML = `
            <h1 class="content-title">${label}</h1>
            <embed src="${src}" type="application/pdf" width="100%" height="800px" />
        `;
        return;
    }

    contentContainer.innerHTML = defaultContent;
}

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const type = link.dataset.type;
        const src = link.dataset.src;
        const label = link.textContent.trim();

        renderContent(type, src, label);
    });
});
