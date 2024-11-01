sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'akhilasiripurapu1d02.customermessage',
            componentId: 'CustomerMessagesObjectPage',
            contextPath: '/CustomerMessages'
        },
        CustomPageDefinitions
    );
});