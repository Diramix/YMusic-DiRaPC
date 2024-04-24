import styles from './header.module.scss'
import React from 'react'

import FiMinus from './../../../../static/assets/icons/minus.svg'
import Minimize from './../../../../static/assets/icons/minimize.svg'
import Close from './../../../../static/assets/icons/close.svg'
import { MdDownload } from 'react-icons/md'

interface p {
    goBack?: boolean
}

const Header: React.FC<p> = ({ goBack }) => {
    return (
        <>
            <header className={styles.nav_bar}>
                <div className={styles.fix_size}>
                    <div className={styles.logoplace}>
                        <img
                            className={styles.logoapp}
                            src="static/assets/logo/logoapp.png"
                            alt=""
                        />
                        <span>PulseSync</span>
                    </div>
                    <div className={styles.event_container}>
                        <button className={styles.update_download}>
                            <MdDownload size={26} />
                        </button>
                        <div className={styles.button_container}>
                            <button
                                id="hide"
                                className={styles.button_title}
                                onClick={window.electron.window.minimize}
                            >
                                <FiMinus />
                            </button>
                            <button
                                id="minimize"
                                className={styles.button_title}
                                onClick={window.electron.window.maximize}
                            >
                                <Minimize />
                            </button>
                            <button
                                id="close"
                                className={styles.button_title}
                                onClick={window.electron.window.close}
                            >
                                <Close />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header