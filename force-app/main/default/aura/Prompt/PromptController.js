({
    onClick : function(component, event, helper) {
        component.set('v.showThis', false);
    },

    onShow : function(component, event, helper) {
        var params = event.getParam('arguments');
        component.set('v.title', params.title);
        component.set('v.messageList', params.messageList);
        component.set('v.showThis', true);
    }
})
