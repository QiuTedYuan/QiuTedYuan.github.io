$(document).ready(function () {
    //Load navigation
    document.getElementById("navigation-section").innerHTML = `
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <span class="sr-only">List Nav</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  </button>
                  <a href="#" class="navbar-brand nav-title">Yuan Qiu</a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="inactive" id="index"><a href="index.html">Home</a></li>
                        <li class="inactive" id="resume"><a href="resume.html">Resume</a></li>
                        <li class="inactive" id="gallery"><a href="gallery.html">Gallery</a></li>
                        <li class="inactive" id="blog"><a href="blog/index.html">B-side</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;
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
			Prof. Yuan Qiu <br>
			(86) 185 518 12O76<br>
			(yuanqiu＠seu.edu.cn)<br>
			.replace("＠","@")
			</h2>
			<h5>20 Nov 2025</h5>
		 </div>
     `;
});
