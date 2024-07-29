document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#sidebar a');
    const frame = document.getElementById('graph-frame');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const graphName = this.getAttribute('data-graph');
            frame.src = `graphs/${graphName}.html`;
        });
    });
});