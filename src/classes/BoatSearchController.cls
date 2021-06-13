public class BoatSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Map<String, String>> getBoatTypes() {
        List<Map<String, String>> items = new List<Map<String, String>>();
        
        for (BoatType__c type : [SELECT Name FROM BoatType__c LIMIT 50000]) {
            items.add(new Map<String, String>{'value' => type.Id, 'label' => type.Name});
        }
        return items;
    }
}