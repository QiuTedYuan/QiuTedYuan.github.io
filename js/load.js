
$(document).ready(function() {
    //Load navigation
    document.getElementById("navigation-section").innerHTML = `
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
          <a href="#" class="navbar-brand nav-title">Yuan Qiu</a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="nav navbar-nav navbar-right">
            <li class="cative" id="index"><a href="index.html">Home</a></li>
            <li class="cative" id="resume"><a href="resume.html">Resume</a></li>
            <li class="cative" id="gallery"><a href="gallery.html">Gallery</a></li>
            <li class="cative" id="blog"><a href="blog/index.html">Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>
       `;
	var path = window.location.pathname;
	var page = path.split("/").pop();
	switch (page) {
		case "index.html":
    		document.getElementById("index").className = "active";
			break;
		case "resume.html":
    		document.getElementById("resume").className = "active";
    		break;
		case "gallery.html":
    		document.getElementById("gallery").className = "active";
    		break;
	}
  // Load footer
  document.getElementById("contact-section").innerHTML = `
     <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 text-center">
        <img src="./img/contact.png" alt="contact icon" class="">
        <h3>CONTACT</h3>
        <h2>
        Dr. Yuan Qiu <br>
        (65) 848O 9O31<br>
        (yuan.qiu＠cnrsatcreate.sg)<br>
        .replace("＠","@")
        </h2>
        <a href="https://www.facebook.com/qiu.ted.yuan" target="_blank">
            <img src="./img/facebook.png" alt="facebook" class="social-media-icon">
        </a>
        <!--icon source https://www.iconfinder.com/iconsets/xmas-social-networks-->
        <a href="https://www.linkedin.com/in/yuan-qiu-83651910a/" target="_blank">
            <img src="./img/linkedin.png" alt="linkedin" id="linkedin-icon" class="social-media-icon">
        </a>
        <a href="https://github.com/QiuTedYuan" target="_blank">
            <img src="./img/github.png" alt="github" class="social-media-icon">
        </a>
        <h5>14 Aug 2024</h5>
     </div>
     `;
});
