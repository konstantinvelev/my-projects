
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-layout">
        <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="" /></div>
        </div>
        <div className="wrapper">

          <div className="sidebar">

            <nav id="sidebar">

              <div id="dismiss">
                <i className="fa fa-arrow-left"></i>
              </div>

              <ul className="list-unstyled components">

                <li className="active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#why_choose_us">why Choose Us</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>

            </nav>
          </div>


          <div id="content">



            <section id="home" className="top_section">
              <div className="row">
                <div className="col-lg-12">

                  <header>

                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3 logo_section">
                          <div className="full">
                            <div className="center-desk">
                              <div className="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="right_header_info">
                            <ul>
                              <li><img style={{ marginRight: "15px" }} src="images/phone_icon.png" alt="#" /><a href="#">987-654-3210</a></li>
                              <li><img style={{ marginRight: "15px" }} src="images/mail_icon.png" alt="#" /><a href="#">demo@gmail.com</a></li>
                              <li><img src="images/search_icon.png" alt="#" /></li>
                              <li>
                                <button type="button" id="sidebarCollapse">
                                  <img src="images/menu_icon.png" alt="#" />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </header>
                  <section>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="full slider_cont_section">
                            <h4>Welcome</h4>
                            <h3>AVALON</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className="button_section">
                              <a href="#">Book Now</a>
                              <a href="about.html">About Us</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div id="slider_main" className="carousel slide" data-ride="carousel">

                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img src="images/slider_1.png" alt="#" />
                              </div>
                              <div className="carousel-item">
                                <img src="images/slider_2.png" alt="#" />
                              </div>
                            </div>
                            <div className="full center">
                              <a className="carousel-control-prev" href="#slider_main" data-slide="prev">
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                              </a>
                              <a className="carousel-control-next" href="#slider_main" data-slide="next">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              </div>
            </section>



            <div id="about" className="section layout_padding">
              <div className="container">

                <div className="row">

                  <div className="col-lg-4 margin_top_30">
                    <div className="full margin_top_30">
                      <h3 className="main_heading _left_side margin_top_30">About Us</h3>
                      <p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..</p>
                    </div>
                    <div className="full button_section margin_top_30">
                      <a href="#">Read More</a>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="full margin_top_50_rs">
                      <img className="img-responsive" src="images/about_us.png" alt="#" />
                    </div>
                  </div>

                </div>

              </div>
            </div>



            <div className="section layout_padding padding_top_0">
              <div className="container">

                <div className="row">

                  <div className="col-lg-8">
                    <div className="full text_align_right r-img">
                      <img className="img-responsive" src="images/about_us_2.png" alt="#" />
                    </div>
                  </div>

                  <div className="col-lg-4 margin_top_30">
                    <div className="full margin_top_30">
                      <h3 className="main_heading _left_side margin_top_30">Our Cars</h3>
                      <p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..</p>
                    </div>
                    <div className="full button_section margin_top_30">
                      <a href="#">See More</a>
                    </div>
                  </div>

                </div>

              </div>
            </div>



            <section id="why_choose_us" className="dark_bg_blue layout_padding cross_layout padding_top_0">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="full center">
                      <h2 className="heading_main orange_heading">Why Choose Us</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="full">
                      <div className="choose_blog text_align_center">
                        <img src="images/c1_icon.png" />
                        <h4>FINANCING MADE EASY</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="full">
                      <div className="choose_blog text_align_center">
                        <img src="images/c2_icon.png" />
                        <h4>WIDE RANGE OF BRANDS</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="full">
                      <div className="choose_blog text_align_center">
                        <img src="images/c3_icon.png" />
                        <h4>TRUSTED BY THOUSANDS</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 margin_top_30">
                    <div className="full center button_section margin_top_30">
                      <a className="margin_top_30" href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>



            <section id="testimonial" className="dark_bg_orange layout_padding cross_layout_o padding_top_0">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="full center">
                      <h2 className="heading_main orange_heading">Testimonials</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="full">
                      <div id="testimonial_slider" className="carousel slide" data-ride="carousel">

                        <ul className="carousel-indicators">
                          <li data-target="#testimonial_slider" data-slide-to="0" className="active"></li>
                          <li data-target="#testimonial_slider" data-slide-to="1"></li>
                          <li data-target="#testimonial_slider" data-slide-to="2"></li>
                        </ul>

                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="testomonial_section">
                              <div className="full center">
                                <div className="client_img">
                                  <img src="images/testimonial.png" alt="#" />
                                </div>
                              </div>
                              <div className="full testimonial_cont text_align_center">
                                <p>
                                  <strong>Due markes</strong>
                                  <br/>
                                    <strong className="ornage_color">Rental</strong>
                                    <br/>
                                      <i></i>
                                    </p>
                                    <div className="full text_align_center margin_top_30">
                                      <img src="images/testimonial_qoute.png" />
                                    </div>
                                  </div>
                              </div>
                            </div>

                            <div className="carousel-item">

                              <div className="testomonial_section">
                                <div className="full center">
                                  <div className="client_img">
                                    <img src="images/testimonial.png" alt="#" />
                                  </div>
                                </div>
                                <div className="full testimonial_cont text_align_center">
                                  <p><strong>Due markes</strong><br/><strong className="ornage_color">Rental</strong><br/><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</i></p>
                                    <div className="full text_align_center margin_top_30">
                                      <img src="images/testimonial_qoute.png"/>
                                    </div>
                                  </div>
                                </div>

                              </div>

                              <div className="carousel-item">

                                <div className="testomonial_section">
                                  <div className="full center">
                                    <div className="client_img">
                                      <img src="images/testimonial.png" alt="#" />
                                    </div>
                                  </div>
                                  <div className="full testimonial_cont text_align_center">
                                    <p><strong>Due markes</strong><br/><strong className="ornage_color">Rental</strong><br/><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</i></p>
                                      <div className="full text_align_center margin_top_30">
                                        <img src="images/testimonial_qoute.png"/>
                                      </div>
                                    </div>
                                  </div>

                                </div>

                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>



                  <section id="contact" className="dark_bg_blue layout_padding cross_layout padding_top_0 margin_top_0">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="full center">
                            <h2 className="heading_main orange_heading">Contact Us</h2>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="full">
                            <div className="contact_form">
                              <form>
                                <fieldset className="row">
                                  <div className="col-md-12">
                                    <div className="full field">
                                      <input type="text" placeholder="Your Name" name="name" />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="full field">
                                      <input type="email" placeholder="Email" name="email" />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="full field">
                                      <input type="text" placeholder="Phone" name="number" />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="full field">
                                      <textarea placeholder="Message"></textarea>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="full center">
                                      <button className="submit_bt">Send</button>
                                    </div>
                                  </div>
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="full map_section">
                            <div id="map">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>



                  <footer>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="full">
                            <h3>AVALON MOTORS</h3>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="full">
                            <ul className="social_links">
                              <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="full">
                            <h4 className="widget_heading">SUBSCRIBE</h4>
                          </div>
                          <div className="full subribe_form">
                            <form>
                              <fieldset>
                                <div className="field">
                                  <input type="email" name="mail" placeholder="Enter your email" />
                                </div>
                                <div className="field">
                                  <button className="submit_bt">Sumbit</button>
                                </div>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="full">
                            <h4 className="widget_heading">Usefull Links</h4>
                          </div>
                          <div className="full f_menu">
                            <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Our Cars</a></li>
                              <li><a href="#">Services</a></li>
                              <li><a href="#">Testimonial</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="full">
                            <h4 className="widget_heading">Contact Details</h4>
                            <div className="full cont_footer">
                              <p><strong>AVALON Car : Adderess</strong><br/><br/>Newyork 10012, USA<br/>Phone: +987 654 3210<br/>demo@gmail.com</p>
                              </div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </footer>




                        <div className="cpy_right">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="full">
                                  <p>© 2019 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>



                      </div>
                    </div>

                    <div className="overlay"></div>


                </div>
              </div>
              );
}

              export default App;
