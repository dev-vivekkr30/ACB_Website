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

    // const newFileInput = document.createElement('div');
    // newFileInput.classList.add('file-upload');

    // const input = document.createElement('input');
    // input.type = 'file';
    // input.id = 'fileInput' + inputCount;
    // input.classList.add('file-input');
    // input.setAttribute('onchange', 'showFileName("fileInput' + inputCount + '")');

    // const label = document.createElement('label');
    // label.setAttribute('for', 'fileInput' + inputCount);
    // label.innerHTML = 'Upload File <span><img src="images/Upload.svg" alt=""></span>';
    // label.classList.add('me-2');

    // const fileName = document.createElement('span');
    // fileName.id = 'fileName' + inputCount;
    // fileName.classList.add('file-name');

    // newFileInput.appendChild(input);
    // newFileInput.appendChild(label);
    // newFileInput.appendChild(fileName);
    // container.appendChild(newFileInput);

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


// number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });

