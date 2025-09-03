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
    // Load Publication
	if (document.getElementById("pub-list")) {
    document.getElementById("pub-list").innerHTML = `
		<li>
			<strong>Yuan Qiu</strong> and Ke Yi.&nbsp;
			Approximate DBSCAN under Differential Privacy.&nbsp;
			<i>ACM SIGMOD International Conference on Management of Data</i> (<strong>SIGMOD</strong>), June 2025.&nbsp;
			[<a href="https://arxiv.org/abs/2508.08749" target="_blank">PDF</a>]
			[<a href="file/sigmod25_poster.pdf" target="_blank">Poster</a>]
		</li>    
		<li>
			Dajun Sun, Wei Dong, <strong>Yuan Qiu</strong> and Ke Yi.&nbsp;
			Personalized Truncation for Personalized Privacy.&nbsp;
			<i>ACM SIGMOD International Conference on Management of Data</i> (<strong>SIGMOD</strong>), June 2025.&nbsp;
			[<a href="https://dl.acm.org/doi/10.1145/3698825" target="_blank">PDF</a>]
			[<a href="file/sigmod25_poster_sun.pdf" target="_blank">Poster</a>]
		</li>
		<li>
			Ziyue Huang, <strong>Yuan Qiu</strong>, Ke Yi and Graham Cormode.&nbsp;
			Frequency Estimation Under Multiparty Differential Privacy: One-shot and Streaming. &nbsp;
			<i>International Conference on Very Large Databases</i> (<strong>VLDB</strong>), September 2022. &nbsp;
			[<a href="https://dl.acm.org/doi/10.14778/3547305.3547312" target="_blank">PDF</a>]
			[<a href="file/vldb21_poster.pdf" target="_blank">Poster</a>]
		</li>
		<li>
			<strong>Yuan Qiu</strong>, Wei Dong, Ke Yi, Bin Wu and Feifei Li. &nbsp;
			Releasing Private Data for Numerical Queries. &nbsp;
			<i>ACM SIGKDD Conference on Knowledge Discovery and Data Mining</i> (<strong>KDD</strong>), August 2022. &nbsp;
			[<a href="https://dl.acm.org/doi/10.1145/3534678.3539424" target="_blank">PDF</a>]
		</li>               
		<li>
			<strong>Yuan Qiu</strong>, Yilei Wang, Ke Yi, Feifei Li, Bin Wu and Chaoqun Zhan. &nbsp;
			Weighted Distinct Sampling: Cardinality Estimation for SPJ Queries. &nbsp;
			<i>ACM SIGMOD International Conference on Management of Data</i> (<strong>SIGMOD</strong>), June 2021. &nbsp;
			[<a href="https://dl.acm.org/doi/10.1145/3448016.3452821" target="_blank">PDF</a>]
			[<a href="http://home.cse.ust.hk/~yike/spj-full.pdf" target="_blank">Full Version</a>]
		</li>
		<li>
			<strong>Yuan Qiu</strong>, Serafeim Papadias and Ke Yi. &nbsp;
			Streaming HyperCube: A Massively Parallel Stream Join Algorithm. &nbsp;
			<i>International Conference on Extending DataBase Technology</i> (<strong>EDBT</strong>), March 2019. Short paper. &nbsp;
			[<a href="https://openproceedings.org/2019/conf/edbt/EDBT19_paper_224.pdf" target="_blank">PDF</a>]
			[<a href="file/edbt19_poster.pdf" target="_blank">Poster</a>]
		</li>
	`;}
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
