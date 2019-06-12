
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
//      <div class="row">
//        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8
//                    col-md-offset-2 col-lg-offset-2" id="navigation">
//	      <nav role="navigation" id="navigation-part"> \
//		  <ul class="nav nav-justified text-center"> \
//		    <li id="index"><a href="index.html">HOME</a></li>
//	            <li id="resume"><a href="resume.html">RESUME</a></li>
//                <li id="gallery"><a href="gallery.html">GALLERY</a></li>
//	            <li id ="comp3711"><a href="3711.html">COMP 3711</a></li>
//		    <!--li id="comp5421" role="presentation" class="dropdown">
//		      <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">
//		        COMP5421 <span class="caret"></span>
//		      </a>
//		      <ul class="dropdown-menu bullet pull-center" role="menu">
//		        <li><a href="5421/iscissors/index.html">Intelligent Scissors</a></li>
//		        <li><a href="5421/face/index.html">Face Detection</a></li>
//		        <li><a href="5421/svm/index.html">Single View Modeling</a></li>
//	                <li><a href="5421/photo/index.html">Multi-View Modeling</a></li>
//		      </ul>
//	            </li-->
//		  </ul>
//		</nav>
//	    </div>
// 	</div>
//	`;
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
//        case "3711.html":
//           document.getElementById("3711").className = "active";
//            break;
	}
});
