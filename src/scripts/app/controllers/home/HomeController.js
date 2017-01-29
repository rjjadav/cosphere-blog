'use strict';

var mCtrls = require('./../_mCtrls');

mCtrls.controller('HomeController', HomeController);

HomeController.$inject = ['$mdSidenav','$state','constants','HomepageData'];

function HomeController($mdSidenav, $state, constants,HomepageData){
	
	var home = this;

	home.blogContents = [
		{
			id: 1,
			blogTitle : "Why is Twitter renting out its unused office space in SF HQ",
			imageSrc : "http://blog.cosphere.in/wp-content/uploads/2016/08/Coworking-250x175.jpg",
			content: 'In a recent bit, twitter is subleasing around 180K sq. ft. of its unused office space in its San Francisco HQ apparently in an effort to make better use of extra space. Well by some this is read as sign of trouble for the social media giant, for others this is in reflection to how shared and collaborative economy is on the rise as new businesses&nbsp;are looking to leverage resources&nbsp;including innovative workspaces to form coalitions and collaborations needed to achieve more with less</p><p><a href="https://uk.finance.yahoo.com/video/twitter-rents-office-space-sf-205200277.html?utm_content=buffer9d51d&amp;utm_medium=social&amp;utm_source=facebook.com&amp;utm_campaign=buffer">Twitter rents out its unused office space in SF HQ</a></p><p>2016 has not been a candy for young startups in India. Downfall in funding coupled with mega lay-offs in the ecosystem has left these startups with vast unused office spaces built-up in the hope of constant sunshine. Flipkart,&nbsp;<a href="http://timesofindia.indiatimes.com/topic/Snapdeal">Snapdeal</a>, Zomato, Grofers, Housing, TinyOwl and a host of others have&nbsp;shown the door to more than 10K in last few quarters. A 2012 Gurgaon based startup is now sitting on 20K sq. ft. unused office space locked-in until 2019. A Bangalore based HR startup is looking to sublease 28K sq. ft. space to multiple start-ups in a shared occupancy model. Some even worse with shutting down the shop all together. <a href="http://economictimes.indiatimes.com/tech/ites/askme-shuts-down-lays-off-4000-employees/articleshow/53773511.cms">Askme shuts down, lays off 4,000</a></p><p><a href="http://timesofindia.indiatimes.com/trend-tracking/startup-layoffs-continue/articleshow/53465457.cms">Recent Layoffs in Indian Startups</a></p><p>While on the other side, India is also witnessing an unparallel rise in no of startups&nbsp;incubating, expected to grow from 20K today to about 100K in next 10 years forecasted to employ more than 3.25 mn. The phenomenon has led to exponential rise in coworking spaces popping up in every corner of the start-up hubs primarily Gurgaon, Bangalore, Mumbai, Pune, Hyderabad. More and more are opting to start&nbsp;in these coworking spaces rather than setting up their own workspaces; with high fluctuation in the ecosystem and low visibility in the macro growth levers, these spaces offer all-inclusive option for startups to plug &amp; play and grow on the go or vice-versa.</p><p>Though, Coworking spaces are much beyond the physical space. They offer an&nbsp;inspiring ecosystem where collaboration &amp; coalitions co-exist. They offer workspaces devoid of hierarchy, designations &amp; glass ceilings. Over and above, a fun with formal ambience and aesthetic makes them 1st choice of consideration for anybody starting afresh.</p><p>More and more employers are also now learning to make an effort in making workspaces vibrant, energetic, and attractive for employees to make them want to work everyday for the rest of their lives.</p><p>Evidently, there will be less long-leases outside grade A development in the coming years as more and more businesses will opt for coworking or shared offices. The choice would primarily depend on nature of business and team size among others.</p><p>Back to the top, who would mind subleasing twitter office in the heart of SF?</p>',
			contentImage: "http://blog.cosphere.in/wp-content/uploads/2016/08/Coworking-250x175.jpg",
			blogDate: new Date(2016,7,22),
			tags: ['collaboration','coworkingspace','flexibleworkspaces','sharedoffice']
		},
		{
			id: 2,
			blogTitle: "How to select the right Co-Working Space for your startup",
			imageSrc: 'http://blog.cosphere.in/wp-content/uploads/2016/06/Ad-1-250x175.png',
			content: '',
			contentImage: "",
			blogDate: new Date(2016,5,22),
			tags: ['coworkingspace','sharedoffice']
		},
		{
			id:3,
			blogTitle: "Work Space at Your Pace amidst a Supportive Community",
			imageSrc: null,
			content: 'In late 2015, Arjun and Ruchi returned to India after working over 10 years overseas, including the US and Singapore, to start their parallel ventures. They believed in their vision and felt India afforded the perfect place and time to start their own ventures. Arjun wanted to build a Fintech product.&nbsp; He had a good workspace to work from, but lacked the ideal team to help him fructify his vision.&nbsp; Ruchi wished to implement her idea in creative arts.&nbsp; She had no problem in bringing together a good team, but couldn’t find a place they could work out of.&nbsp; They figured there must be several such professionals who face one or both of these issues. And therein got planted the seed to resolve this issue for similar people who had a vision and entrepreneurial spirit, but needed help to get them started.&nbsp; Arjun and Ruchi saw a hitherto relatively untapped opportunity and Cosphere was born!</p><p>&nbsp;</p><p>Their vision was to build a holistic ecosystem of shared economy for professionals and their work. Translated, their mission became to offer people the space they needed according to their requirements in an atmosphere and setting that brought together professionals who could support, collaborate and work inter-dependently—a place to work and grow and build professional and personal relationships.&nbsp;&nbsp; The model rests on the assumption and belief that there are several professionals who do not require to lease long-term office space or hire full-time employee to build linear business models. This is the way of the future.&nbsp; Going forward, India’s economy will be dominated by non-linear business models, where more will be done by less, and both space and work will not necessary be directly proportional to revenue and businesses growth.</p><p><a href="http://www.cosphere.in"><img class="aligncenter wp-image-11 size-large" src="http://blog.cosphere.in/wp-content/uploads/2016/06/Ad-1-1024x535.png" alt="Ad-1" width="640" height="334" srcset="http://blog.cosphere.in/wp-content/uploads/2016/06/Ad-1-1024x535.png 1024w, http://blog.cosphere.in/wp-content/uploads/2016/06/Ad-1-300x157.png 300w, http://blog.cosphere.in/wp-content/uploads/2016/06/Ad-1-768x401.png 768w, http://blog.cosphere.in/wp-content/uploads/2016/06/Ad-1.png 1200w" sizes="(max-width: 640px) 100vw, 640px"></a></p><p>Cosphere’s focus is to help professionals realize the benefits of a shared economy and make their members future-ready by bringing them out of their conventional work cubicles, homes, or even cafeterias to spaces where collaboration, coalition and co-existence will provide great impetus to their productivity.&nbsp; Cosphere offers a flexible workspace model to suit varied requirements.&nbsp; Additionally, it seeks to enable space providers and landlords to monetize and capitalize on their unused space.</p><p>&nbsp;</p><p>The offshoot and bonus of the model is that it also helps save professionals time by working in a spaces close to their homes.&nbsp; This is a definite need, given the ever-increasing traffic and clogged roads leading to hours wasted on the road. It’s more than that.&nbsp; Commuting less help fight air pollution, a key requirement that needs our unflinching support.</p><p>Cosphere is taking off and looks forward to serving you in the best possible way.</p><p>Wish us luck and become a part of our journey.&nbsp; We certainly wish to be part of yours.</p><p>We will give you a space to grow,</p><p>Give us a chance and increase your show!</p><p>http://www.cosphere.in/intro</p>',
			contentImage: "",
			blogDate: new Date(2016,5,17),
			tags: []
		}
	];
}



