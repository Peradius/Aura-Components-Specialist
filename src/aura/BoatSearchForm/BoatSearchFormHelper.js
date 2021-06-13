({
	checkCreateRecordSupport : function(component) {
		let isSupported = $A.get("e.force:createRecord");
		
		component.set('v.newButtonEnabled', isSupported);
	},

	getBoatTypes : function(component) {
		var action = component.get("c.getBoatTypes");

        action.setCallback(this, function(response) {

            if (response.getState() === "SUCCESS") {
                let allValues = response.getReturnValue();
                component.set('v.types', allValues);
            }

        });
        $A.enqueueAction(action);
	},
    
    insertBoat : function(boatType) {
		let createBoatEvent = $A.get("e.force:createRecord");

		createBoatEvent.setParams({
			"entityApiName": "Boat__c",
			"defaultFieldValues": {
				'BoatType__c' : boatType
			}
		});
		createBoatEvent.fire();
	}
})