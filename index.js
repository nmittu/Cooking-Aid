exports.handler = (event, context, callback) => {
    // TODO implement
    userid = event.session.user.userId;
    intent = event.request.intent;

    if(intent.name == "AddFood"){
        skill = intent.slots.FoodToAdd;
        callback(null,
        {
            "version": "1.0",
            "response": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": "Added "+skill.value+" to list of food."

                },
                "card": {
                    "type": "Simple",
                    "title": "Added Food",
                    "Content": "Added "+skill.value+" to list of food."
                },
                "shouldEndSession": true
            }
        }
        );
    }

    callback(null, 'Hello from Lambda');
};
