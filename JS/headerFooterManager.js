class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Top Bar with Search and Menu Option for Mobile Only Starts-->
        <div class="top-bar-mob d-flex justify-content-between align-items-center">
            <div class="top-bar-mob-left">
            <button type="button" class="search-btn" data-bs-toggle="modal" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="images/search-black.svg" alt="search-icon"></button>
            <select class="lang-select" name="lang" id="lang">
                <option value="English">English</option>
                <option value="marathi">मराठी</option>
                <option value="hindi">हिन्दी</option>
            </select>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                            <div class="modal-body">
                                <form class="d-flex">
                                    <input class="form-control rounded-pill me-2" type="search" placeholder="Search" aria-label="Search">
                                <!--<button class="secondary-btn" style="border-radius: 4px;height: 56px;" type="submit"><img src="images/search.svg" alt="search-icon"></button> -->
                                </form>
                        </div>
                    </div>
                </div>
            </div>




            <button class="navbar-toggler d-flex justify-content-between align-items-center fs-6 p-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">Menu<span><img class="ms-2 navbar-toggler-icon" style="width:16px" src="images/menu-bars.svg" alt="menu-bar"
                        srcset=""></span>
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="press_release.html">Press Release</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="statistics.html">Statistics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">DG′s Message</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="fir.html">FIRs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="legal.html">Legal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
    <!-- Top Bar with Search and Menu Option for Mobile Only Ends-->
    
    
        <div class="container-fluid p-0">
            <!-- Navigation Bar Started -->
            <div class="top-navbar">
                <!-- Top Bar Start -->
                <div class="top-bar">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-6 top-call-info d-flex justify-content-start align-items-center">
                            <!-- Tollfree -->
                            <div class="tollfree me-4 ms-4">
                                <img src="images/call.svg" class="pe-2" alt="call" srcset="">Toll Free Number: <a
                                    href="tel:1064">1064</a>
                            </div>
                            <!-- Whatsapp -->
                            <div class="whatsapp">
                                <img src="images/whatsapp.svg" class="pe-2" alt="call" srcset="">WhatsApp Number:
                                <strong>9930997700</strong>
                            </div>
                        </div>
                        <div class="col-md-6 top-link-search d-flex justify-content-start align-items-center">
                            <div class="top-bar-links me-4">
                                <a class="ms-1" href="#head_office">Go To Main Content</a>
                                <a class="ms-1" href="#" id="aMinus">A-</a>
                                <a class="ms-1" href="#" id="aReset">A</a>
                                <a class="ms-1" href="#" id="aPlus">A+</a>
                                <select class="lang-select ms-2" name="lang" id="lang">
                                    <option value="English">English</option>
                                    <option value="marathi">मराठी</option>
                                    <option value="hindi">हिन्दी</option>
                                </select>
                            </div>
                            <!-- Search Bar -->
                            <div class="input-group mb-3">
                                <input type="text" class="form-control top-search-bar" placeholder="Search here..."
                                    aria-label="Recipient's username" aria-describedby="button-addon2">
                                <!-- <button class="btn search-btn default-btn" type="button" id="button-addon2"><img src="images/search.svg" alt="search_icon" srcset=""></button> -->
                            </div>
    
                        </div>
                    </div>
                </div>
                <!-- Top Bar Ends -->
    
                <!-- Navbar Starts -->
                <nav class="navbar navbar-expand-lg ms-2 me-2">
                    <div class="container-fluid">
                        <!-- Nav Logo -->
                        <a class="navbar-brand" href="index.html">
                            <img src="images/logo.svg" alt="" srcset="">
                        </a>
                        <div class="nav-right">
                            <!-- Nav Options -->
                            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="press_release.html">Press Release</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Events</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="statistics.html">Statistics</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">DG′s Message</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="fir.html">FIRs</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="legal.html">Legal</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="bribe-demand-complaint.html" class="default-btn me-2">Online Complaint</a>
                            <img class="nav-embalem" src="images/satya_mav_embalem.svg" class="ms-4" alt="" srcset="">
                        </div>
                    </div>
                </nav>
                <!-- Navbar Ends -->
            </div>
            <!-- Navigation Bar Ends -->
        </div>
        `;
    }
}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="wrapper">
        <div class="container">
            <div class="row footer-link-section mb-2">
                <div class="col-md-2">
                    <h3 class="link-title">QUICK LINKS</h3>
                    <ul>
                        <a href="rti.html">
                            <li class="footer-link">Right To Information</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">Tenders</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">Circulars</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">Site Map</li>
                        </a>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h3 class="link-title">FOR YOUR INFO</h3>
                    <ul>
                        <a href="">
                            <li class="footer-link">Legal</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">FAQs</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">Feedback</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">Disclaimer and Policies</li>
                        </a>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h3 class="link-title">OTHER LINKS</h3>
                    <ul>
                        <a href="">
                            <li class="footer-link">ACB Head Office</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">ACB Mobile App</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">Important Website Link</li>
                        </a>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h3 class="link-title">RECOMMENDED</h3>
                    <ul>
                        <a href="">
                            <li class="footer-link">Photo Gallery</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">Aapale Sarkar</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">National Portal of India</li>
                        </a>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h3 class="link-title">HOW TO REACH?</h3>
                    <ul>
                        <a href="">
                            <li class="footer-link">By Road</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">By Air</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">By Rail</li>
                        </a>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h3 class="link-title">CONTACT</h3>
                    <ul>
                        <a href="">
                            <li class="footer-link">+91 22-249-21212</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">9930997700</li>
                        </a>
                        <a href="#">
                            <li class="footer-link">acbwebmail@mahapolice.gov.in</li>
                        </a>
                    </ul>
                </div>
            </div>

            <div class="row footer-address">
                <p class="m-0">DIRECTOR GENERAL, ANTI-CORRUPTION BUREAU OF MAHARASHTRA</p>
                <p class="mb-2">6th Floor, Sir Pochkhanwala Road, Worli Police Camp, Worli, Mumbai - 400 030,
                    Maharashtra, India.</p>
            </div>

            <div class="row footer-copyright">
                <p class="mt-2 mb-2">© 2018 ANTI CORRUPTION BUREAU, MAHARASHTRA | Last Updated On : 01/14/2024 15:41:55
                    | Website Visitors : 5195</p>
            </div>
        </div>
    </footer>
        `;
    }
}

customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);

// font sizing reseting

let curruntFontSize = 14;
$("#aPlus").click(() => {
    curruntFontSize = curruntFontSize * 1.2;
    $("*").css({ "font-size": `${curruntFontSize}px` });
});
$("#aMinus").click(() => {
    curruntFontSize = curruntFontSize / 1.2;
    $("*").css({ "font-size": `${curruntFontSize}px` });
});
$("#aReset").click(() => {
    curruntFontSize = 14;
    $("*").css({ "font-size": `${curruntFontSize}px` });
});
