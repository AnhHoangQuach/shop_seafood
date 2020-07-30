<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seafood Store</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d8b310bdda.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="header_top">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-md-2 columns_wrap">
                        <span class="icon_left"><i class="fas fa-map-marker-alt"></i></span>
                        <span class="contact_label"> 36 Ngu Hanh <br> Son, Da Nang</span>
                    </div>
                    <div class="col-md-2 columns_wrap">
                        <span class="icon_left"><i class="fas fa-phone-volume"></i></span>    
                        <span class="contact_label">Call us at <br> <a href="tel:0869679324"> 0869679324</a></span>
                    </div>
                    <div class="col-md-4 columns_wrap">
                        <a href="index.php"><img src="images/logo.png" alt=""></a>
                    </div>
                    <ul class="col-md-2 columns_wrap">
                        <li>
                            <span class="icon_right"><i class="fas fa-user"></i></span>  
                        </li>
                        <li class="user_login">
                            <span class="contact_label_right">
                                <a id="cart-popover" data-placement="bottom" title>Login</a>
                            </a>
                        </li>
                    </ul>
                    <div class="col-md-2 columns_wrap">
                        <span class="icon-right"><i class="fas fa-shopping-cart"></i></span>    
                        <span class="contact_label_right">$0.00</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="header_bottom">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="nav_links">
                        <li class="nav-item dropdown active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            HOME
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item"><a href="">FEATURES</a></li>
                        <li class="nav-item"><a href="">RECIPES</a></li>
                        <li class="nav-item"><a href="">PRODUCTS</a></li>
                        <li class="nav-item"><a href="">BLOG</a></li>
                        <li class="nav-item"><a href="">ABOUT</a></li>
                        <li class="nav-item"><a href="">CONTACTS</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <section>
        <div class="owl-carousel owl-theme">
            <div class="item">
                <img class="img-responsive" src="images/slides/slides_1.jpg" alt="">
                <div class="item-caption">
                    <h1 class="caption animate__animated animate__bounce">THE WONDERS OF THE OCEAN</h1>
                    <h4 class="caption_bottom animate__animated animate__fadeInLeft">ON THE PLATE</h4>
                </div>
            </div>
            <div class="item">
                <img src="images/slides/slides_2.jpg" alt="">
                <div class="item-caption">
                    <h1>OCEAN VARIETY, POND PRICE</h1>
                    <h4 class="caption_bottom">IN OUR STORE</h4>
                </div>
            </div>
            <div class="item">
                <img src="images/slides/slides_3.jpg" alt="">
                <div class="item-caption">
                    <h1>THE PLACE TO BE FOR SEAFOOD</h1>
                    <h4 class="caption_bottom">AT THE RESTAURANT</h4>
                </div>
            </div>
        </div>
    </section>
    <div class="page_content_wrap">
        <div class="container">
            <div class="empty_space"></div>
            <div class="content_wrap">
                <div class="product_feature">
                    <h2>LEADER</h2>
                    <span>Seafood</span>
                </div>
                <div class="product_feature">
                    <h2>PARTNER</h2>
                    <span>Sustainable</span>
                </div>
                <div class="product_feature">
                    <h2>PRODUCT</h2>
                    <span>World Class</span>
                </div>
                <div class="product_feature">
                    <h2>QUALITY</h2>
                    <span>Control</span>
                </div>
            </div>
            <div class="section_introduce">
                <p>Welcome</p>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.js" 
    integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>