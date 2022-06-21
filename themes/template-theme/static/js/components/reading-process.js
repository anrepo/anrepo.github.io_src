let readingProcess = (function() {

    function setReadingProcess(val) {
        document.querySelector('progress#reading-progress').value = val;
    }

    function getVerticalScrollPercentage() {
        return (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight ) * 100
    }

    return {
        setReadingProcess: setReadingProcess,
        getVerticalScrollPercentage: getVerticalScrollPercentage
    }

})();

export {readingProcess}