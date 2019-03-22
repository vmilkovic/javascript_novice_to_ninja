if(window.Notification){
	Notification.requestPermission()
		.then((permission) => {
			if(Notification.permission === 'granted'){
				//new Notification('Hello Javascript!')
				const notification = new Notification('Javascript: Novice to ninja', {
					body: 'The new book from SitePoint',
					icon: 'sitepointlogo.png'
				});
				notification.addEventListener('click', () => {
					window.open('https:://sitepoint.com');
				}, false)
			};
		});
}