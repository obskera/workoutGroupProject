if (localStorage.getItem('cookieSeen') != 'shown') {
    document.getElementById('bodySection').style.display = 'none'
    darthFader('cookie-banner')
  };

  document.querySelector('#close').addEventListener('click', (async function() {
    await darthFader('cookie-banner', 'out')
    await darthFader('bodySection')
    localStorage.setItem('cookieSeen','shown')
  }))

  document.querySelector('#revokeCookiePerms').addEventListener('click', (async function() {
    await darthFader('cookie-banner')
    await darthFader('bodySection', 'out')
    localStorage.removeItem('cookieSeen','shown')
  }))
  
  
  async function darthFader(target, out) {
    const element = document.getElementById(target);
    let op;
    let timer;

    if (out) {
        op = 1;
        timer = setInterval( fadeOut, 20 )
    } else {
        op = 0.1;
        timer = setInterval( fadeIn, 30 )
    }

    async function fadeOut() {
        if ( op <= 0.1 ) {
            clearInterval( timer );
            element.style.display = "none";
        }
        element.style.opacity = op;
        op -= op * 0.1;
    }

    async function fadeIn() {
        element.style.display = "block";
        if ( op >= 0.95 ) {
            clearInterval( timer );
        }
        element.style.opacity = op;
        op += op * 0.1;
    }
}