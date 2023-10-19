
const bodyStyle = document.body.style
bodyStyle.display = 'flex';
bodyStyle.border = '0px';
bodyStyle.margin = '0px';

const mobile: boolean = window.innerWidth <= 900;

const style: any = {
    'app': {
        'backgroundImage': `url(${mobile ? './portraitMobile.jpg' : './portrait.jpg'})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'backgroundAttachment': 'fixed',
        'backgroundPosition': 'center center',
        'width': '100vw',
        'height': '100vh',
        'overflowX': 'hidden'
    }
};
    
export default style