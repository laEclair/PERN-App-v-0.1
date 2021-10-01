import {makeAutoObservable} from "mobx";


export default class DeviceStore {
    constructor(){
       
        this._types = []
        this._troublescores = []
        
        //услуги
        this._services = []
        this._selectedType = {}
        this._selectedTroublescore = {}
        this._page = 1 // 1 страница открыта
        this._totalCount = 0 // Товары по запросу( сколько доступно)
        this._limit = 3 // лимит товаров на странице

 

        makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types
    }

    setTroublescores(troublescores) {
        this._troublescores = troublescores
    }
    setServices(services) {
        this._services = services
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedTroublescore(troublescore) {
        this._selectedTroublescore = troublescore
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    //вызываем верхние фнкции
    get types(){    
        return this._types
    }

    get troublescores(){
        return this._troublescores
    }

    get services(){    
        return this._services
    }

    get selectedType() {    
        return this._selectedType
    }

    get selectedTroublescore() {    
        return this._selectedTroublescore
    }

    get totalCount() {    
        return this._totalCount
    }
    get page() {    
        return this._page
    }
    get limit() {    
        return this._limit
    }
}