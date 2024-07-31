import React from 'react'
import * as styles from './preloader.module.scss'

const Preloader: React.FC = ({
}) => {
    return (
        <div className={styles.preloader}>
            <div className={styles.container}>
                <svg
                    className={styles.logo}
                    width="82"
                    height="82"
                    viewBox="0 0 91 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.38158 69.4474C3.75256 69.4474 2.15148e-07 65.6948 7.06515e-07 61.0658C1.19788e-06 56.4368 3.75256 52.6842 8.38158 52.6842L15.5658 52.6842C20.1948 52.6842 23.9474 56.4368 23.9474 61.0658C23.9474 65.6948 20.1948 69.4474 15.5658 69.4474H8.38158Z"
                        fill="#D2E5F1"
                    />
                    <path
                        d="M0 82.6184C-1.0117e-07 87.2474 3.75256 91 8.38158 91H27.5395C32.1685 91 35.9211 87.2474 35.9211 82.6184C35.9211 77.9894 32.1685 74.2368 27.5395 74.2368H8.38158C3.75256 74.2368 1.0117e-07 77.9894 0 82.6184Z"
                        fill="#D2E5F1"
                    />
                    <path
                        d="M10.7763 47.8947C4.82472 47.8947 3.28956e-07 43.07 9.60714e-07 37.1184C1.59247e-06 31.1668 4.82472 26.3421 10.7763 26.3421L25.1447 26.3421C31.0963 26.3421 35.921 31.1668 35.921 37.1184C35.921 43.07 31.0963 47.8947 25.1447 47.8947H10.7763Z"
                        fill="#D2E5F1"
                    />
                    <path
                        d="M28.7368 61.0658C28.7368 65.6948 32.4894 69.4474 37.1184 69.4474H82.6184C87.2474 69.4474 91 65.6948 91 61.0658C91 56.4368 87.2474 52.6842 82.6184 52.6842H37.1184C32.4894 52.6842 28.7368 56.4368 28.7368 61.0658Z"
                        fill="#D2E5F1"
                    />
                    <path
                        d="M10.7763 21.5526C4.82472 21.5526 3.28956e-07 16.7279 9.60714e-07 10.7763C1.59247e-06 4.82472 4.82472 -6.31758e-07 10.7763 0L80.2237 7.3718e-06C86.1753 8.00355e-06 91 4.82473 91 10.7763C91 16.7279 86.1753 21.5526 80.2237 21.5526L10.7763 21.5526Z"
                        fill="#D2E5F1"
                    />
                    <path
                        d="M55.0789 37.1184C55.0789 43.07 59.9037 47.8947 65.8553 47.8947H80.2237C86.1753 47.8947 91 43.07 91 37.1184C91 31.1668 86.1753 26.3421 80.2237 26.3421H65.8553C59.9037 26.3421 55.0789 31.1668 55.0789 37.1184Z"
                        fill="#D2E5F1"
                    />
                </svg>
                <svg
                    className={styles.load}
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M28.3108 4.3839C28.9394 2.80411 28.1702 0.99026 26.5169 0.593517C23.867 -0.0423745 21.1108 -0.170884 18.3958 0.225281C14.6613 0.77019 11.136 2.28852 8.17428 4.62768C5.21257 6.96683 2.91877 10.0444 1.52343 13.551C0.128088 17.0576 -0.319628 20.8698 0.225281 24.6042C0.77019 28.3387 2.28852 31.864 4.62768 34.8257C6.96683 37.7874 10.0444 40.0812 13.551 41.4766C17.0576 42.8719 20.8698 43.3196 24.6042 42.7747C27.3193 42.3786 29.9238 41.4679 32.2816 40.1013C33.7526 39.2487 33.9714 37.2907 32.9176 35.9564V35.9564C31.8638 34.622 29.9364 34.4274 28.4188 35.1942C26.9474 35.9376 25.3598 36.442 23.7152 36.682C21.0502 37.0709 18.3298 36.7514 15.8275 35.7556C13.3251 34.7599 11.1289 33.123 9.45962 31.0095C7.79036 28.8959 6.70685 26.3802 6.31799 23.7152C5.92914 21.0502 6.24863 18.3298 7.24437 15.8275C8.24011 13.3251 9.87701 11.1289 11.9905 9.45962C14.1041 7.79036 16.6198 6.70685 19.2848 6.31799C20.9293 6.07804 22.5949 6.10782 24.2174 6.39978C25.8908 6.70091 27.6821 5.9637 28.3108 4.3839V4.3839Z"
                        fill="#D2E5F1"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Preloader
