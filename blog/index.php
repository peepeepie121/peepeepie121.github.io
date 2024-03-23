<?php require_once("../res/x5engine.php"); ?>
<?php
$blog = new imBlog();
$data = $blog->parseUrlArray(@$_GET);
if (!$data['valid']) {
	header('Location: index.php', true, 302);
}
?>
<!DOCTYPE html><!-- HTML5 -->
<html prefix="og: http://ogp.me/ns#" lang="en-GB" dir="ltr">
	<head>
		<title><?php echo $blog->pageTitle('Fashion Blog - The Golden Arch', ' - '); ?></title>
		<meta charset="utf-8" />
		<!--[if IE]><meta http-equiv="ImageToolbar" content="False" /><![endif]-->
		<meta name="author" content="Pierre Kruger" />
		<meta name="generator" content="Incomedia WebSite X5 Pro 2021.5.7 - www.websitex5.com" />
		<meta name="description" content="<?php echo $blog->pageDescription(); ?>" />
		<meta name="keywords" content="<?php echo $blog->pageKeywords(); ?>" />
		<meta property="og:locale" content="en" />
<?php if (isset($data['id'])) { echo $blog->getOpengraphTags($data['id'], "\t\t"); } ?>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<link rel="stylesheet" href="../style/reset.css?2021-5-7-0" media="screen,print" />
		<link rel="stylesheet" href="../style/print.css?2021-5-7-0" media="print" />
		<link rel="stylesheet" href="../style/style.css?2021-5-7-0" media="screen,print" />
		<link rel="stylesheet" href="../style/template.css?2021-5-7-0" media="screen" />
		<link rel="stylesheet" href="../blog/style.css?2021-5-7-0-638468129391989741" media="screen,print" />
		<script src="../res/jquery.js?2021-5-7-0"></script>
		<script src="../res/x5engine.js?2021-5-7-0" data-files-version="2021-5-7-0"></script>
		<script>
			window.onload = function(){ checkBrowserCompatibility('Your browser does not support the features necessary to display this website.','Your browser may not support the features necessary to display this website.','[1]Update your browser[/1] or [2]continue without updating[/2].','http://outdatedbrowser.com/'); };
			x5engine.settings.currentPath = '../';
			x5engine.utils.currentPagePath = 'blog/index.php';
			x5engine.boot.push(function () { x5engine.imPageToTop.initializeButton({}); });
		</script>
		<?php
$blogBaseUrl = $imSettings['general']['url'] . 'blog';
$urlData = $blog->parseUrlArray(@$_GET);
$numPosts = $blog->getPostsCount();
$pagStart = array_key_exists("start", $urlData) ? $urlData['start'] : 0;
$pagLength = $imSettings['blog']['home_posts_number'];
$isPostPage = false;
if (array_key_exists('slug', $urlData)) {
	$isPostPage = true;
	$href = $blogBaseUrl . '/?' . $urlData['slug'];
}
else if (array_key_exists('id', $urlData)) {
	$isPostPage = true;
	$href = $blogBaseUrl . '/' . $blog->getSlugUrl($urlData['id']);
}
else if (array_key_exists('category', $urlData)) {
	$category = $blog->getUnescapedCategory($urlData['category']);
	if ($category !== NULL) {
		$href = $blogBaseUrl . '/?category=' . urlencode(str_replace(' ', '_', $category));
	}
}
else if (array_key_exists('author', $urlData)) {
	$author = $blog->getUnescapedAuthor($urlData['author']);
	if ($author !== NULL) {
		$href = $blogBaseUrl . '/?author=' . urlencode(str_replace(' ', '_', $author));
	}
}
else if (array_key_exists('tag', $urlData)) {
	$href = $blogBaseUrl . '/?tag=' . urlencode($urlData['tag']);
}
else if (array_key_exists('month', $urlData)) {
	$href = $blogBaseUrl . '/?month=' . urlencode($urlData['month']);
}
else {
	$href = $blogBaseUrl;
}
if ($isPostPage || $pagStart == 0) {
	echo '<link rel="canonical" href="'. $href. '"/>' . PHP_EOL;
}
if (!$isPostPage && $numPosts > $pagLength) {
	if ($pagStart - $pagLength >= 0) {
		$prev = 'start=' . ($pagStart - $pagLength) . '&length=' . $pagLength;
		$prev = ($href == $blogBaseUrl) ? '?' . $prev : '&' . $prev;
		echo '<link rel="prev" href="' . $href . $prev . '"/>' . PHP_EOL;
	}
	if ($pagStart + $pagLength < $numPosts) {
		$next = 'start=' . ($pagStart + $pagLength) . '&length=' . $pagLength;
		$next = ($href == $blogBaseUrl) ? '?' . $next : '&' . $next;
		echo '<link rel="next" href="' . $href . $next . '"/>' . PHP_EOL;
	}
}
$rich_data_string = $blog->getRichDataType();
if (!is_null($rich_data_string)) {
	echo '		<script type="application/ld+json">
' . $rich_data_string . '
		</script>
';
}
?>
		<script>x5engine.boot.push(function () {x5engine.analytics.setPageView({ "postUrl": "../analytics/wsx5analytics.php" });});</script>

	</head>
	<body>
		<div id="imPageExtContainer">
			<div id="imPageIntContainer">
				<div id="imHeaderBg"></div>
				<div id="imFooterBg"></div>
				<div id="imPage">
					<header id="imHeader">
						<h1 class="imHidden"><?php echo $blog->pageHeaderTitle('Fashion Blog - The Golden Arch', ' - '); ?></h1>
						<div id="imHeaderObjects"><div id="imHeader_imObjectTitle_01_wrapper" class="template-object-wrapper"><div id="imHeader_imObjectTitle_01"><span id ="imHeader_imObjectTitle_01_text" ><a href="../index.html" onclick="return x5engine.utils.location('../index.html', null, false)">The Golden Arch</a></span></div></div><div id="imHeader_imMenuObject_02_wrapper" class="template-object-wrapper"><!-- UNSEARCHABLE --><div id="imHeader_imMenuObject_02"><div id="imHeader_imMenuObject_02_container"><div class="hamburger-button hamburger-component"><div><div><div class="hamburger-bar"></div><div class="hamburger-bar"></div><div class="hamburger-bar"></div></div></div></div><div class="hamburger-menu-background-container hamburger-component">
	<div class="hamburger-menu-background menu-mobile menu-mobile-animated hidden">
		<div class="hamburger-menu-close-button"><span>&times;</span></div>
	</div>
</div>
<ul class="menu-mobile-animated hidden">
	<li class="imMnMnFirst imPage" data-link-paths=",/index.html,/">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../index.html">
Home Page		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/about-us.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../about-us.html">
About Us		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/digital-media.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../digital-media.html">
Digital Media		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/our-stories.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../our-stories.html">
Our Stories		</a>
</div>
</div>
	</li><li class="imMnMnLast imPage" data-link-paths=",/references.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../references.html">
References		</a>
</div>
</div>
	</li></ul></div></div><!-- UNSEARCHABLE END --><script>
var imHeader_imMenuObject_02_settings = {
	'menuId': 'imHeader_imMenuObject_02',
	'responsiveMenuEffect': 'reveal',
	'animationDuration': 1000,
}
x5engine.boot.push(function(){x5engine.initMenu(imHeader_imMenuObject_02_settings)});
$(function () {$('#imHeader_imMenuObject_02_container ul li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        if($(this).parents('#imHeader_imMenuObject_02_container-menu-opened').length > 0) return;         clearTimeout(timeout);        setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeIn(); }, 250);    }).on('mouseleave', function () {        if($(this).parents('#imHeader_imMenuObject_02_container-menu-opened').length > 0) return;         timeout = setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeOut(); }, 250);    });});});

</script>
</div><div id="imHeader_imMenuObject_03_wrapper" class="template-object-wrapper"><!-- UNSEARCHABLE --><div id="imHeader_imMenuObject_03"><div id="imHeader_imMenuObject_03_container"><div class="hamburger-button hamburger-component"><div><div><div class="hamburger-bar"></div><div class="hamburger-bar"></div><div class="hamburger-bar"></div></div></div></div><div class="hamburger-menu-background-container hamburger-component">
	<div class="hamburger-menu-background menu-mobile menu-mobile-animated hidden">
		<div class="hamburger-menu-close-button"><span>&times;</span></div>
	</div>
</div>
<ul class="menu-mobile-animated hidden">
	<li class="imMnMnFirst imPage" data-link-paths=",/index.html,/">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../index.html">
Home Page		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/about-us.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../about-us.html">
About Us		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/digital-media.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../digital-media.html">
Digital Media		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/our-stories.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../our-stories.html">
Our Stories		</a>
</div>
</div>
	</li><li class="imMnMnLast imPage" data-link-paths=",/references.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../references.html">
References		</a>
</div>
</div>
	</li></ul></div></div><!-- UNSEARCHABLE END --><script>
var imHeader_imMenuObject_03_settings = {
	'menuId': 'imHeader_imMenuObject_03',
	'responsiveMenuEffect': 'slide',
	'animationDuration': 1000,
}
x5engine.boot.push(function(){x5engine.initMenu(imHeader_imMenuObject_03_settings)});
$(function () {$('#imHeader_imMenuObject_03_container ul li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        if($(this).parents('#imHeader_imMenuObject_03_container-menu-opened').length > 0) return;         clearTimeout(timeout);        setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeIn(); }, 250);    }).on('mouseleave', function () {        if($(this).parents('#imHeader_imMenuObject_03_container-menu-opened').length > 0) return;         timeout = setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeOut(); }, 250);    });});});

</script>
</div></div>
					</header>
					<div id="imStickyBarContainer">
						<div id="imStickyBarGraphics"></div>
						<div id="imStickyBar">
							<div id="imStickyBarObjects"><div id="imStickyBar_imObjectTitle_01_wrapper" class="template-object-wrapper"><div id="imStickyBar_imObjectTitle_01"><span id ="imStickyBar_imObjectTitle_01_text" >Clothes</span></div></div><div id="imStickyBar_imMenuObject_02_wrapper" class="template-object-wrapper"><!-- UNSEARCHABLE --><div id="imStickyBar_imMenuObject_02"><div id="imStickyBar_imMenuObject_02_container"><div class="hamburger-button hamburger-component"><div><div><div class="hamburger-bar"></div><div class="hamburger-bar"></div><div class="hamburger-bar"></div></div></div></div><div class="hamburger-menu-background-container hamburger-component">
	<div class="hamburger-menu-background menu-mobile menu-mobile-animated hidden">
		<div class="hamburger-menu-close-button"><span>&times;</span></div>
	</div>
</div>
<ul class="menu-mobile-animated hidden">
	<li class="imMnMnFirst imPage" data-link-paths=",/index.html,/">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../index.html">
Home Page		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/about-us.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../about-us.html">
About Us		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/digital-media.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../digital-media.html">
Digital Media		</a>
</div>
</div>
	</li><li class="imMnMnMiddle imPage" data-link-paths=",/our-stories.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../our-stories.html">
Our Stories		</a>
</div>
</div>
	</li><li class="imMnMnLast imPage" data-link-paths=",/references.html">
<div class="label-wrapper">
<div class="label-inner-wrapper">
		<a class="label" href="../references.html">
References		</a>
</div>
</div>
	</li></ul></div></div><!-- UNSEARCHABLE END --><script>
var imStickyBar_imMenuObject_02_settings = {
	'menuId': 'imStickyBar_imMenuObject_02',
	'responsiveMenuEffect': 'reveal',
	'animationDuration': 1000,
}
x5engine.boot.push(function(){x5engine.initMenu(imStickyBar_imMenuObject_02_settings)});
$(function () {$('#imStickyBar_imMenuObject_02_container ul li').not('.imMnMnSeparator').each(function () {    var $this = $(this), timeout = 0;    $this.on('mouseenter', function () {        if($(this).parents('#imStickyBar_imMenuObject_02_container-menu-opened').length > 0) return;         clearTimeout(timeout);        setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeIn(); }, 250);    }).on('mouseleave', function () {        if($(this).parents('#imStickyBar_imMenuObject_02_container-menu-opened').length > 0) return;         timeout = setTimeout(function () { $this.children('ul, .multiple-column').stop(false, false).fadeOut(); }, 250);    });});});

</script>
</div></div>
						</div>
					</div>
					<a class="imHidden" href="#imGoToCont" title="Skip the main menu">Go to content</a>
					<div id="imSideBar">
						<div id="imSideBarObjects"><div id="imSideBar_imObjectImage_01_wrapper" class="template-object-wrapper"><div id="imSideBar_imObjectImage_01"><div id="imSideBar_imObjectImage_01_container"><img src="../images/empty-GT_imagea-1-.png" title="" alt="" />
</div></div></div></div>
					</div>
					<div id="imContentGraphics"></div>
					<main id="imContent">
						<a id="imGoToCont"></a>
						<div id="imBlogPage" class="<?php echo (isset($data['id']) ? 'imBlogArticle' : 'imBlogHome'); ?>"><<?php echo (isset($data['id']) ? 'article' : 'div'); ?> id="imBlogContent"><?php
						$blog->setCommentsPerPage(10);
						if(isset($data['id']))
							$blog->showPost($data['id'],1);
						else if(isset($data['category']))
							$blog->showCategory($data['category']);
						else if(isset($data['author']))
							$blog->showAuthor($data['author']);
						else if(isset($data['tag']))
							$blog->showTag($data['tag']);
						else if(isset($data['month']))
							$blog->showMonth($data['month']);
						else if(isset($data['search']))
							$blog->showSearch($data['search']);
						else
							$blog->showLast(10);
						?>
						</<?php echo (isset($data['id']) ? 'article' : 'div'); ?>>
						<aside id="imBlogSidebar">
						</aside>
						<script>
							x5engine.boot.push(function () { 
								x5engine.blogSidebarScroll({ enabledBreakpoints: ['0ab4296b02fc984e388003b44ef6597e', '72e5146e7d399bc2f8a12127e43469f1'] });
								var postHeightAtDesktop = 300,
									postWidthAtDesktop = 1070;
								if ($('#imBlogPage').hasClass('imBlogArticle')) {
									var coverResizeTo = null,
										coverWidth = 0;
									x5engine.utils.onElementResize($('.imBlogPostCover')[0], function (rect, target) {
										if (coverWidth == rect.width) {
											return;
										}
										coverWidth = rect.width;
										if (!!coverResizeTo) {
											clearTimeout(coverResizeTo);
										}
										coverResizeTo = setTimeout(function() {
											$('.imBlogPostCover').height(postHeightAtDesktop * coverWidth / postWidthAtDesktop + 'px');
										}, 50);
									});
								}
							});
						</script>
						</div>
					</main>
					<footer id="imFooter">
						<div id="imFooterObjects"><div id="imFooter_imTextObject_01_wrapper" class="template-object-wrapper"><div id="imFooter_imTextObject_01">
	<div data-index="0"  class="text-tab-content grid-prop current-tab "  id="imFooter_imTextObject_01_tab0" style="opacity: 1; ">
		<div class="text-inner">
			<div class="imTACenter"><span class="fs10lh1-5 cf1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </span><span class="fs10lh1-5 cf1">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</span></div><div class="imTACenter"><span class="fs10lh1-5 cf1"><br></span></div><div class="imTACenter"><span class="fs10lh1-5 cf1"><span class="imUl">Adspicitur reliquiae</span> &nbsp;&nbsp;| &nbsp;<span class="imUl"> Romol set anime</span></span></div>
		</div>
	</div>

</div>
</div><div id="imFooter_imObjectForm_02_wrapper" class="template-object-wrapper"><div id="imFooter_imObjectForm_02">	<form id="imObjectForm_2_form" action="../imemail/imEmailForm.php" method="post" enctype="multipart/form-data">
		<fieldset class="first">
		<div>
			<div id="imObjectForm_2_1_container" class="imObjectFormFieldContainer"><div id="imObjectForm_2_1_field">
<input type="text" class="" id="imObjectForm_2_1" name="imObjectForm_2_1" placeholder="Tell me your name" /></div>
</div>
			<div id="imObjectForm_2_2_container" class="imObjectFormFieldContainer"><div id="imObjectForm_2_2_field">
<input type="email" class="valEmail" id="imObjectForm_2_2" name="imObjectForm_2_2" placeholder="... and your email address" /></div>
</div>
			</div>
		</fieldset>
		<fieldset>
			<input type="text" id="imObjectForm_2_prot" name="imSpProt" />
		</fieldset>
		<div id="imObjectForm_2_buttonswrap">
			<input type="submit" value="Send" />
		</div>
	</form>
</div>
<script>x5engine.boot.push('x5engine.imForm.initForm(\'#imObjectForm_2_form\', false, {jsid: \'BBC8348E61068DA6E7AE7AC2E7881C6D\', type: \'tip\', showAll: true, classes: \'validator\', landingPage: \'index.html\', phpAction: \'../imemail/imEmailForm.php\', feedbackMode: \'showPage\', messageBackground: \'rgba(55, 71, 79, 1)\', messageBackgroundBlur: false, labelColor: \'rgba(192, 192, 192, 1)\', fieldColor: \'rgba(224, 224, 224, 1)\', selectedFieldColor: \'rgba(255, 255, 255, 1)\'})');</script>
</div></div>
					</footer>
				</div>
				<span class="imHidden"><a href="#imGoToCont" title="Read this page again">Back to content</a></span>
			</div>
		</div>
		
		<noscript class="imNoScript"><div class="alert alert-red">To use this website you must enable JavaScript.</div></noscript>
	</body>
</html>
