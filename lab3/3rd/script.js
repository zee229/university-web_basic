document.addEventListener('DOMContentLoaded', () => {
    const rectangle = document.getElementById('rectangle');
    let isMoving = true;

    function getRandomPosition(element) {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        const maxX = containerRect.width - elementRect.width;
        const maxY = containerRect.height - elementRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        return { x: randomX, y: randomY };
    }

    function moveRectangle() {
        if (isMoving) {
            const newPos = getRandomPosition(rectangle);
            rectangle.style.transform = `translate(${newPos.x}px, ${newPos.y}px)`;
        }
    }

    rectangle.addEventListener('mouseover', () => {
        isMoving = false;
    });

    rectangle.addEventListener('mouseout', () => {
        isMoving = true;
    });

    setInterval(moveRectangle, 1000);
});
