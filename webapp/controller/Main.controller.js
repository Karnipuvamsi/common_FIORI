sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"csc/BasicMath"
], function (Controller, MessageBox, BasicMath)  {
    "use strict";

    return Controller.extend("commonfiori.controller.Main", {
        onInit() {
        },
        sayHello: function () {
			MessageBox.show("Hello World!");
		},

		onTestMath: function () {
			try {
				// Use BasicMath from the deployed library
				var sum = BasicMath.add(10,1000);
				var product = BasicMath.multiply(5, 3);
				var difference = BasicMath.subtract(50, 10);
				var quotient = BasicMath.divide(100, 50);

				var message = "Math Operations Results:\n\n" +
					"10 + 1000 = " + sum + "\n" +
					"5 × 3 = " + product + "\n" +
					"50 - 10 = " + difference + "\n" +
					"100 ÷ 50 = " + quotient;

				MessageBox.show(message, {
					title: "BasicMath Library Test",
					icon: MessageBox.Icon.SUCCESS
				});
			} catch (error) {
				MessageBox.show("Error: " + error.message, {
					title: "Error",
					icon: MessageBox.Icon.ERROR
				});
			}
		}
    });
});