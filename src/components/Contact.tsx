import style from '../assets/styles'

const Contact = () => {
    return (
        <div id={'contactSection'} style={style.contactSection}>
            <div style={style.contactCard}>
                <a style={style.link} href="http://github.com/danandabbey">
                    <h5 style={style.cardTitle}>
                        GitHub
                    </h5>
                </a>
            </div>
            <div id={'contactCard'} style={style.contactCard}>
                <a style={style.link} href="https://otium.dev">
                    <h5 style={style.cardTitle}>
                        Otium Labs
                    </h5>
                </a>
            </div>
            <div id={'contactCard'} style={style.contactCard}>
                    <a style={style.link} href="mailto:contact@danieljohn.net?subject=contact" target="_blank">
                    <h5 style={style.cardTitle}>
                        Email
                    </h5>
                </a>
            </div>
        </div>
    )
};

export default Contact