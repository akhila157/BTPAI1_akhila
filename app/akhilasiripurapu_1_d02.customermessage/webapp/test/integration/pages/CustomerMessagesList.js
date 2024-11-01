sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'akhilasiripurapu1d02.customermessage',
            componentId: 'CustomerMessagesList',
            contextPath: '/CustomerMessages'
        },
        CustomPageDefinitions
    );
});