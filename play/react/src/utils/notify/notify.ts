interface ISubscrible {
    eventName: string;
    handler: (...args: any) => void;
}

/**
 * 消息订阅插件
 */
class Notify {
    subscribles: ISubscrible[] = [];

    on = (eventName: string = '', handler = () => {}) => {
        if (!eventName || typeof eventName !== 'string') {
            return;
        }
        this.subscribles.push({
            eventName,
            handler,
        });
    };

    emit = (eventName = '', ...args: any) => {
        if (!eventName || typeof eventName !== 'string') {
            return;
        }
        const subscribles = this.subscribles.filter(
            (x) => x.eventName === eventName,
        );
        subscribles.forEach((subscrible) => {
            subscrible.handler(...args);
        });
    };

    off = (eventName = '') => {
        if (!eventName || typeof eventName !== 'string') {
            return;
        }
        this.subscribles = this.subscribles.filter(
            (x) => x.eventName !== eventName,
        );
    };
}

export default new Notify();
