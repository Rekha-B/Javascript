class Topic {
    constructor(name, { retentionMs = 1000 * 60 * 5 } = {}){
        this.name = name;
        this.retentionMs = retentionMs;
        this.messages = [];
        this._consumers = new Set();
        this._publishers = new Set();
        this._nextOffset = 0;
    }

    attachConsumer(consumer){
        this._consumers.add(consumer);
    }

    attachPublisher(publisher){
        this._publishers.add(publisher);
    }
    detachConsumer(consumer){
        this._consumers.delete(consumer);
    }
    detachPublisher(publisher){
        this._publishers.delete(publisher);
    }
    get lastOffset(){
        return this._nextOffset - 1;
    }
    publish(payload){
       const msg = {offset: this._nextOffset++, ts: Date.now(), payload}; 
       this.messages.push(msg);

       for(const c of this._consumers){
        setTimeout(() => {
            try {
               c._onMessage(msg);
            }
            catch(err){
               console.error(`Consumer ${c.id} exception while processing message`, err);
               c._onError(err, msg);
            }
        }, 0);
       }
       return msg.offset
    }

    async publishParallel(payloads = []){
        const promises = payloads.map(p => {
           return new Promise((res) => {
            try {
              const data = this.publish(p);
              res(data);
            }
            catch(err){
                console.error("publishParallel: error publishing item", err);
                res(undefined);
            }
           })
        })
        return Promise.all(promises);
    }

    cleanupRetention(){
        if(!this.retentionMs || this.retentionMs <= 0)return;
        const cutoff = Date.now() - this.retentionMs;
        let idx = 0;
        while(idx < this.messages.length && this.messages[idx].ts < cutoff) idx++;
        if(idx > 0){
            this.messages.splice(0, idx);
        }
    }

    getMessageFrom(offset){
        return this.messages.filter(m => m.offset >= offset);
    }

    status(){
        const first = this.messages.length ? this.messages[0].offset : null;
        return { 
            name: this.name,
            retentionMs: this.retentionMs,
            lastOffset: this._nextOffset,
            messageCount: this.messages.length,
            consumers: Array.from(this._consumers).map((c) => c.id),
            publishers: Array.from(this._publishers).map((p) => p.id),
        }
    }
}

export default Topic;