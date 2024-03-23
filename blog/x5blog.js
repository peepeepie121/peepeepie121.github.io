x5engine.settings.imBlog = {
	root: 'http://localhost/www.thegoldenarch.com/blog/',
	title_tag: 'Fashion Blog - The Golden Arch',
	home_posts_number: 10,
	card_type: 'topcoverbottomcontents',
	show_card_title: true,
	show_card_category: false,
	show_card_description: true,
	show_card_author: false,
	show_card_date: true,
	show_card_button: true,
	article_type: 'covertitlecontents',
	file_prefix: 'x5_',
	richDataEnabled: true,
	comments: false,
	comments_source: 'wsx5',
	email: '',
	comment_type: 'both',
	approve_comments: 0,
	highlight_mode: 'card',

highlighted_count: 1,

highlighted_card_height: 500,
	categories: ['Blog'],
	authors: [],
	posts: [],
	posts_cat: [],
	posts_author: [],
	posts_month: [],
	posts_ids: [],
	posts_slug: []
};

var post = null;

// Post titled "Turpis tincidunt id aliquet risus"
x5engine.settings.imBlog.posts['000000009'] = {
	id: '000000009',
	title: 'Turpis tincidunt id aliquet risus',
	title_tag: 'Turpis tincidunt id aliquet risus - Fashion Blog - The Golden Arch',
	title_heading_tag: 'h2',
	slug: 'turpis-tincidunt-id-aliquet-risus',
	rel_url: '?turpis-tincidunt-id-aliquet-risus',
	author: '',
	category: 'Blog',
	cardCover: 'blog/files/pixabay-336672_thumb.jpg',
	cover: 'blog/files/pixabay-336672.jpg',
	summary: 'Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget.',
	tag_description: 'Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget.',
	rich_data_type: [
	{
		"@type": "BlogPosting",
		"@context": "https://schema.org",
		"publisher": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"datePublished": "2019-02-18T13:24:00",
		"dateModified": "2019-02-18T13:24:00",
		"author": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"headline": "Turpis tincidunt id aliquet risus",
		"description": "Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget.",
		"mainEntityOfPage": "http://127.0.0.1:8080/blog/?turpis-tincidunt-id-aliquet-risus",
		"image": "http://127.0.0.1:8080/blog\\files\\pixabay-336672.jpg",
		"speakable": {
			"@type": "SpeakableSpecification",
			"xpath": [
				"/html/head/meta[@name='title']/@content",
				"/html/head/meta[@name='description']/@content"
			]
		}
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "February 2019",
				"item": "http://127.0.0.1:8080/blog/?month=201902",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Turpis tincidunt id aliquet risus",
				"position": 3
			}
		]
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "Blog",
				"item": "http://127.0.0.1:8080/blog/?category=Blog",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Turpis tincidunt id aliquet risus",
				"position": 3
			}
		]
	}
],
	keywords: '',
	sources: [],
	body: '<div id="imBlogPost_000000009"><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Porta nibh venenatis cras sed felis eget velit. Vel pharetra vel turpis nunc. Egestas purus viverra accumsan in. Neque convallis a cras semper auctor neque vitae tempus quam. Odio eu feugiat pretium nibh ipsum consequat nisl. Sed turpis tincidunt id aliquet risus feugiat in. Ornare massa eget egestas purus. Eget nunc scelerisque viverra mauris in. </span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Aliquam id diam maecenas ultricies mi. Arcu odio ut sem nulla pharetra diam sit amet. Bibendum at varius vel pharetra vel turpis nunc eget. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. </span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Risus pretium quam vulputate dignissim suspendisse in est. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Adipiscing tristique risus nec feugiat in fermentum posuere. Suscipit adipiscing bibendum est ultricies integer.</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Eget sit amet tellus cras adipiscing enim eu turpis. A pellentesque sit amet porttitor eget dolor morbi. Neque laoreet suspendisse interdum consectetur libero id. Dictum at tempor commodo ullamcorper a lacus vestibulum. Id aliquet risus feugiat in ante metus. Metus dictum at tempor commodo ullamcorper a lacus. Ut placerat orci nulla pellentesque dignissim enim. Nibh sed pulvinar proin gravida. Neque vitae tempus quam pellentesque nec nam. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Ultricies mi eget mauris pharetra et ultrices neque.</span></div><div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '18/2/2019',
	utc_time: new Date(2019,1,18,13,24,0),
	month: '201902',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['Blog'] == null) x5engine.settings.imBlog.posts_cat['Blog'] = [];
x5engine.settings.imBlog.posts_cat['Blog'][x5engine.settings.imBlog.posts_cat['Blog'].length] = '000000009';
if (x5engine.settings.imBlog.posts_author[''] == null) x5engine.settings.imBlog.posts_author[''] = [];
x5engine.settings.imBlog.posts_author[''][x5engine.settings.imBlog.posts_author[''].length] = '000000009';
if (x5engine.settings.imBlog.posts_month['201902'] == null) x5engine.settings.imBlog.posts_month['201902'] = [];
x5engine.settings.imBlog.posts_month['201902'][x5engine.settings.imBlog.posts_month['201902'].length] = '000000009';
x5engine.settings.imBlog.posts_slug['turpis-tincidunt-id-aliquet-risus'] = '000000009';

// Post titled "Ut placerat orci nulla pellentesque"
x5engine.settings.imBlog.posts['000000008'] = {
	id: '000000008',
	title: 'Ut placerat orci nulla pellentesque',
	title_tag: 'Ut placerat orci nulla pellentesque - Fashion Blog - The Golden Arch',
	title_heading_tag: 'h2',
	slug: 'ut-placerat-orci-nulla-pellentesque',
	rel_url: '?ut-placerat-orci-nulla-pellentesque',
	author: '',
	category: 'Blog',
	cardCover: 'blog/files/pixabay-1953365_thumb.jpg',
	cover: 'blog/files/pixabay-1953365.jpg',
	summary: 'Nibh sed pulvinar proin gravida.',
	tag_description: 'Nibh sed pulvinar proin gravida.',
	rich_data_type: [
	{
		"@type": "BlogPosting",
		"@context": "https://schema.org",
		"publisher": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"datePublished": "2019-02-18T13:20:00",
		"dateModified": "2019-02-18T13:20:00",
		"author": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"headline": "Ut placerat orci nulla pellentesque",
		"description": "Nibh sed pulvinar proin gravida.",
		"mainEntityOfPage": "http://127.0.0.1:8080/blog/?ut-placerat-orci-nulla-pellentesque",
		"image": [
			"http://127.0.0.1:8080/images\\pixabay-442616.jpg",
			"http://127.0.0.1:8080/images\\pixabay-1209333.jpg",
			"http://127.0.0.1:8080/blog\\files\\pixabay-1953365.jpg"
		],
		"speakable": {
			"@type": "SpeakableSpecification",
			"xpath": [
				"/html/head/meta[@name='title']/@content",
				"/html/head/meta[@name='description']/@content"
			]
		}
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "February 2019",
				"item": "http://127.0.0.1:8080/blog/?month=201902",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Ut placerat orci nulla pellentesque",
				"position": 3
			}
		]
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "Blog",
				"item": "http://127.0.0.1:8080/blog/?category=Blog",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Ut placerat orci nulla pellentesque",
				"position": 3
			}
		]
	}
],
	keywords: '',
	sources: [],
	body: '<div id="imBlogPost_000000008"><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Eget sit amet tellus cras adipiscing enim eu turpis. A pellentesque sit amet porttitor eget dolor morbi. Neque laoreet suspendisse interdum consectetur libero id. Dictum at tempor commodo ullamcorper a lacus vestibulum. Id aliquet risus feugiat in ante metus. Metus dictum at tempor commodo ullamcorper a lacus. Ut placerat orci nulla pellentesque dignissim enim. </span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Nibh sed pulvinar proin gravida. Neque vitae tempus quam pellentesque nec nam. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Ultricies mi eget mauris pharetra et ultrices neque.</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><img class="image-0 fleft" src="../images/pixabay-442616.jpg"  title="" alt=""/><span class="fs14lh2 ff1">Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sem integer vitae justo eget. Nunc mattis enim ut tellus elementum sagittis vitae et. Egestas egestas fringilla phasellus faucibus scelerisque. Auctor urna nunc id cursus metus aliquam eleifend. Eget mauris pharetra et ultrices neque ornare. Placerat in egestas erat imperdiet sed euismod. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Ut aliquam purus sit amet luctus venenatis lectus magna. Tristique senectus et netus et malesuada fames ac turpis. </span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Neque ornare aenean euismod elementum nisi quis eleifend quam. </span><span class="fs14lh2 ff1">Elit ullamcorper dignissim cras tincidunt. Scelerisque in dictum non consectetur a erat nam at lectus. Lacus vestibulum sed arcu non odio. Pharetra sit amet aliquam id. Egestas pretium aenean pharetra magna ac placerat. </span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><img class="image-1 fright" src="../images/pixabay-1209333.jpg"  title="" alt=""/></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Nulla pharetra diam sit amet nisl suscipit. Gravida quis blandit turpis cursus in hac habitasse platea. Integer eget aliquet nibh praesent tristique magna sit amet. Integer vitae justo eget magna fermentum iaculis eu non. Interdum velit euismod in pellentesque massa placerat. Dictum varius duis at consectetur lorem donec. Duis convallis convallis tellus id. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Nisl nunc mi ipsum faucibus vitae aliquet nec. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Quis risus sed vulputate odio. Mauris rhoncus aenean vel elit scelerisque mauris.</span></div><div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '18/2/2019',
	utc_time: new Date(2019,1,18,13,20,0),
	month: '201902',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['Blog'] == null) x5engine.settings.imBlog.posts_cat['Blog'] = [];
x5engine.settings.imBlog.posts_cat['Blog'][x5engine.settings.imBlog.posts_cat['Blog'].length] = '000000008';
if (x5engine.settings.imBlog.posts_author[''] == null) x5engine.settings.imBlog.posts_author[''] = [];
x5engine.settings.imBlog.posts_author[''][x5engine.settings.imBlog.posts_author[''].length] = '000000008';
if (x5engine.settings.imBlog.posts_month['201902'] == null) x5engine.settings.imBlog.posts_month['201902'] = [];
x5engine.settings.imBlog.posts_month['201902'][x5engine.settings.imBlog.posts_month['201902'].length] = '000000008';
x5engine.settings.imBlog.posts_slug['ut-placerat-orci-nulla-pellentesque'] = '000000008';

// Post titled "Commodo ullamcorper a lacus"
x5engine.settings.imBlog.posts['000000007'] = {
	id: '000000007',
	title: 'Commodo ullamcorper a lacus',
	title_tag: 'Commodo ullamcorper a lacus - Fashion Blog - The Golden Arch',
	title_heading_tag: 'h2',
	slug: 'commodo-ullamcorper-a-lacus',
	rel_url: '?commodo-ullamcorper-a-lacus',
	author: '',
	category: 'Blog',
	cardCover: 'blog/files/pixabay-1744349_thumb.jpg',
	cover: 'blog/files/pixabay-1744349.jpg',
	summary: 'Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.',
	tag_description: 'Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.',
	rich_data_type: [
	{
		"@type": "BlogPosting",
		"@context": "https://schema.org",
		"publisher": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"datePublished": "2019-02-18T13:17:00",
		"dateModified": "2019-02-18T13:17:00",
		"author": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"headline": "Commodo ullamcorper a lacus",
		"description": "Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.",
		"mainEntityOfPage": "http://127.0.0.1:8080/blog/?commodo-ullamcorper-a-lacus",
		"image": [
			"http://127.0.0.1:8080/images\\pixabay-1970237.jpg",
			"http://127.0.0.1:8080/images\\pixabay-1439909.jpg",
			"http://127.0.0.1:8080/blog\\files\\pixabay-1744349.jpg"
		],
		"speakable": {
			"@type": "SpeakableSpecification",
			"xpath": [
				"/html/head/meta[@name='title']/@content",
				"/html/head/meta[@name='description']/@content"
			]
		}
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "February 2019",
				"item": "http://127.0.0.1:8080/blog/?month=201902",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Commodo ullamcorper a lacus",
				"position": 3
			}
		]
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "Blog",
				"item": "http://127.0.0.1:8080/blog/?category=Blog",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Commodo ullamcorper a lacus",
				"position": 3
			}
		]
	}
],
	keywords: '',
	sources: [],
	body: '<div id="imBlogPost_000000007"><div><span class="fs14lh1-5 ff1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pharetra diam sit amet. In dictum non consectetur a erat nam at. Sed vulputate mi sit amet. Non sodales neque sodales ut. Tincidunt id aliquet risus feugiat in ante. Pellentesque diam volutpat commodo sed egestas egestas fringilla. In aliquam sem fringilla ut. Vel fringilla est ullamcorper eget nulla.</span></div><div><span class="fs14lh1-5 ff1"><br></span></div><div><div class="imTACenter"><img class="image-1" src="../images/pixabay-1970237.jpg"  title="" alt=""/></div><div class="imTACenter"><span class="fs11lh1-5 ff1"><i>Aquoque reliptum sedat</i></span></div><span class="fs14lh1-5 ff1"><br></span></div><div><span class="fs14lh1-5 ff1">Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Et leo duis ut diam quam nulla porttitor massa. Bibendum est ultricies integer quis auctor. Dictum sit amet justo donec enim diam vulputate. Diam volutpat commodo sed egestas. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Pellentesque habitant morbi tristique senectus et netus et. Lacus vestibulum sed arcu non odio euismod. </span></div><div><span class="fs14lh1-5 ff1"><br></span></div><div><span class="fs14lh1-5 ff1">Commodo ullamcorper a lacus vestibulum sed arcu non. Lacinia at quis risus sed vulputate. Feugiat sed lectus vestibulum mattis ullamcorper. Cursus in hac habitasse platea. Nunc congue nisi vitae suscipit tellus mauris. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.</span><div><span class="fs14lh1-5 ff1"><br></span></div><div><img class="image-0 fleft" src="../images/pixabay-1439909.jpg"  title="" alt=""/></div><div><span class="fs14lh1-5 ff1">Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Pellentesque diam volutpat commodo sed. Facilisi nullam vehicula ipsum a. Nec ultrices dui sapien eget mi proin. Tristique magna sit amet purus gravida quis. <b>At risus viverra adipiscing at. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Velit dignissim sodales ut eu sem.</b></span></div><div><span class="fs14lh1-5 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Magna sit amet purus gravida quis blandit turpis. Aliquam eleifend mi in nulla. Libero id faucibus nisl tincidunt eget. Integer quis auctor elit sed vulputate mi. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Nisl condimentum id venenatis a condimentum vitae sapien. Sed cras ornare arcu dui. Vitae et leo duis ut diam quam. Nascetur ridiculus mus mauris vitae ultricies. Vel fringilla est ullamcorper eget nulla. Et egestas quis ipsum suspendisse ultrices. In cursus turpis massa tincidunt dui. Diam phasellus vestibulum lorem sed risus ultricies. Ornare massa eget egestas purus viverra accumsan in nisl.</span></div></div><div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '18/2/2019',
	utc_time: new Date(2019,1,18,13,17,0),
	month: '201902',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['Blog'] == null) x5engine.settings.imBlog.posts_cat['Blog'] = [];
x5engine.settings.imBlog.posts_cat['Blog'][x5engine.settings.imBlog.posts_cat['Blog'].length] = '000000007';
if (x5engine.settings.imBlog.posts_author[''] == null) x5engine.settings.imBlog.posts_author[''] = [];
x5engine.settings.imBlog.posts_author[''][x5engine.settings.imBlog.posts_author[''].length] = '000000007';
if (x5engine.settings.imBlog.posts_month['201902'] == null) x5engine.settings.imBlog.posts_month['201902'] = [];
x5engine.settings.imBlog.posts_month['201902'][x5engine.settings.imBlog.posts_month['201902'].length] = '000000007';
x5engine.settings.imBlog.posts_slug['commodo-ullamcorper-a-lacus'] = '000000007';

// Post titled "Minima veniam, quis nostrum exercitationem"
x5engine.settings.imBlog.posts['000000006'] = {
	id: '000000006',
	title: 'Minima veniam, quis nostrum exercitationem',
	title_tag: 'Minima veniam, quis nostrum exercitationem - Fashion Blog - The Golden Arch',
	title_heading_tag: 'h2',
	slug: 'minima-veniam,-quis-nostrum-exercitationem',
	rel_url: '?minima-veniam,-quis-nostrum-exercitationem',
	author: '',
	category: 'Blog',
	cardCover: 'blog/files/pixabay-1822488_thumb.jpg',
	cover: 'blog/files/pixabay-1822488.jpg',
	summary: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius...',
	tag_description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius...',
	rich_data_type: [
	{
		"@type": "BlogPosting",
		"@context": "https://schema.org",
		"publisher": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"datePublished": "2019-02-18T13:09:00",
		"dateModified": "2019-02-18T13:09:00",
		"author": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"headline": "Minima veniam, quis nostrum exercitationem",
		"description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius...",
		"mainEntityOfPage": "http://127.0.0.1:8080/blog/?minima-veniam,-quis-nostrum-exercitationem",
		"image": [
			"http://127.0.0.1:8080/images\\pixabay-801990.jpg",
			"http://127.0.0.1:8080/blog\\files\\pixabay-1822488.jpg"
		],
		"speakable": {
			"@type": "SpeakableSpecification",
			"xpath": [
				"/html/head/meta[@name='title']/@content",
				"/html/head/meta[@name='description']/@content"
			]
		}
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "February 2019",
				"item": "http://127.0.0.1:8080/blog/?month=201902",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Minima veniam, quis nostrum exercitationem",
				"position": 3
			}
		]
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "Blog",
				"item": "http://127.0.0.1:8080/blog/?category=Blog",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Minima veniam, quis nostrum exercitationem",
				"position": 3
			}
		]
	}
],
	keywords: '',
	sources: [],
	body: '<div id="imBlogPost_000000006"><div data-line-height="2" class="lh2 imTALeft"><span class="fs14lh2 ff1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs16lh2 cf1 ff2"><b>Neque porro quisquam</b></span><br></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2 imTACenter"><span class="fs14lh2 ff1"><img class="image-0" src="../images/pixabay-801990.jpg"  title="" alt=""/><br></span></div><div data-line-height="2" class="lh2 imTACenter"><i class="fs11lh2 ff1">Adepto squicior allumen </i></div><div data-line-height="2" class="lh2 imTACenter"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2 imTACenter"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs16lh2 cf1 ff2"><b>Cicisbo dea et interim</b></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</span></div><div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '18/2/2019',
	utc_time: new Date(2019,1,18,13,9,0),
	month: '201902',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['Blog'] == null) x5engine.settings.imBlog.posts_cat['Blog'] = [];
x5engine.settings.imBlog.posts_cat['Blog'][x5engine.settings.imBlog.posts_cat['Blog'].length] = '000000006';
if (x5engine.settings.imBlog.posts_author[''] == null) x5engine.settings.imBlog.posts_author[''] = [];
x5engine.settings.imBlog.posts_author[''][x5engine.settings.imBlog.posts_author[''].length] = '000000006';
if (x5engine.settings.imBlog.posts_month['201902'] == null) x5engine.settings.imBlog.posts_month['201902'] = [];
x5engine.settings.imBlog.posts_month['201902'][x5engine.settings.imBlog.posts_month['201902'].length] = '000000006';
x5engine.settings.imBlog.posts_slug['minima-veniam,-quis-nostrum-exercitationem'] = '000000006';

// Post titled "Neque porro quisquam"
x5engine.settings.imBlog.posts['000000004'] = {
	id: '000000004',
	title: 'Neque porro quisquam',
	title_tag: 'Neque porro quisquam - Fashion Blog - The Golden Arch',
	title_heading_tag: 'h2',
	slug: 'neque-porro-quisquam',
	rel_url: '?neque-porro-quisquam',
	author: '',
	category: 'Blog',
	cardCover: 'blog/files/pixabay-349891_thumb.jpg',
	cover: 'blog/files/pixabay-349891.jpg',
	summary: 'Et harum quidem rerum facilis est et expedita distinctio. ',
	tag_description: 'Et harum quidem rerum facilis est et expedita distinctio. ',
	rich_data_type: [
	{
		"@type": "BlogPosting",
		"@context": "https://schema.org",
		"publisher": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"datePublished": "2019-02-18T13:03:00",
		"dateModified": "2019-02-18T13:03:00",
		"author": {
			"@type": "Organization",
			"name": "Fashion Blog"
		},
		"headline": "Neque porro quisquam",
		"description": "Et harum quidem rerum facilis est et expedita distinctio. ",
		"mainEntityOfPage": "http://127.0.0.1:8080/blog/?neque-porro-quisquam",
		"image": [
			"http://127.0.0.1:8080/images\\pixabay-3386096.jpg",
			"http://127.0.0.1:8080/images\\pixabay-438434.jpg",
			"http://127.0.0.1:8080/blog\\files\\pixabay-349891.jpg"
		],
		"speakable": {
			"@type": "SpeakableSpecification",
			"xpath": [
				"/html/head/meta[@name='title']/@content",
				"/html/head/meta[@name='description']/@content"
			]
		}
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "February 2019",
				"item": "http://127.0.0.1:8080/blog/?month=201902",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Neque porro quisquam",
				"position": 3
			}
		]
	},
	{
		"@type": "BreadcrumbList",
		"@context": "https://schema.org",
		"numberOfItems": 3,
		"itemListElement": [
			{
				"@type": "ListItem",
				"name": "Fashion Blog",
				"item": "http://127.0.0.1:8080/blog",
				"position": 1
			},
			{
				"@type": "ListItem",
				"name": "Blog",
				"item": "http://127.0.0.1:8080/blog/?category=Blog",
				"position": 2
			},
			{
				"@type": "ListItem",
				"name": "Neque porro quisquam",
				"position": 3
			}
		]
	}
],
	keywords: '',
	sources: [],
	body: '<div id="imBlogPost_000000004"><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2 imTACenter"><img class="image-1" src="../images/pixabay-3386096.jpg"  title="" alt=""/><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</span></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1"><br></span><img class="image-0 fleft" src="../images/pixabay-438434.jpg"  title="" alt=""/><br></div><div data-line-height="2" class="lh2"><span class="fs14lh2 ff1">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </span><span class="fs14lh2 ff1">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</span></div><div style="clear: both;"><!-- clear floated images --></div></div>',
	timestamp: '18/2/2019',
	utc_time: new Date(2019,1,18,13,3,0),
	month: '201902',
	comments: false,
	tag: []
};
if (x5engine.settings.imBlog.posts_cat['Blog'] == null) x5engine.settings.imBlog.posts_cat['Blog'] = [];
x5engine.settings.imBlog.posts_cat['Blog'][x5engine.settings.imBlog.posts_cat['Blog'].length] = '000000004';
if (x5engine.settings.imBlog.posts_author[''] == null) x5engine.settings.imBlog.posts_author[''] = [];
x5engine.settings.imBlog.posts_author[''][x5engine.settings.imBlog.posts_author[''].length] = '000000004';
if (x5engine.settings.imBlog.posts_month['201902'] == null) x5engine.settings.imBlog.posts_month['201902'] = [];
x5engine.settings.imBlog.posts_month['201902'][x5engine.settings.imBlog.posts_month['201902'].length] = '000000004';
x5engine.settings.imBlog.posts_slug['neque-porro-quisquam'] = '000000004';

// IDs summary
x5engine.settings.imBlog.posts_ids = ['000000009', '000000008', '000000007', '000000006', '000000004'];

x5engine.boot.push("x5engine.imBlog.show()");
x5engine.boot.push("x5engine.imForm.initForm('#blogComment')");

// End of file x5blog.js