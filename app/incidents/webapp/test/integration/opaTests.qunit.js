sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'esegura/com/pe/incidents/test/integration/FirstJourney',
		'esegura/com/pe/incidents/test/integration/pages/IncidentsList',
		'esegura/com/pe/incidents/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('esegura/com/pe/incidents') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);