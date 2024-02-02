/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cftchsn/pers-api-consumer-ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
