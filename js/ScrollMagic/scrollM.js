//Scroll Magic

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    
    // build a scene1  for home
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#home-div',
        //triggerHook: 0.6,    
	})
	.setClassToggle('body', 'change-bg-1')
    .addTo(controller);



    
    // build a scene 2 for timer
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#timer-div',
        //triggerHook: 0.6,  
	})
	.setClassToggle('body', 'change-bg-2')
    .addTo(controller);






    // build a scene 8 for event1 
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#product1-div',
        //triggerHook: 0.6,  
	})
	.setClassToggle('body', 'change-bg-3')
    .addTo(controller);
    




    // build a scene 9 for event2 
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#product2-div',
        //triggerHook: 0.6,
	})
	.setClassToggle('body', 'change-bg-4')
    .addTo(controller);
    





    
    // // build a scene 3 for speakers
	// var ourScene = new ScrollMagic.Scene({
    //     triggerElement: '#speakers-div',
    //     //triggerHook: 0.6,   
	// })
	// .setClassToggle('body', 'change-bg-5')
    // .addTo(controller);
    



    // build a scene 4 for team 
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#team-div',
        //triggerHook: 0.6, 
	})
	.setClassToggle('body', 'change-bg-6')
    .addTo(controller);
    




    // build a scene 5 for schedule
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#schedule-div',
        //triggerHook: 0.6,
	})
	.setClassToggle('body', 'change-bg-7')
    .addTo(controller);
    



/*
    // build a scene 6 for events
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#events-div',
        //triggerHook: 0.6,    
	})
	.setClassToggle('body', 'change-bg-8')
    .addTo(controller);
    
*/



    
    



    




    // // build a scene 10 for price 
	// var ourScene = new ScrollMagic.Scene({
    //     triggerElement: '#price-div',
    //     //triggerHook: 0.6,   
	// })
	// .setClassToggle('body', 'change-bg-10')
    // .addTo(controller);
    




    // build a scene 11 for contact us 
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '#contact-div',
        //triggerHook: 0.6, 
	})
	.setClassToggle('body', 'change-bg-11')
	.addTo(controller);

//Scroll Magic