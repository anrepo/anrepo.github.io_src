/**
 * Устанавливает текущий год элементу с классом 'js--set-actual-year'
 */
let yearActualize = (function() {

  function init() {
    document.querySelectorAll(".js--set-actual-year").forEach( function(item) {
      item.innerHTML = new Date().getFullYear();
    });
  }

  return {
		init: init
	}
})();

export { yearActualize }