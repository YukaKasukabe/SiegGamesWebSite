//member スライドショーの画像設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;

      if (windowwidth > 768){
      var responsiveImage = [//PC用の画像
      { src: 'images/hero_massege_001.jpg'}
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/hero_massege_001.jpg'}
      ];
    }

//スライドショーベース設定	--------------------------------
$('.hero-image-slider').vegas({
  overlay: 'images/slider_overlays_01.png',//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'fade',//切り替わりのアニメーション//fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn、blurblur2、flash、flash2が設定可能。
  transitionDuration: 3000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 5000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 30000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburnsUp',//スライドアニメーションの種類//kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage,//画像設定を読む
  timer:false, //プログレスバー非表示
});
// --------------------------------



// (function(){
//   // Vertical Timeline - by CodyHouse.co
// 	function VerticalTimeline( element ) {
// 		this.element = element;
// 		this.blocks = this.element.getElementsByClassName("cd-timeline__block");
// 		this.images = this.element.getElementsByClassName("cd-timeline__img");
// 		this.contents = this.element.getElementsByClassName("cd-timeline__content");
// 		this.offset = 0.8;
// 		this.hideBlocks();
// 	};

// 	VerticalTimeline.prototype.hideBlocks = function() {
// 		if ( !"classList" in document.documentElement ) {
// 			return; // no animation on older browsers
// 		}
// 		//hide timeline blocks which are outside the viewport
// 		var self = this;
// 		for( var i = 0; i < this.blocks.length; i++) {
// 			(function(i){
// 				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
// 					self.images[i].classList.add("cd-timeline__img--hidden"); 
// 					self.contents[i].classList.add("cd-timeline__content--hidden"); 
// 				}
// 			})(i);
// 		}
// 	};

// 	VerticalTimeline.prototype.showBlocks = function() {
// 		if ( ! "classList" in document.documentElement ) {
// 			return;
// 		}
// 		var self = this;
// 		for( var i = 0; i < this.blocks.length; i++) {
// 			(function(i){
// 				if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
// 					// add bounce-in animation
// 					self.images[i].classList.add("cd-timeline__img--bounce-in");
// 					self.contents[i].classList.add("cd-timeline__content--bounce-in");
// 					self.images[i].classList.remove("cd-timeline__img--hidden");
// 					self.contents[i].classList.remove("cd-timeline__content--hidden");
// 				}
// 			})(i);
// 		}
// 	};

// 	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
// 		verticalTimelinesArray = [],
// 		scrolling = false;
// 	if( verticalTimelines.length > 0 ) {
// 		for( var i = 0; i < verticalTimelines.length; i++) {
// 			(function(i){
// 				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
// 			})(i);
// 		}

// 		//show timeline blocks on scrolling
// 		window.addEventListener("scroll", function(event) {
// 			if( !scrolling ) {
// 				scrolling = true;
// 				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
// 			}
// 		});
// 	}

// 	function checkTimelineScroll() {
// 		verticalTimelinesArray.forEach(function(timeline){
// 			timeline.showBlocks();
// 		});
// 		scrolling = false;
// 	};
// })();


	// // history-timeline	--------------------------------
	// jQuery(document).ready(function($){
	// 	var timelines = $('.member-history-content'),
	// 		eventsMinDistance = 60;
	
	// 	(timelines.length > 0) && initTimeline(timelines);
	
	// 	function initTimeline(timelines) {
	// 		timelines.each(function(){
	// 			var timeline = $(this),
	// 				timelineComponents = {};
	// 			//cache timeline components 
	// 			timelineComponents['timelineWrapper'] = timeline.find('.president-history-inview');
	// 			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.president-history-years');
	// 			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.president-history-years-line');
	// 			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
	// 			timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
	// 			timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
	// 			timelineComponents['timelineNavigation'] = timeline.find('.president-history-arrow');
	// 			timelineComponents['eventsContent'] = timeline.children('.president-history-details');
	
	// 			//assign a left postion to the single events along the timeline
	// 			setDatePosition(timelineComponents, eventsMinDistance);
	// 			//assign a width to the timeline
	// 			var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
	// 			//the timeline has been initialize - show it
	// 			timeline.addClass('loaded');
	
	// 			//次のページクリック
	// 			timelineComponents['timelineNavigation'].on('click', '.next', function(event){
	// 				event.preventDefault();
	// 				updateSlide(timelineComponents, timelineTotWidth, 'next');
	// 			});
	// 			//前のページクリック
	// 			timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
	// 				event.preventDefault();
	// 				updateSlide(timelineComponents, timelineTotWidth, 'prev');
	// 			});
	// 			//クリックしたページを表示
	// 			timelineComponents['eventsWrapper'].on('click', 'a', function(event){
	// 				event.preventDefault();
	// 				timelineComponents['timelineEvents'].removeClass('selected');
	// 				$(this).addClass('selected');
	// 				updateOlderEvents($(this));
	// 				updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
	// 				updateVisibleContent($(this), timelineComponents['eventsContent']);
	// 			});
	
	// 			//スワイプでページ送り
	// 			timelineComponents['eventsContent'].on('swipeleft', function(){
	// 				var mq = checkMQ();
	// 				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
	// 			});
	// 			timelineComponents['eventsContent'].on('swiperight', function(){
	// 				var mq = checkMQ();
	// 				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
	// 			});
	
	// 			//keyboard navigation
	// 			$(document).keyup(function(event){
	// 				if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
	// 					showNewContent(timelineComponents, timelineTotWidth, 'prev');
	// 				} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
	// 					showNewContent(timelineComponents, timelineTotWidth, 'next');
	// 				}
	// 			});
	// 		});
	// 	}
	
	// 	function updateSlide(timelineComponents, timelineTotWidth, string) {
	// 		//eventsWrapperの値を取得
	// 		var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
	// 			wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
	// 		//タイムラインを左にスライド
	// 		(string == 'next') 
	// 			? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
	// 			: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
	// 	}
	
	// 	function showNewContent(timelineComponents, timelineTotWidth, string) {
	// 		//現在表示しているイベントから次/前のイベントを表示
	// 		var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
	// 			newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();
	
	// 		if ( newContent.length > 0 ) { //次/前がある場合表示
	// 			var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
	// 				newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
				
	// 			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
	// 			updateVisibleContent(newEvent, timelineComponents['eventsContent']);
	// 			newEvent.addClass('selected');
	// 			selectedDate.removeClass('selected');
	// 			updateOlderEvents(newEvent);
	// 			updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
	// 		}
	// 	}
	
	// 	function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
	// 		//選択したイベントに応じてタイムラインを左右に移動
	// 		var eventStyle = window.getComputedStyle(event.get(0), null),
	// 			eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
	// 			timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
	// 			timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
	// 		var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);
	
	// 		if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
	// 			translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
	// 		}
	// 	}
	
	// 	function translateTimeline(timelineComponents, value, totWidth) {
	// 		var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
	// 		value = (value > 0) ? 0 : value; //only negative translate value
	// 		value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
	// 		setTransformValue(eventsWrapper, 'translateX', value+'px');
	// 		//update navigation arrows visibility
	// 		(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
	// 		(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
	// 	}
	
	// 	function updateFilling(selectedEvent, filling, totWidth) {
	// 		// 選択したイベントに応じて .filling-line の長さを変更します
	// 		var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
	// 			eventLeft = eventStyle.getPropertyValue("left"),
	// 			eventWidth = eventStyle.getPropertyValue("width");
	// 		eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
	// 		var scaleValue = eventLeft/totWidth;
	// 		setTransformValue(filling.get(0), 'scaleX', scaleValue);
	// 	}
	
	// 	function setDatePosition(timelineComponents, min) {
	// 		for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
	// 			var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
	// 				distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
	// 			timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
	// 		}
	// 	}
	
	// 	function setTimelineWidth(timelineComponents, width) {
	// 		var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
	// 			timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
	// 			timeSpanNorm = Math.round(timeSpanNorm) + 4,
	// 			totalWidth = timeSpanNorm*width;
	// 		timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
	// 		updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);
		
	// 		return totalWidth;
	// 	}
	
	// 	function updateVisibleContent(event, eventsContent) {
	// 		var eventDate = event.data('date'),
	// 			visibleContent = eventsContent.find('.selected'),
	// 			selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
	// 			selectedContentHeight = selectedContent.height();
	
	// 		if (selectedContent.index() > visibleContent.index()) {
	// 			var classEnetering = 'selected enter-right',
	// 				classLeaving = 'leave-left';
	// 		} else {
	// 			var classEnetering = 'selected enter-left',
	// 				classLeaving = 'leave-right';
	// 		}
	
	// 		selectedContent.attr('class', classEnetering);
	// 		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
	// 			visibleContent.removeClass('leave-right leave-left');
	// 			selectedContent.removeClass('enter-left enter-right');
	// 		});
	// 		eventsContent.css('height', selectedContentHeight+'px');
	// 	}
	
	// 	function updateOlderEvents(event) {
	// 		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
	// 	}
	
	// 	function getTranslateValue(timeline) {
	// 		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
	// 			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
	// 				 timelineStyle.getPropertyValue("-moz-transform") ||
	// 				 timelineStyle.getPropertyValue("-ms-transform") ||
	// 				 timelineStyle.getPropertyValue("-o-transform") ||
	// 				 timelineStyle.getPropertyValue("transform");
	
	// 		if( timelineTranslate.indexOf('(') >=0 ) {
	// 			var timelineTranslate = timelineTranslate.split('(')[1];
	// 			timelineTranslate = timelineTranslate.split(')')[0];
	// 			timelineTranslate = timelineTranslate.split(',');
	// 			var translateValue = timelineTranslate[4];
	// 		} else {
	// 			var translateValue = 0;
	// 		}
	
	// 		return Number(translateValue);
	// 	}
	
	// 	function setTransformValue(element, property, value) {
	// 		element.style["-webkit-transform"] = property+"("+value+")";
	// 		element.style["-moz-transform"] = property+"("+value+")";
	// 		element.style["-ms-transform"] = property+"("+value+")";
	// 		element.style["-o-transform"] = property+"("+value+")";
	// 		element.style["transform"] = property+"("+value+")";
	// 	}
	
	// 	//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
	// 	function parseDate(events) {
	// 		var dateArrays = [];
	// 		events.each(function(){
	// 			var dateComp = $(this).data('date').split('/'),
	// 				newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
	// 			dateArrays.push(newDate);
	// 		});
	// 		return dateArrays;
	// 	}
	
	// 	function parseDate2(events) {
	// 		var dateArrays = [];
	// 		events.each(function(){
	// 			var singleDate = $(this),
	// 				dateComp = singleDate.data('date').split('T');
	// 			if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
	// 				var dayComp = dateComp[0].split('/'),
	// 					timeComp = dateComp[1].split(':');
	// 			} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
	// 				var dayComp = ["2000", "0", "0"],
	// 					timeComp = dateComp[0].split(':');
	// 			} else { //only DD/MM/YEAR
	// 				var dayComp = dateComp[0].split('/'),
	// 					timeComp = ["0", "0"];
	// 			}
	// 			var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
	// 			dateArrays.push(newDate);
	// 		});
	// 		return dateArrays;
	// 	}
	
	// 	function daydiff(first, second) {
	// 		return Math.round((second-first));
	// 	}
	
	// 	function minLapse(dates) {
	// 		//イベント間の最小距離を決定する
	// 		var dateDistances = [];
	// 		for (i = 1; i < dates.length; i++) { 
	// 			var distance = daydiff(dates[i-1], dates[i]);
	// 			dateDistances.push(distance);
	// 		}
	// 		return Math.min.apply(null, dateDistances);
	// 	}
	
	// 	/*
	// 		How to tell if a DOM element is visible in the current viewport?
	// 		http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	// 	*/
	// 	function elementInViewport(el) {
	// 		var top = el.offsetTop;
	// 		var left = el.offsetLeft;
	// 		var width = el.offsetWidth;
	// 		var height = el.offsetHeight;
	
	// 		while(el.offsetParent) {
	// 			el = el.offsetParent;
	// 			top += el.offsetTop;
	// 			left += el.offsetLeft;
	// 		}
	
	// 		return (
	// 			top < (window.pageYOffset + window.innerHeight) &&
	// 			left < (window.pageXOffset + window.innerWidth) &&
	// 			(top + height) > window.pageYOffset &&
	// 			(left + width) > window.pageXOffset
	// 		);
	// 	}
	
	// 	function checkMQ() {
	// 		// モバイルかデスクトップかを判定
	// 		return window.getComputedStyle(document.querySelector('.member-history-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	// 	}
	// });