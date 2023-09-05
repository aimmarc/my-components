interface IHandlerList {
    name: string;
    handler?: (...args: any) => void;
}

interface IMessageBody {
    type: string;
    data?: any;
}

/**
 * frame 消息通知封装
 */
class PostMessage {
    private handlers: IHandlerList[] = [];

    constructor() {
        this.init();
    }

    private init() {
        window.addEventListener('message', (evt: MessageEvent) => {
            let data: IMessageBody = { type: '' };
            try {
                data = JSON.parse(evt.data);
            } catch (err) {
                console.log('解析消息体失败');
            }
            const handlers = this.handlers.filter((x) => x.name === data?.type);
            handlers.forEach(({ handler }) => {
                handler?.(data.data);
            });
        });
    }

    subscrible(messageName: string, handler?: (...args: any) => void) {
        if (!messageName) {
            console.error('消息类型是必须的');
            return;
        }
        this.handlers.push({
            name: messageName,
            handler,
        });
    }

    /**
     * 发出通知
     * @param data
     * @param targetOrigin
     */
    publish(data: IMessageBody = { type: '', data: {} }, targetOrigin: string = '*') {
        if (!data.type) {
            console.error('消息类型是必须的');
            return;
        }
        window.postMessage(JSON.stringify(data), targetOrigin);
    }

    /**
     * 取消订阅
     * @param messageName
     */
    off(messageName: string) {
        this.handlers = this.handlers.filter((x) => x.name === messageName);
    }
}

export default new PostMessage();
