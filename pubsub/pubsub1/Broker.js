import Topic from './Topic.js'
class Broker {
    constructor({retentionSweepMs = 5000} = {}){
        this._topics = new Map();
        this._sweepInterval = retentionSweepMs;
        this._sweepHandle = null;
    }

    createTopic(name, props = {}){
        if(this._topics.has(name)) throw new Error(`Topic ${name} already exists`);
        const topic = new Topic(name, props);
        this._topics.set(name, topic);
        return topic;
    }

    deletTopic(name){
        const t = this._topics.get(name);
        if(!t)return false;
        t._consumers.forEach(c => t.detachConsumer(c));
        t._publishers.clear();
        this._topics.delete(name);
        return true;
    }
    getTopic(name){
        return this._topics.get(name) || null
    }

    listTopics(){
        return Array.from(this._topics.keys())
    }

    status(){
        const topics = {};
        for(const [name, t] of this._topics.entries()){
            topics[name] = t.status();
        }
        return {topics};
    }

    startRetentionSweep(){
       this._sweepHandle = setInterval(() => {
          try {
             this._topics.forEach((t) => t.cleanupRetention());
          }
          catch(err){
              console.error("Retention sweep error", err);
          }
       }, this._sweepInterval);
    }


    stopRetentionSweep(){
        if(!this._sweepHandle)return;
        clearInterval(this._sweepHandle);
        this._sweepHandle = null;
    }
}

export default Broker;