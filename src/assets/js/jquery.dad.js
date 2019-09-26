/*!
 * jquery.dad.js v1 (http://konsolestudio.com/dad)
 * Author William Lima
 */
(function($) {
	"use strict";

	function O_dad() {
		var self = this;
		this.x = 0;
		this.y = 0;
		this.target = false;
		this.clone = false;
		this.placeholder = false;
		this.cloneoffset = {
			x: 0,
			y: 0
		};
		this.move = function(e) {
			//console.log(e.originalEvent.targetTouches[0].pageX)
			self.x = e.pageX||e.originalEvent.targetTouches[0].pageX;
			self.y = e.pageY||e.originalEvent.targetTouches[0].pageY;
			if (self.clone != false && self.target != false) {
				self.clone.css({
					top: self.y - self.cloneoffset.y,
					left: self.x - self.cloneoffset.x
				})
			} else {}
		};
		$(window).on('mousemove touchmove', function(e) {
			self.move(e)
		})
		
	}
	$.prototype.dad = function(opts) {
		var me, defaults, options;
		me = this;
		defaults = {
			target: '>div:not(".example")',
			draggable: false,
			placeholder: 'drop here',
			callback: false,
			containerClass: 'dad-container',
			childrenClass: 'dads-children',
			cloneClass: 'dads-children-clone',
			active: true
		};
		options = $.extend({}, defaults, opts);
		$(this).each(function() {
			var mouse, target, dragClass, active, callback, placeholder, daddy, childrenClass, jQclass, cloneClass;
			mouse = new O_dad();
			active = options.active;
			daddy = $(this);
			if (!daddy.hasClass('dad-active') && active == true) daddy.addClass('dad-active');
			childrenClass = options.childrenClass;
			cloneClass = options.cloneClass;
			jQclass = '.' + childrenClass;
			daddy.addClass(options.containerClass);
			target = daddy.find(options.target);

			placeholder = options.placeholder;
			callback = options.callback;
			dragClass = 'dad-draggable-area';
			me.addDropzone = function(selector, func) {
				$(selector).on('mouseenter touchstart', function(e) {
                    e.preventDefault();
					//console.log(mouse.target)
					if (mouse.target != false) {
						mouse.placeholder.css({
							display: 'none'
						});
						mouse.target.css({
							display: 'none'
						});
						$(this).addClass('active')
					}
				}).on('mouseup touchend', function(e) {
					//console.log(mouse);
					if (mouse.target != false) {
						mouse.placeholder.css({
							display: 'block'
						});
						mouse.target.css({
							display: 'block'
						});
						func(mouse.target);
						dad_end()
					}
					$(this).removeClass('active')
				}).on('mouseleave touchleave', function() {
					if (mouse.target != false) {
						mouse.placeholder.css({
							display: 'block'
						});
						mouse.target.css({
							display: 'block'
						})
					}
					$(this).removeClass('active')
				})
			};
			me.getPosition = function() {
				var positionArray = [];
				$(this).find(jQclass).each(function() {
					positionArray[$(this).attr('data-dad-id')] = parseInt($(this).attr('data-dad-position'))
				});
				return positionArray
			};
			me.activate = function() {
				active = true;
				if (!daddy.hasClass('dad-active')) {
					daddy.addClass('dad-active')
				}
				return me
			};
			me.deactivate = function() {
				active = false;
				daddy.removeClass('dad-active');
				return me
			};
			$(document).on('mouseup touchend', function(e) {
				dad_end(e)
			});
			var order = 1;

			target.addClass(childrenClass).each(function() {
				if ($(this).data('dad-id') == undefined) {
					$(this).attr('data-dad-id', order)
				}
				$(this).attr('data-dad-position', order);
				order++
			});

			function update_position(e) {
				var order = 1;
				e.find(jQclass).each(function() {
					$(this).attr('data-dad-position', order);
					order++
				})
			}
			function dad_end() {
				//console.log(e)
				if (mouse.target != false && mouse.clone != false) {
					if (callback != false) {
						callback(mouse.target)
					}
					var appear = mouse.target;
					var desapear = mouse.clone;
					var holder = mouse.placeholder;
					var bLeft = 0;
					Math.floor(parseFloat(daddy.css('border-left-width')));
					var bTop = 0;
					Math.floor(parseFloat(daddy.css('border-top-width')));
					//console.log(mouse.target[0])
					if ($.contains(daddy[0], mouse.target[0])) {
						mouse.clone.animate({
							top: mouse.target.offset().top - daddy.offset().top - bTop,
							left: mouse.target.offset().left - daddy.offset().left - bLeft
						}, 300, function() {
							appear.css({
								visibility: 'visible'
							}).removeClass('active');
							desapear.remove()
						})
					} else {
						mouse.clone.fadeOut(300, function() {
							desapear.remove()
						})
					}
					holder.remove();
					mouse.clone = false;
					mouse.placeholder = false;
					mouse.target = false;
					update_position(daddy)
				}
				$("html,body").removeClass('dad-noSelect')
			}
			function dad_update(obj) {
				//console.log(obj)
				if (mouse.target != false && mouse.clone != false) {
					var newplace, origin;
					origin = $('<span style="display:none"></span>');
					newplace = $('<span style="display:none"></span>');
				//	console.log(obj.prevAll().hasClass('active'))
					if (obj.prevAll().hasClass('active')) {
						obj.after(newplace)
					} else {
						obj.before(newplace)
                       // obj.after(newplace)
					}

					//console.log($(mouse.target).hasClass('item1'))
					var mouseWidth = $(mouse.target).outerWidth();
					var mouseHeight = $(mouse.target).outerHeight();
					//console.log(mouseWidth);
					if($(mouse.target).hasClass('item1')){
						mouseWidth = 2*mouseWidth;
						mouseHeight = 2*mouseHeight;
					}
					//console.log(mouse.target.outerWidth()/daddy.outerWidth() )
					//console.log(mouseWidth/daddy.outerWidth())
                   // console.log(daddy.outerWidth())
					if(mouseWidth/daddy.outerWidth() <= 0.3){

					}else{
						newplace.before(mouse.target);
					}
					mouse.target.before(origin);
					newplace.before(mouse.target);
					//console.log(mouse.target);
					mouse.placeholder.css({
						top: mouse.target.offset().top - daddy.offset().top,
						left: mouse.target.offset().left - daddy.offset().left,
						width: $(mouse.target).outerWidth()- 5,
						height: $(mouse.target).outerHeight() - 5
					});
					origin.remove();
					newplace.remove()
				}
			}
			var jq = (options.draggable != false) ? options.draggable : jQclass;
			console.log(jq )
			daddy.find(jq).addClass(dragClass);
			daddy.find(jq).on('touchstart', function(e) {
                e.preventDefault();
				if (mouse.target == false && e.which == 0 && active == true) {
				    console.log($(e.target.parentNode).hasClass('delItem'))
				    if($(e.target.parentNode).hasClass('delItem')){
				        console.log(me)
                        me.addDropzone = null;
                        daddy.find(jq).off("touchstart");
                        daddy.find(jq).off("touchmove");
                        daddy.find(jq).off("mouseover");
                        daddy.find(jq).off("mousedown");
                        daddy.find(jq).removeClass(dragClass);
                        $(e.target.parentNode).click();
                        return false;
                    }
                    if($(e.target.parentNode).hasClass('addDiv')){
                        me.addDropzone = null;
                        daddy.find(jq).off("touchstart");
                        daddy.find(jq).off("touchmove");
                        daddy.find(jq).off("mouseover");
                        daddy.find(jq).off("mousedown");
                        daddy.find(jq).removeClass(dragClass);
                        $(e.target)[0].click();
                        return false;
                    }
					if (options.draggable != false) {
						mouse.target = daddy.find(jQclass).has(this)
					} else {
						mouse.target = $(this)
					}
					mouse.clone = mouse.target.clone();
					mouse.target.css({
						visibility: 'hidden'
					}).addClass('active');
					mouse.clone.addClass(cloneClass);
					daddy.append(mouse.clone);
					mouse.placeholder = $('<div></div>');
					mouse.placeholder.addClass('dads-children-placeholder')
					/*console.log( mouse.target.offset().left)
					console.log(e.originalEvent.targetTouches[0].pageX)*/
					mouse.placeholder.css({
						top: mouse.target.offset().top - daddy.offset().top,
						left: mouse.target.offset().left - daddy.offset().left,
						width: mouse.target.outerWidth() - 5,
						height: mouse.target.outerHeight() - 5,
						lineHeight: mouse.target.height() - 2 + 'px',
						textAlign: 'center'
					}).text(placeholder);
					//console.log(mouse.placeholder)
					daddy.append(mouse.placeholder);
					var difx, dify;
					var bLeft = Math.floor(parseFloat(daddy.css('border-left-width')));
					var bTop = Math.floor(parseFloat(daddy.css('border-top-width')));
					
					difx = e.originalEvent.targetTouches[0].pageX - mouse.target.offset().left + daddy.offset().left + bLeft;
					dify = e.originalEvent.targetTouches[0].pageY - mouse.target.offset().top + daddy.offset().top + bTop;
					mouse.cloneoffset.x = difx;
					mouse.cloneoffset.y = dify;

					mouse.clone.removeClass(childrenClass).css({
						position: 'absolute',
						top: mouse.y - mouse.cloneoffset.y,
						left: mouse.x - mouse.cloneoffset.x
					});
					$("html,body").addClass('dad-noSelect')
				}
			});
			daddy.find(jq).on('mousedown', function(e) {
                e.preventDefault();
				if (mouse.target == false && e.which == 1 && active == true) {
					if (options.draggable != false) {
						mouse.target = daddy.find(jQclass).has(this)
					} else {
						mouse.target = $(this)
					}
					mouse.clone = mouse.target.clone();
					mouse.target.css({
						visibility: 'hidden'
					}).addClass('active');
					mouse.clone.addClass(cloneClass);
					daddy.append(mouse.clone);
					mouse.placeholder = $('<div></div>');
					mouse.placeholder.addClass('dads-children-placeholder');
					mouse.placeholder.css({
						top: mouse.target.offset().top - daddy.offset().top,
						left: mouse.target.offset().left - daddy.offset().left,
						width: mouse.target.outerWidth() - 10,
						height: mouse.target.outerHeight() - 10,
						lineHeight: mouse.target.height() - 18 + 'px',
						textAlign: 'center'
					}).text(placeholder);
					daddy.append(mouse.placeholder);
					var difx, dify;
					var bLeft = Math.floor(parseFloat(daddy.css('border-left-width')));
					var bTop = Math.floor(parseFloat(daddy.css('border-top-width')));
					difx = mouse.x - mouse.target.offset().left + daddy.offset().left + bLeft;
					dify = mouse.y - mouse.target.offset().top + daddy.offset().top + bTop;
					mouse.cloneoffset.x = difx;
					mouse.cloneoffset.y = dify;
					mouse.clone.removeClass(childrenClass).css({
						position: 'absolute',
						top: mouse.y - mouse.cloneoffset.y,
						left: mouse.x - mouse.cloneoffset.x
					});
					$("html,body").addClass('dad-noSelect')
				}
			});
			$(jQclass).on('mouseenter', function() {
				dad_update($(this))
			})
			$(jQclass).on('touchmove', function(e) {
                e.preventDefault();
				var width = $('.jq22').width();
				var height = $('.jq22').height();
				/*console.log(  )
				console.log(e.originalEvent.touches[0])*/
				var x = e.originalEvent.touches[0].pageX;
				var y = e.originalEvent.touches[0].pageY - $('.jq22').offset().top - 10 ;
				//console.log( y)
				var xbl = x/width;
				var ybl = y/height;
				var a = '';
		/*		console.log(xbl)
                console.log(ybl)
                console.log($('.jq22 .item:not(.example)'))*/
				if(xbl < 0.62&&ybl< 0.62){
					if($('.jq22 .item:not(.example)').length>1){
						a = $('.jq22 .item:not(.example)')[0];
					}else{
						a = this;
					}
				}else if(xbl > 0.62&&ybl< 0.31){
					if($('.jq22 .item:not(.example)').length>2){
						a = $('.jq22 .item:not(.example)')[1];
					}else{
						a = this;
					}
				}else if(xbl > 0.62&& ybl> 0.31 &&0.62>ybl){
					if($('.jq22 .item:not(.example)').length>3){
						a = $('.jq22 .item:not(.example)')[2];
					}else{
						a = this;
					}
				}else if(xbl <0.31&& ybl>0.62){
					if($('.jq22 .item:not(.example)').length>4){
						a = $('.jq22 .item:not(.example)')[3];
					}else{
						a = this;
					}
				}else if(xbl <0.62&&xbl >0.31&& ybl>0.62){
					if($('.jq22 .item:not(.example)').length>5){
						a = $('.jq22 .item:not(.example)')[4];
					}else{
						a = this;
					}
				}else if(xbl >0.62&& ybl>0.62){
					if($('.jq22 .item:not(.example)').length>6){
						a = $('.jq22 .item:not(.example)')[5];
					}else{
						a = this;
					}
				}
				//console.log($('.jq22 .item:not(.example)'))
				dad_update($(a))
			})
			
		});
		return this
	}
}(jQuery));