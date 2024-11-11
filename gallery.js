document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { filename: 'flowers-pink-small', title: 'Sunflowers in Dernekamp' },
        { filename: 'flowers-yellow-small', title: 'Poppies in Cornfield' },
        { filename: 'flowers-purple-small', title: 'Daffodils in Sentmaring Park' },
        { filename: 'flowers-white-large', title: 'Sentmaring Park' },
        { filename: 'flowers-red-small', title: 'Market in Münster' }
    ];

    const featuredImage = document.getElementById('featured-image');
    const imageCaption = document.getElementById('image-caption');
    const thumbnailList = document.getElementById('thumbnail-list');

    // Loop through each image and add it to the thumbnail list
    images.forEach((image, index) => {
        const li = document.createElement('li');
        const thumbnail = document.createElement('img');
        thumbnail.src = `images/${flower-red}-small.jpg`;
        thumbnail.alt = image.title;
        thumbnail.width = 240;
        thumbnail.height = 160;
        
        // Add click event to each thumbnail
        thumbnail.addEventListener('click', () => {
            featuredImage.src = `images/${flower-white}-large.jpg`;
            imageCaption.textContent = image.title;

            // Apply grayscale effect to non-selected thumbnails
            document.querySelectorAll('#thumbnail-list img').forEach(img => {
                img.style.filter = 'grayscale(100%)';
            });
            thumbnail.style.filter = 'none';
        });

        li.appendChild(thumbnail);
        thumbnailList.appendChild(li);
    });
});
