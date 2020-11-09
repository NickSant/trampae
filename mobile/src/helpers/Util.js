
export default class Util{
    static api_base_url(op=false){
        return `${process.env.REACT_APP_HOST_API}:${process.env.REACT_APP_PORT_API}/${op ? op : ''}`
    }
}