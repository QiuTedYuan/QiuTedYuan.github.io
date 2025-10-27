$(document).ready(function () {
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
			(86) 191 O656 1976<br>
			(yuanqiu＠seu.edu.cn)<br>
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
			<h5>3 Sept 2025</h5>
		 </div>
     `;
});

window.addEventListener("DOMContentLoaded", function () {
	if (document.getElementById("pub-list")) {
	var publist = []
	    publist.push({
	    	conf: "NeurIPS",
	    	authors: "<strong>Yuan Qiu</strong> and Ke Yi",
	    	title: "Differential Privacy on Fully Dynamic Streams",
	    	fullConf: "Conference on Neural Information Processing Systems",
	    	fullDate: "December 2025",
	    	remarks: '<strong style="color: #CC0000">Spotlight (3%)</strong>',
	    	link: '[<a href="https://arxiv.org/abs/2209.01387" target="_blank">Full Version</a>] [<a href="file/slides/neurips25.pptx" target="_blank">Slides</a>]'
	    },{
	    	conf: "NeurIPS",
	    	authors: "Dajun Sun, Wei Dong, <strong>Yuan Qiu</strong>, Ke Yi and Graham Cormode",
	    	title: "Sum Estimation under Personalized Local Differential Privacy",
	    	fullConf: "Conference on Neural Information Processing Systems",
	    	fullDate: "December 2025",
	    },{
	    	conf: "SIGMOD",
	    	authors: "<strong>Yuan Qiu</strong> and Ke Yi",
	    	title: "Approximate DBSCAN under Differential Privacy",
	    	fullConf: "ACM SIGMOD International Conference on Management of Data",
	    	fullDate: "June 2025",
	    	link: '[<a href="https://arxiv.org/abs/2508.08749" target="_blank">PDF</a>] [<a href="file/poster/sigmod25.pdf" target="_blank">Poster</a>]'
	    },{
	    	conf: "SIGMOD",
	    	authors: "Dajun Sun, Wei Dong, <strong>Yuan Qiu</strong> and Ke Yi",
	    	title: "Personalized Truncation for Personalized Privacy",
	    	fullConf: "ACM SIGMOD International Conference on Management of Data",
	    	fullDate: "June 2025",
	    	link: '[<a href="https://dl.acm.org/doi/10.1145/3698825" target="_blank">PDF</a>] [<a href="file/poster/sigmod25_sun.pdf" target="_blank">Poster</a>]'
	    },{
	    	conf: "VLDB",
	    	authors: "Ziyue Huang, <strong>Yuan Qiu</strong>, Ke Yi and Graham Cormode",
	    	title: "Frequency Estimation Under Multiparty Differential Privacy: One-shot and Streaming",
	    	fullConf: "International Conference on Very Large Databases",
	    	fullDate: "September 2022",
	    	link: '[<a href="https://dl.acm.org/doi/10.14778/3547305.3547312" target="_blank">PDF</a>] [<a href="file/poster/vldb21.pdf" target="_blank">Poster</a>]'
	    },{
	    	conf: "KDD",
	    	authors: "<strong>Yuan Qiu</strong>, Wei Dong, Ke Yi, Bin Wu and Feifei Li",
	    	title: "Releasing Private Data for Numerical Queries",
	    	fullConf: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
	    	fullDate: "August 2022",
	    	link: '[<a href="https://dl.acm.org/doi/10.1145/3534678.3539424" target="_blank">PDF</a>]'
	    },{
	    	conf: "SIGMOD",
	    	authors: "<strong>Yuan Qiu</strong>, Yilei Wang, Ke Yi, Feifei Li, Bin Wu and Chaoqun Zhan",
	    	title: "Weighted Distinct Sampling: Cardinality Estimation for SPJ Queries",
	    	fullConf: "ACM SIGMOD International Conference on Management of Data",
	    	fullDate: "June 2021",
	    	link: '[<a href="https://dl.acm.org/doi/10.1145/3448016.3452821" target="_blank">PDF</a>] [<a href="http://home.cse.ust.hk/~yike/spj-full.pdf" target="_blank">Full Version</a>] [<a href="file/slides/sigmod21.pptx" target="_blank">Slides</a>]'
	    },{
	    	conf: "EDBT",
	    	authors: "<strong>Yuan Qiu</strong>, Serafeim Papadias and Ke Yi",
	    	title: "Streaming HyperCube: A Massively Parallel Stream Join Algorithm",
	    	fullConf: "International Conference on Extending DataBase Technology",
	    	fullDate: "March 2019",
	    	remarks: "Short Paper",
	    	link: '[<a href="https://openproceedings.org/2019/conf/edbt/EDBT19_paper_224.pdf" target="_blank">PDF</a>] [<a href="file/poster/edbt19.pdf" target="_blank">Poster</a>]'
	    });
	    pubstr = []
	    for (const pub of publist) {
	    	tmp = []
	    	tmp.push("<li><div class='pub-item'><span class='conf'>(",
	    		pub.conf,
	    		' \'',
				pub.fullDate.slice(-2),
	    		')</span>',
	    		"<span class='details'>",
	    		pub.authors,
	    		". <u>",
	    		pub.title,
	    		"</u>.<br>\n",
	    		"In <i>",
	    		pub.fullConf,
	    		"</i>, ",
	    		pub.fullDate,
	    		". ",
	    	)
	    	if (pub.remarks && pub.remarks.length) {
	    		tmp.push(pub.remarks, ". ");
	    	}
	    	if (pub.link && pub.link.length) {
	    		tmp.push(pub.link);
	    	}
	    	tmp.push("</span></div></li>")
	    	pubstr.push(tmp.join(""))
	    }
	
    	document.getElementById("pub-list").innerHTML = pubstr.join("\n");
	}   
});