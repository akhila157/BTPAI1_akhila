sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'akhilasiripurapu1d02/customermessage/test/integration/FirstJourney',
		'akhilasiripurapu1d02/customermessage/test/integration/pages/CustomerMessagesList',
		'akhilasiripurapu1d02/customermessage/test/integration/pages/CustomerMessagesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessagesList, CustomerMessagesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('akhilasiripurapu1d02/customermessage') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessagesList: CustomerMessagesList,
					onTheCustomerMessagesObjectPage: CustomerMessagesObjectPage
                }
            },
            opaJourney.run
        );
    }
);