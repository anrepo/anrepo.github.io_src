let homePage = (function () {

	function init() {
		console.log("init Home page");

		AOS.init({
			offset: 200,
		});
	}

	return {
		init: init
	}
})();

export { homePage }
