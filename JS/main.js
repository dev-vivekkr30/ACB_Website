$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

// File Upload Name Show

function showFileName(inputId) {
    const fileInput = document.getElementById(inputId);
    const fileName = document.getElementById('fileName' + inputId.slice(-1));
    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
    } else {
        fileName.textContent = 'NA';
    }
}

// Add File Input 
function addFileInput() {
    const container = document.getElementById('fileUploadContainer');
    const inputCount = container.querySelectorAll('.file-upload').length + 1;
    const newFileInput = document.createElement('div');
    newFileInput.classList.add('file-upload');

    const uploadBtn = document.createElement('div');
    uploadBtn.classList.add('file-upload-btn');

    const input = document.createElement('input');
    input.type = 'file';
    input.id = 'fileInput' + inputCount;
    input.classList.add('file-input');
    input.setAttribute('onchange', 'showFileName("fileInput' + inputCount + '")');

    const label = document.createElement('label');
    label.setAttribute('for', 'fileInput' + inputCount);
    label.innerHTML = 'Upload File <span><img src="images/Upload.svg" alt=""></span>';
    label.classList.add('me-2');

    const fileName = document.createElement('span');
    fileName.id = 'fileName' + inputCount;
    fileName.classList.add('file-name');

    uploadBtn.appendChild(input);
    uploadBtn.appendChild(label);
    newFileInput.appendChild(uploadBtn);
    newFileInput.appendChild(fileName);
    container.appendChild(newFileInput);

}

// Define a function to start the counter
document.addEventListener("DOMContentLoaded", function() {
    // Select the target element
    var statsSection = document.querySelector('.stats-section');

    // Create a new Intersection Observer
    var observer = new IntersectionObserver(function(entries) {
        // Check if the target element is intersecting with the viewport
        if (entries[0].isIntersecting) {
            // If intersecting, start counting for each card
            var countingElements = document.querySelectorAll('.counting');
            countingElements.forEach(function(element) {
                var target = parseInt(element.getAttribute('data-count'));
                var current = 0;

                var timer = setInterval(function() {
                    element.textContent = current;

                    current++;

                    if (current > target) {
                        clearInterval(timer);
                        element.textContent = target;
                    }
                }, 50);
            });

            // Unobserve the target element to prevent unnecessary counting
            observer.unobserve(statsSection);
        }
    });

    // Start observing the target element
    observer.observe(statsSection);
});

