
const mobile = window.innerWidth <= 900

const style = {
    'app': {
        'backgroundImage' : `url(${mobile? './portraitMobile.jpg' : './portrait.jpg'})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'backgroundAttachment': 'fixed',
        'backgroundPosition': 'center center',
        'width': '100vw',
        'height' : '100vh',
    }
};
    
export default style