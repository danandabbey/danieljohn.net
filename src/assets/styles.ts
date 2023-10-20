
const bodyStyle = document.body.style
bodyStyle.border = '0px';
bodyStyle.margin = '0px';
bodyStyle.overflowX = 'hidden';
bodyStyle.overflowY = 'hidden';

const mobile: boolean = window.innerWidth <= 900;
const contactHeight = mobile? '3em':'5em'

const style: any = {
    'app': {
        'backgroundImage': `url(${mobile ? './portraitMobile.jpg' : './portrait.jpg'})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'backgroundAttachment': 'fixed',
        'backgroundPosition': 'center',
        'display': 'flex',
        'flexDirection': 'column',
        'width': '100vw',
        'height': '100vh',
    },
    'nameCon': {
        'display': 'flex',
        'flexDirection':'column',
        'height': '75%',
        'textAlign' : mobile? 'center' : 'left'
    },
    'name': {
        'color' : '#fff',
        'position': 'fixed',
        'top': '0',
        'padding' : mobile? '.1em' : '.5em',
        'fontSize': mobile ? '50px' : '100px',
        'marginBlockStart': '0em',
        'marginBlockEnd': '0em'
    },
    'contactSection': {
        'position': 'fixed',
        'bottom': '0',
        'display':'flex',
        'flexDirection': 'row',
        'gap':mobile? '1em' : '5em',
        'width': '100%',
        'padding' : '1em',
    },
    'contactCard': {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent' : 'center',
        'height': contactHeight,
    },
    'cardTitle': {
        'color': '#fff',
        'fontSize': mobile ? '25px' : '50px',
    },
    'link': {
        'color': '#fff',
        'textDecoration':'none'

    }

};
    
export default style