class Publisher {
    constructor(id, broker){
        this.id = id;
        this.broker = broker;
    }

    publish(topicNmae, payload){
       const topic = this.broker.getTopic(topicName);
       if(!topic)throw new Error(`Topic ${topicNmae} not found`);
       topic.attachPublisher(this);
       return topic.publish(payload);
    }

    publishParallel(topicName, payloads){
        const topic = this.broker.getTopic(topicName);
        if(!topic)throw new Error(`Topic ${topicNmae} not found`);
        topic.attachPublisher(this);
        return topic.publishParallel(payloads);
    }
}

export default Publisher;