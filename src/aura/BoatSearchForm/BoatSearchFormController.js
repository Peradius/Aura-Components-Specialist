({
	doInit: function (component, event, helper) {
		helper.checkCreateRecordSupport(component);
		helper.getBoatTypes(component);
	},

	handleSearch : function(component, event, helper) {
	},

	handleNew : function(component, event, helper) {
        let boatType = component.find('boatSelect').get('v.value');
		if(boatType === "") boatType = null;

		// helper.insertBoat(boatType); -- Fails on Trailhead, but it's a good practice to keep Controller clean

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