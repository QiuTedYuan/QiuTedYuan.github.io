window.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("pub-list")) {
        const publist = []
        publist.push({
            conf: "NeurIPS",
            authors: "<strong>Yuan Qiu</strong> and Ke Yi",
            title: "Differential Privacy on Fully Dynamic Streams",
            fullConf: "Conference on Neural Information Processing Systems",
            fullDate: "December 2025",
            remarks: '<strong style="color: #CC0000">Spotlight (3%)</strong>',
            link: '[<a href="https://openreview.net/forum?id=piM21sPyVL" target="_blank">PDF</a>] [<a href="file/poster/neurips25.pdf" target="_blank">Poster</a>] [<a href="file/slides/neurips25.pptx" target="_blank">Slides</a>]',
        }, {
            conf: "NeurIPS",
            authors: "Dajun Sun, Wei Dong, <strong>Yuan Qiu*</strong>, Ke Yi and Graham Cormode",
            title: "Sum Estimation under Personalized Local Differential Privacy",
            fullConf: "Conference on Neural Information Processing Systems",
            fullDate: "December 2025",
            link: '[<a href="https://openreview.net/forum?id=AXlquRUO0S" target="_blank">PDF</a>] [<a href="file/poster/neurips25sun.pdf" target="_blank">Poster</a>]',
        }, {
            conf: "SIGMOD",
            authors: "<strong>Yuan Qiu</strong> and Ke Yi",
            title: "Approximate DBSCAN under Differential Privacy",
            fullConf: "ACM SIGMOD International Conference on Management of Data",
            fullDate: "June 2025",
            link: '[<a href="https://arxiv.org/abs/2508.08749" target="_blank">PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/3725265" target="_blank">Conf Version</a>] [<a href="file/poster/sigmod25.pdf" target="_blank">Poster</a>]'
        }, {
            conf: "SIGMOD",
            authors: "Dajun Sun, Wei Dong, <strong>Yuan Qiu</strong> and Ke Yi",
            title: "Personalized Truncation for Personalized Privacy",
            fullConf: "ACM SIGMOD International Conference on Management of Data",
            fullDate: "June 2025",
            link: '[<a href="https://dl.acm.org/doi/10.1145/3698825" target="_blank">PDF</a>] [<a href="file/poster/sigmod25sun.pdf" target="_blank">Poster</a>]'
        }, {
            conf: "VLDB",
            authors: "Ziyue Huang, <strong>Yuan Qiu</strong>, Ke Yi and Graham Cormode",
            title: "Frequency Estimation Under Multiparty Differential Privacy: One-shot and Streaming",
            fullConf: "International Conference on Very Large Databases",
            fullDate: "September 2022",
            link: '[<a href="https://dl.acm.org/doi/10.14778/3547305.3547312" target="_blank">PDF</a>] [<a href="file/poster/vldb21.pdf" target="_blank">Poster</a>]'
        }, {
            conf: "KDD",
            authors: "<strong>Yuan Qiu</strong>, Wei Dong, Ke Yi, Bin Wu and Feifei Li",
            title: "Releasing Private Data for Numerical Queries",
            fullConf: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
            fullDate: "August 2022",
            link: '[<a href="https://dl.acm.org/doi/10.1145/3534678.3539424" target="_blank">PDF</a>]'
        }, {
            conf: "SIGMOD",
            authors: "<strong>Yuan Qiu</strong>, Yilei Wang, Ke Yi, Feifei Li, Bin Wu and Chaoqun Zhan",
            title: "Weighted Distinct Sampling: Cardinality Estimation for SPJ Queries",
            fullConf: "ACM SIGMOD International Conference on Management of Data",
            fullDate: "June 2021",
            link: '[<a href="https://dl.acm.org/doi/10.1145/3448016.3452821" target="_blank">PDF</a>] [<a href="http://home.cse.ust.hk/~yike/spj-full.pdf" target="_blank">Full Version</a>] [<a href="file/slides/sigmod21.pptx" target="_blank">Slides</a>]'
        }, {
            conf: "EDBT",
            authors: "<strong>Yuan Qiu</strong>, Serafeim Papadias and Ke Yi",
            title: "Streaming HyperCube: A Massively Parallel Stream Join Algorithm",
            fullConf: "International Conference on Extending DataBase Technology",
            fullDate: "March 2019",
            remarks: "Short Paper",
            link: '[<a href="https://openproceedings.org/2019/conf/edbt/EDBT19_paper_224.pdf" target="_blank">PDF</a>] [<a href="file/poster/edbt19.pdf" target="_blank">Poster</a>]'
        });
        const pubstr = []
        for (const pub of publist) {
            const tmp = []
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