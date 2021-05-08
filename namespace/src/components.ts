// namespace Components {
    // export namespace Sub{
    //     export class Test{}
    // }


    export class Header{
        constructor(){
            const el = document.createElement('div');
            el.innerText = 'this is header';
            document.body.appendChild(el);
        }
    }
    
    export class Content{
        constructor(){
            const el = document.createElement('div');
            el.innerText = 'this is content';
            document.body.appendChild(el);
        }
    }
    
    export class Footer{
        constructor(){
            const el = document.createElement('div');
            el.innerText = 'this is footer';
            document.body.appendChild(el);
        }
    }
//}