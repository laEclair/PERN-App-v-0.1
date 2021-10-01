import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor(){
        this._isAuth = false //_ Означает что переменная меняться не может mobx
        this._user = {}
        makeAutoObservable(this)
    }


    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }
    //вызываем верхние фнкции
    get isAuth(){    
        return this._isAuth
    }

    get user(){
        return this._user
    }
}