$(document).ready(function() {
	//http://www.alvarotrigo.com/fullPage/
	$('#fullpage').fullpage({
		sectionColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
	});

	$('#scrollbutton').click(function() {
		$.fn.fullpage.moveSectionDown();
	});

	$('.rectangle').click(function() {
		$('this').toggleClass("opened");
	});

	
	$('.rectangle').each(function() {
	});

  	$('.rectangle').click(function() {
	  	var index = $(this).index();
	  	if (currentTrack != -1) sounds[currentTrack].pause();
	  	if (index != currentTrack && sounds[index].paused) {
	  		sounds[index].play();
	  		currentTrack = index;
	  	} else {
	  		sounds[index].pause();
	  	}

	    $(this).toggleClass("opened");
	    //to auto flip front when toggling, create var to track open and closed
 	});

	var colors = [
		'#FFD7B2',
		'#FEE6A5',
		'#D8A079',
		'#FFD18E',
		'#FFE8B1',
		'#EDB185',
		'#52422D',
		'#FFEBC8',
		'#E3B589',
		'#714E22',
		'#F1C58E',
		'#FFD1A1',
		'#89533E',
		'#FFDB9D',
		'#FEDEC7'
	];

	var blocks = $('.rectangle');
	
	for (var i = 0; i < blocks.length; i++) {
		var color = colors[i % colors.length];
		$(blocks[i]).css('background-color',color);
	};

	var load = new Array()
		function preload() {
			for (i = 0; i < preload.arguments.length; i++) {
				load[i] = new Image()
				load[i].src = preload.arguments[i]
			}
		}
		preload(
			'sounds/1.mp3',
			'sounds/2.mp3',
			'sounds/3.mp3',
			'sounds/4.mp3',
			'sounds/5.mp3',
			'sounds/6.mp3',
			'sounds/7.mp3',
			'sounds/8.mp3',		
			'sounds/9.mp3',
			'sounds/10.mp3',
			'sounds/11.mp3',
			'sounds/12.mp3',
			'sounds/13.mp3',
			'sounds/14.mp3',
			'sounds/15.mp3'
		)

	var sounds = [
		new Audio('sounds/1.mp3'),
		new Audio('sounds/2.mp3'),
		new Audio('sounds/3.mp3'),
		new Audio('sounds/4.mp3'),
		new Audio('sounds/5.mp3'),
		new Audio('sounds/6.mp3'),
		new Audio('sounds/7.mp3'),
		new Audio('sounds/8.mp3'),		
		new Audio('sounds/9.mp3'),
		new Audio('sounds/10.mp3'),
		new Audio('sounds/11.mp3'),
		new Audio('sounds/12.mp3'),
		new Audio('sounds/13.mp3'),
		new Audio('sounds/14.mp3'),
		new Audio('sounds/15.mp3')
	];

	var currentTrack = -1;
});