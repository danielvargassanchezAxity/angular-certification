class UserService {
    public sayHi(): void {
        console.log("Hi");
    }
}
class Component {
    constructor(public userService: UserService) {

    }
}

class Injector {
    private _container = new Map();
    constructor(private providers: any[] = []) {
        this.providers.forEach((service) => this._container.set(service, new service()))
    }
    get(service: any) {
        const serviceInstance = this._container.get(service);
        if (!serviceInstance) {
            throw Error('Instance not found')
        }
        return serviceInstance
    }
}

const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));
component.userService.sayHi();